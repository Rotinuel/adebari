"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FiPhoneCall, FiMail, FiMapPin, FiMenu, FiX } from "react-icons/fi";

export default function ContactPage() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT", href: "/contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">

      {/* ===================== TOP BAR ===================== */}
      <div className="bg-[#004d61] text-white text-xs md:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-2 md:gap-6">

          <div className="flex items-center gap-2">
            <FiPhoneCall className="text-white" />
            <span>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</span>
          </div>

          <div className="flex items-center gap-2">
            <FiMail className="text-white" />
            <span>info@adebariKonsult.com</span>
          </div>

        </div>
      </div>

      {/* ===================== LOGO + CONTACT BAR ===================== */}
      <div className="bg-white border-b py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={60} height={20} alt="Logo" />
          </div>

          {/* Contact Info (Desktop only) */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-2">
              <FiPhoneCall className="text-[#004d61] text-xl" />
              <div>
                <p className="text-xs text-black">24/7 Phone Services</p>
                <p className="font-bold text-black">555 666 999 00</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FiMapPin className="text-[#004d61] text-xl" />
              <div>
                <p className="text-xs text-black">Visit Our Place</p>
                <p className="font-bold text-black">LG 11209, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-4xl text-black"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>


      {/* ===================== MAIN NAVBAR ===================== */}
      {/* Desktop Nav */}
      <div className="hidden md:block bg-gray-500 text-white py-2 md:py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-start items-center">
          <ul className="flex gap-8 font-semibold">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-200 hover:text-[#ffbb00] ${isActive ? "text-[#ffbb00]" : ""
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      {/* ===================== MOBILE NAVBAR ===================== */}
      {/* This is separate from desktop nav */}
      {openMenu && (
        <div className="md:hidden bg-black text-white px-4 py-4 w-full">
          <ul className="flex flex-col gap-4 font-medium">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpenMenu(false)}
                  className={`transition-colors duration-200 hover:text-[#ffbb00] ${isActive ? "text-[#ffbb00]" : ""
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </ul>
        </div>
      )}



      {/* ===================== STICKY NAVBAR (Appears on scroll) ===================== */}
      {showStickyNav && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 w-full bg-white text-black shadow-lg z-999"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

            {/* Small Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.png" width={40} height={72} alt="Logo" />
            </div>

            {/* Sticky Nav Links (Desktop) */}
            <ul className="hidden md:flex gap-6 font-semibold text-sm">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:text-[#ffbb00] ${isActive ? "text-[#ffbb00]" : ""
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {openMenu && (
            <div className="md:hidden bg-black text-white px-4 py-4">
              <ul className="flex flex-col gap-4 font-medium">
                {navLinks.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenMenu(false)}
                      className={`transition-colors duration-200 hover:text-[#ffbb00] ${isActive ? "text-[#ffbb00]" : ""
                        }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
        </motion.div>
      )}

    </div>
  );
}

