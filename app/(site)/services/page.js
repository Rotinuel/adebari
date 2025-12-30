// export default function Services() {
//   const services = ['Residential Construction','Commercial Construction','Structural Engineering','Renovation & Remodeling','Project Management']
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
//       <div className="grid md:grid-cols-2 gap-4">
//         {services.map(s => <div key={s} className="p-6 bg-white rounded shadow-sm">{s}</div>)}
//       </div>
//     </div>
//   )
// }

"use client";

import React from 'react';
import { 
  Home, 
  Building2, 
  Ruler, 
  Hammer, 
  Briefcase, 
  HardHat, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: 'Residential Construction',
    description: 'Crafting bespoke homes and luxury residential complexes with a focus on modern aesthetics and structural integrity.',
    icon: Home,
  },
  {
    title: 'Commercial Construction',
    description: 'Developing high-performance office spaces, retail hubs, and industrial facilities tailored to business growth.',
    icon: Building2,
  },
  {
    title: 'Structural Engineering',
    description: 'Advanced load-bearing analysis and blueprint designs ensuring safety and durability for complex architectures.',
    icon: Ruler,
  },
  {
    title: 'Renovation & Remodeling',
    description: 'Breathing new life into existing structures with modern upgrades, sustainable materials, and efficient layouts.',
    icon: Hammer,
  },
  {
    title: 'Project Management',
    description: 'End-to-end supervision, budgeting, and scheduling to ensure projects are delivered on time and within scope.',
    icon: Briefcase,
  },
  {
    title: 'Civil Infrastructure',
    description: 'Building the backbone of society, from urban drainage systems to heavy-duty road and bridge construction.',
    icon: HardHat,
  }
];

export default function Services() {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[#55a630]" />
            <span className="uppercase tracking-widest text-sm text-gray-400">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="text-[#55a630]">Building</span> Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            From initial concept to final finishing, we provide a full spectrum of construction services 
            backed by decades of engineering excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group p-8 bg-gray-800/40 border border-white/5 rounded-2xl hover:border-[#55a630]/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-[#55a630]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#55a630] transition-colors duration-300">
                  <Icon className="text-[#55a630] group-hover:text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#55a630] hover:text-white transition-colors"
                >
                  Request Consultation <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Area */}
        <div className="mt-20 p-8 md:p-12 bg-[#55a630] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-2">Have a project in mind?</h3>
            <p className="text-white/80">Let’s build something extraordinary together.</p>
          </div>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>

      </div>
    </section>
  );
}