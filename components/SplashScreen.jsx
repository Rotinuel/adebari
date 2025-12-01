// "use client";

// import { useEffect, useState } from "react";

// export default function SplashScreen({ onFinish }) {
//     const [visible, setVisible] = useState(true);

//     useEffect(() => {
//         // Length of the intro animation
//         setTimeout(() => {
//             setVisible(false);
//             onFinish(); // notify parent
//         }, 3000); // <-- same 3 seconds as your jQuery code
//     }, [onFinish]);

//     return (
//         <div
//             className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-9999 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
//                 }`}
//         >
//             <img
//                 src="/people.png" // your intro image
//                 alt="Loading..."
//                 className="w-40 h-40 animate-fade"
//             />
//         </div>
//     );
// }

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SplashScreen({ onFinish }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const logoRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onFinish();
      }
    });

    tl.set(containerRef.current, { opacity: 1 });

    tl.fromTo(
      videoRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8, filter: "blur(6px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" },
      "-=0.5"
    );

    tl.to(
      logoRef.current,
      { opacity: 1, scale: 1.05, filter: "brightness(1.5)", duration: 0.7 },
      "+=0.2"
    );

    tl.fromTo(
      overlayRef.current,
      { x: "-100%" },
      { x: "0%", duration: 1.2, ease: "power4.inOut" }
    );

    tl.to(videoRef.current, {
      filter: "blur(12px)",
      opacity: 0,
      duration: 1.2,
      ease: "power2.inOut"
    });

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut"
    });

  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full bg-black overflow-hidden z-9999 opacity-0"
    >
      {/* Video */}
      <video
        ref={videoRef}
        src="/intro.mp4"
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      />

      {/* Logo */}
      <div
        ref={logoRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img src="/logo.svg" className="w-48 h-48 opacity-0" />
      </div>

      {/* Cinematic wipe overlay */}
      <div
        ref={overlayRef}
        className="absolute top-0 left-0 w-full h-full bg-[#ff0047] opacity-70 -translate-x-full"
      />
    </div>
  );
}
