"use client"
import React, { useState, useRef } from 'react';
import Image from 'next/image';



// 1. DATA STRUCTURE
const projects = [
  { id: 1, type: 'image', src: '/ak/IMG_6481.png', title: 'Modern Villa', category: 'Residential' },
  // { id: 2, type: 'video', videoSrc: '', title: 'Olympic Complex 3D', category: 'Sport Complex' }, // Replace with your 3D video path
  { id: 2, type: 'image', src: '/ak/IMG_1281.PNG', title: 'Olympic Complex 3D', category: 'Sport Complex' }, // Replace with your 3D video path
  { id: 3, type: 'image', src: '', title: 'Tech HQ', category: 'Commercial' },
  { id: 4, type: 'image', src: '', title: 'Aquatic Center', category: 'Sport Complex' },
  { id: 5, type: 'video', videoSrc: '', title: 'Retail Hub Render', category: 'Commercial' },
  { id: 6, type: 'image', src: '/ak/IMG_6490.png', title: 'Sunset Apartments', category: 'Residential' },
];

const categories = ['All', 'Residential', 'Sport Complex', 'Commercial'];

// 2. VIDEO COMPONENT (Handles Hover-to-Play)
const VideoCard = ({ src, title }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0; // Resets to start
  };

  return (
    <div 
      className="relative h-72 w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-[#ffbb00] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
        Hover to Tour
      </div>
    </div>
  );
};

// 3. MAIN GALLERY COMPONENT
export default function ConstructionGallery() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filteredData = filter === 'All' 
    ? projects 
    : projects.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-gray-500 uppercase tracking-widest text-sm font-semibold mb-2">Our Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Built to Last</h1>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
                filter === cat 
                  ? 'bg-[#ffbb00] border-[#ffbb00] text-white shadow-lg' 
                  : 'bg-white border-gray-200 text-gray-600 hover:border-[#ffbb00]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md cursor-pointer transition-all hover:shadow-2xl"
              onClick={() => setSelected(item)}
            >
              {item.type === 'video' ? (
                <VideoCard src={item.videoSrc} title={item.title} />
              ) : (
                <div className="relative h-72 w-full">
                  <Image 
                    src={item.src} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
              )}
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-orange-400 text-xs font-bold uppercase mb-1">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selected && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-white text-5xl hover:text-orange-500">&times;</button>
            
            <div className="relative w-full max-w-6xl aspect-video overflow-hidden rounded-lg bg-black flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {selected.type === 'video' ? (
                <video src={selected.videoSrc} controls autoPlay className="max-h-full" />
              ) : (
                <div className="relative w-full h-full">
                   <Image src={selected.src} fill className="object-contain" alt={selected.title} />
                </div>
              )}
              
              <div className="absolute bottom-4 left-6 text-white bg-black/50 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-orange-400 text-sm font-bold uppercase">{selected.category}</p>
                <h2 className="text-2xl font-bold">{selected.title}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
