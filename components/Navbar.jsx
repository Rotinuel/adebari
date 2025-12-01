"use client";

import Image from "next/image";
import Link from "next/link";
// import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Bell, ShoppingCart, User, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 bg-white transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 h-16">
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              {/* <Image
                src="/logo.png"
                alt="abuja detty december"
                width={56}
                height={56}
                className="w-8 h-8 md:w-12 md:h-12 rounded-full"
              /> */}
              <span className="text-3xl font-bold text-black">AK</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-6 font-medium">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-[#488d17] border-b-2 border-[#488d17]"
                        : "text-gray-700 hover:text-[#488d17]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 text-gray-700">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-gray-700 hover:text-[#488d17] focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 text-black px-6 py-4 space-y-4 animate-slide-down">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block transition-colors duration-200 ${
                  isActive ? "text-[#488d17] font-semibold" : "hover:text-[#488d17]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
