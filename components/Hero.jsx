"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight, Briefcase, Building2 } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/blurry.png"
          alt="Construction Company"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-0.5 bg-[#55a630]" />
          <span className="uppercase tracking-widest text-sm text-gray-300 mt-48">
            Building Excellence Since 1998
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-3xl sm:mt-12 mt-48">
          Engineering <span className="text-[#55a630]">Future-Proof</span> Structures  
          That Stand The Test of Time
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mt-6">
          We design, build, and deliver world-class construction projects across residential, 
          commercial, civil, and industrial sectors — with unmatched precision, safety, and innovation.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="px-8 py-4 bg-[#55a630] text-white rounded-lg text-lg font-semibold flex items-center gap-2 hover:bg-[#4b952c] transition"
          >
            View Our Projects <ArrowRight size={22} />
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-lg text-lg font-semibold hover:bg-white/20 transition flex items-center gap-2"
          >
            Get a Quote <Phone size={20} />
          </Link>
        </div>

        {/* Hero Features / Highlights */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">

          <div className="flex items-start gap-4">
            <CheckCircle className="text-[#55a630]" size={32} />
            <div>
              <h4 className="text-xl font-semibold">Quality & Durability</h4>
              <p className="text-gray-300 text-sm">
                Every project follows global construction standards ensuring lasting value.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Briefcase className="text-[#55a630]" size={32} />
            <div>
              <h4 className="text-xl font-semibold">Skilled Professionals</h4>
              <p className="text-gray-300 text-sm">
                Our team is made of licensed engineers, architects, and certified builders.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Building2 className="text-[#55a630]" size={32} />
            <div>
              <h4 className="text-xl font-semibold">End-to-End Solutions</h4>
              <p className="text-gray-300 text-sm">
                From blueprint to finishing — we handle the entire process seamlessly.
              </p>
            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-16 flex flex-wrap gap-10">
          <div>
            <h2 className="text-4xl font-bold">25+</h2>
            <p className="text-gray-300">Years of Experience</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="text-gray-300">Completed Projects</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">150+</h2>
            <p className="text-gray-300">Industry Experts</p>
          </div>
        </div>

      </div>
    </div>
  );
}
