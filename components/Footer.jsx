"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="sticky bg-gray-900 text-gray-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-y-8">

          {/* Logo / Brand */}
          <div className="flex flex-col space-y-2">
            <Link href="/">
              <span className="text-white text-2xl font-bold">AK</span>
            </Link>
            <p className="text-sm">
              © {new Date().getFullYear()} AK Company. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-y-4 gap-x-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/events" className="hover:text-white">Events</Link>
            <Link href="/bookings" className="hover:text-white">Services</Link>
            <Link href="/gallery" className="hover:text-white">Gallery</Link>
            <Link href="/sponsors" className="hover:text-white">Blog</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </Link>

              <Link href="#" className="hover:text-white" aria-label="Twitter">
                <Twitter size={20} />
              </Link>

              <Link href="#" className="hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </Link>

              <Link href="#" className="hover:text-white" aria-label="LinkedIn">
                <Linkedin size={20} />
              </Link>
            </div>

            <p className="text-sm">
              Email:{" "}
              <Link href="mailto:info@yourdomain.com" className="hover:text-white">
                info@yourdomain.com
              </Link>
            </p>

            <p className="text-sm">
              Phone:{" "}
              <Link href="tel:+1234567890" className="hover:text-white">
                +1 (234) 567-890
              </Link>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
