// 'use client'

// import { useState } from 'react'
// import { FiClock, FiPhoneCall, FiMail, FiMapPin, FiSearch } from "react-icons/fi"

// export default function ContactPage() {
//   return (
//     <div className="w-full top-0">

//       {/* ---------- TOP BAR ---------- */}
//       <div className="w-full bg-[#004d61] text-white text-sm py-4 px-20 flex justify-between items-center top-0">
//         {/* Left */}
//         <div className="flex flex-col gap-2">
//           <div className="flex gap-2 items-center">
//             <FiClock className="text-white" />
//             Mon - Sat 8:00 - 17:00, Sunday - CLOSED
//           </div>
//           <div className="flex gap-2 items-center">
//             <FiMail className="text-white" />
//             info@adebariKonsult.com
//           </div>
//         </div>
//       </div>

//       {/* ---------- LOGO + CONTACT BAR ---------- */}
//       <div className="w-full py-4 px-4 md:px-12 flex justify-between items-center bg-white border-b">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           {/* <img src="/logo.png" className="h-12 w-auto" alt="logo" /> */}
//           <div className="text-xl font-bold text-black">Adebari Konsult</div>
//         </div>

//         {/* Contacts */}
//         <div className="flex items-center gap-10">

//           <div className="flex items-center gap-2">
//             <FiPhoneCall className="text-orange-600 text-xl" />
//             <div>
//               <p className="text-xs text-black">24/7 Phone Services</p>
//               <p className="font-bold text-black">555 666 999 00</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             <FiMapPin className="text-orange-600 text-xl" />
//             <div>
//               <p className="text-xs text-black">Visit Our Place</p>
//               <p className="font-bold text-black">LG 11209, Nigeria</p>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ---------- NAVBAR ---------- */}
//       <div className="w-full bg-black text-white px-4 py-4 flex justify-between items-center">

//         {/* Left Navigation */}
//         <ul className="flex gap-8 font-semibold">
//           <li className="hover:text-orange-500 cursor-pointer">HOME</li>
//           <li className="hover:text-orange-500 cursor-pointer">ABOUT</li>
//           <li className="hover:text-orange-500 cursor-pointer">SERVICES</li>
//           <li className="hover:text-orange-500 cursor-pointer">BLOG</li>
//           <li className="hover:text-orange-500 cursor-pointer">SYSTEM PAGE</li>
//           <li className="hover:text-orange-500 cursor-pointer text-[#004d61]">CONTACT</li>
//         </ul>

//         {/* Right */}
//         <div className="flex items-center gap-4">
//           <FiSearch className="text-xl cursor-pointer" />
//           {/* <div className="bg-orange-600 px-4 py-2 rounded text-sm">English - Australia</div> */}
//         </div>

//       </div>

//       {/* ---------- HERO BANNER ---------- */}
//       <div 
//         className="w-full h-[350px] bg-cover bg-center flex items-center px-6"
//         style={{ backgroundImage: "url('/contact-hero.jpg')" }}
//       >
//         <h1 className="text-4xl md:text-6xl font-extrabold text-white">
//           CONTACT US
//         </h1>
//       </div>

//     </div>
//   )
// }


'use client'

import { useState } from "react";
import Link from "next/link";
import { FiPhoneCall, FiMail, FiMapPin, FiSearch, FiMenu, FiX } from "react-icons/fi";

export default function ContactPage() {
    const [openMenu, setOpenMenu] = useState(false);

    const navLinks = [
        { label: "HOME", href: "/" },
        { label: "ABOUT", href: "/about" },
        { label: "SERVICES", href: "/services" },
        { label: "BLOG", href: "/blog" },
        { label: "SYSTEM PAGE", href: "/system" },
        { label: "CONTACT", href: "/contact" },
    ];


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
                        <img src="/logo.jpeg" className="h-16 w-auto" alt="Logo" />
                    </div>

                    {/* Contact Info – Hidden on Mobile */}
                    <div className="hidden md:flex items-center gap-10">
                        <div className="flex items-center gap-2">
                            <FiPhoneCall className="text-orange-600 text-xl" />
                            <div>
                                <p className="text-xs text-gray-500">24/7 Phone Services</p>
                                <p className="font-bold">555 666 999 00</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <FiMapPin className="text-orange-600 text-xl" />
                            <div>
                                <p className="text-xs text-gray-500">Visit Our Place</p>
                                <p className="font-bold">NY 11209, United States</p>
                            </div>
                        </div>

                    </div>

                    {/* Hamburger Menu */}
                    <button
                        className="md:hidden text-4xl text-black"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        {openMenu ? <FiX /> : <FiMenu />}
                    </button>

                </div>
            </div>

            {/* ===================== NAVBAR ===================== */}
            <div className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex gap-8 font-semibold">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`hover:text-orange-500 ${item.label === "CONTACT" ? "text-orange-500" : ""
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </ul>


                    {/* Right side */}
                    <div className="hidden md:flex items-center gap-4">
                        <FiSearch className="text-xl cursor-pointer" />
                        <div className="bg-orange-600 px-4 py-2 rounded text-sm">
                            English - Australia
                        </div>
                    </div>

                </div>

                {/* Mobile Menu Dropdown */}
                {openMenu && (
                    <div className="md:hidden bg-black text-white px-6 py-4">
                        <ul className="flex flex-col gap-4 font-medium">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`hover:text-orange-500 ${item.label === "CONTACT" ? "text-orange-500" : ""
                                        }`}
                                    onClick={() => setOpenMenu(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </ul>

                        <div className="mt-6 flex items-center gap-3">
                            <FiSearch className="text-xl" />
                            <div className="bg-orange-600 px-4 py-2 rounded text-sm">
                                English - Australia
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* ===================== HERO BANNER ===================== */}
            <div
                className="h-[250px] md:h-[350px] lg:h-[450px] bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/contact-hero.jpg')" }}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        CONTACT US
                    </h1>
                </div>
            </div>

        </div>
    );
}
