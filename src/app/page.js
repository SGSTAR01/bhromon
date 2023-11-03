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
      <main className="main">
        <div className="home">
          <div className="banner">
            <Image src={logo} height={500} className="logo" />
            <div className="banner flex">
              <div className="subtitle">
                GO AROUND THE WORLD, WITHOUT HASSLES
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
