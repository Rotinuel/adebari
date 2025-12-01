"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SplashScreen from "@/components/SplashScreen"
import HeroSection from "@/components/Hero";
import ContactPage from "@/components/Contact";


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
    // <>
    //   {!ready && <SplashScreen onFinish={handleCinematicFinish} />}

    //   {/* HEADER */}
    //   <motion.header
    //     initial={{ opacity: 0, y: -20 }}
    //     animate={showHeader ? { opacity: 1, y: 0 } : {}}
    //     transition={{ duration: 0.8, ease: "easeOut" }}
    //     className="absolute top-0 left-0 w-full flex justify-between p-6 text-white z-50"
    //   >
    //     <div className="text-3xl font-bold">LOGO</div>

    //     <motion.nav
    //       initial={{ opacity: 0 }}
    //       animate={showMenu ? { opacity: 1 } : {}}
    //       transition={{ duration: 0.8, delay: 0.2 }}
    //       className="flex gap-6 text-lg"
    //     >
    //       <a>Home</a>
    //       <a>Events</a>
    //       <a>Contact</a>
    //     </motion.nav>
    //   </motion.header>

    //   {/* HERO SECTION */}
    //   <motion.div
    //     initial={{ opacity: 0, y: 40 }}
    //     animate={showHero ? { opacity: 1, y: 0 } : {}}
    //     transition={{ duration: 1 }}
    //     className="pt-40 text-center text-white"
    //   >
    //     {/* <h1 className="text-5xl font-bold mb-6">Welcome to the Event</h1>
    //     <p className="text-xl opacity-90">Experience the immersive opening animation.</p> */}
    //     <HeroSection />
    //   </motion.div>

    //   {/* SLIDER (auto height) */}
    //   <div className="w-full bg-gray-900" style={{ height: "var(--slider-height)" }}>
    //     <div className="h-full flex items-center justify-center text-white text-3xl">
    //       Slider Section
    //     </div>
    //   </div>
    // </>
    <>
      {!loaded && <SplashScreen onFinish={() => setLoaded(true)} />}
         <div className="flex bg-zinc-50 dark:bg-black">
      <ContactPage />
      {/* <HeroSection /> */}
    </div>
    </>
   
  );
}
