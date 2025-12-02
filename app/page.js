"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SplashScreen from "@/components/SplashScreen"
import HeroSection from "@/components/Hero";


export default function Home() {
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showHero, setShowHero] = useState(false);

  const handleCinematicFinish = () => {
    setTimeout(() => setShowHeader(true), 300);
    setTimeout(() => setShowMenu(true), 900);
    setTimeout(() => setShowHero(true), 1500);
    setReady(true);
  };

  const sliderHeight = () => {
    document.documentElement.style.setProperty("--slider-height", window.innerHeight + "px");
  };

  useEffect(() => {
    sliderHeight();
    window.addEventListener("resize", sliderHeight);
    return () => window.removeEventListener("resize", sliderHeight);
  }, []);


  return (
    <>
      {!loaded && <SplashScreen onFinish={() => setLoaded(true)} />}
         <div className="flex bg-zinc-50 dark:bg-black">
      {/* <ContactPage /> */}
      <HeroSection />
    </div>
    </>
   
  );
}
