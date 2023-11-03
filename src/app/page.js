'use client'

import Image from "next/image"
import "./style/home/index.css"
import logo from "./assets/img/BHROMON-logos_transparent.png";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css"
import { Content } from "next/font/google";
export default function Home() {
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
    <>
<<<<<<< HEAD
      <main >
=======
      <main className="main">
>>>>>>> ae3a8901260c2cbad1999e9a9b8b41604a74105b
        <div className="home">
          <div className="banner">
            <Image src={logo} height={500} className="logo" />
            <div className="banner flex">
<<<<<<< HEAD
              <div className="banner-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
=======
              <div className="subtitle">
                GO AROUND THE WORLD, WITHOUT HASSLES
>>>>>>> ae3a8901260c2cbad1999e9a9b8b41604a74105b
              </div>
            </div>
          </div>
    
          <div style={{justifyContent: "center", display: "flex", marginTop: "50px", marginBottom: "10px"}}>
            <button className="p-2 btn" style={{ outline: "1px solid black", marginLeft: "auto", marginRight: "auto" }} href="/" onClick={handleSignIn}>
              Get Started
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
