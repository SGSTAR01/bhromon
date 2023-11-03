'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import logo from "../assets/img/BHROMON-logos_transparent.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"
import { Content } from "next/font/google";
const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 items-center justify-between p-2">
      <div className="flex">
        <div className="flex logo">
          <Image src={logo} height={100} />
        </div>
        <div className="button-section mx-5" style={{justifyContent: "center", display: "flex"}}>
          <a href="/" className="btn" style={{marginTop: "auto", marginBottom: "auto"}}>Home</a>
          <a href="/" className="btn" style={{marginTop: "auto", marginBottom: "auto"}}>Locations</a>
          <a href="/" className="btn" style={{marginTop: "auto", marginBottom: "auto"}}>Help</a>
        </div>
        {!user ? <div style={{ position: "absolute", right: 50, top: 30}}>
          <button className="p-2 btn" style={{outline : "1px solid black"}} href="/"  onClick={handleSignIn}>
            Get Started
          </button>
        </div> : <div> </div>}

      {loading ? <div /> : !user ? <div /> : (
        <div style={{ position: "absolute", right: 50, top: 30}}>
          <p>Welcome, {user.displayName}</p>
          <button className="btn" onClick={handleSignOut} style={{position: "absolute", right: 0}}>
            Sign out
          </button>
        </div>
      )}
      </div>
      
    </div>
  );
};

export default Navbar;