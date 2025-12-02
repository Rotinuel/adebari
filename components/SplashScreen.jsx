"use client";

import { useEffect, useState, useRef } from "react";

export default function SplashScreen({ onFinish } = {}) {
  const segments = [
    { text: "Adebari ", className: "text-[#ffbb00]" },
    { text: "Konsults", className: "text-[#08465c]" },
  ];

  const typingSpeed = 75; // ms per char (adjust for realism)
  const pauseAfterTyping = 800; // ms before bounce starts
  const fadeDelay = 700; // ms after bounce before fade
  const fadeDuration = 600; // ms fade out duration

  const [visible, setVisible] = useState(true);
  const [typedChars, setTypedChars] = useState(0);
  const [showBounce, setShowBounce] = useState(false);
  const totalChars = segments.reduce((s, seg) => s + seg.text.length, 0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Type one char at a time (JS-controlled for perfect cursor placement)
    intervalRef.current = setInterval(() => {
      setTypedChars((prev) => {
        if (prev >= totalChars - 1) {
          clearInterval(intervalRef.current);
          return prev + 1;
        }
        return prev + 1;
      });
    }, typingSpeed);

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // When typing finished
    if (typedChars >= totalChars) {
      const t1 = setTimeout(() => setShowBounce(true), pauseAfterTyping);
      const t2 = setTimeout(() => {
        // start fade
        setVisible(false);
        // call onFinish after fade completes
        setTimeout(() => {
          if (typeof onFinish === "function") onFinish();
        }, fadeDuration);
      }, pauseAfterTyping + fadeDelay);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [typedChars, totalChars, onFinish]);

  // Build output by slicing through segments according to typedChars
  let remaining = typedChars;
  const rendered = segments.map((seg, i) => {
    const take = Math.max(0, Math.min(seg.text.length, remaining));
    remaining -= take;
    return (
      <span key={i} className={seg.className}>
        {seg.text.slice(0, take)}
      </span>
    );
  });

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-${fadeDuration}`}
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      <h1
        className={`font-extrabold text-4xl sm:text-6xl tracking-tight glow-effect ${
          showBounce ? "animate-bounce" : ""
        }`}
        role="img"
        aria-label="Adebari Konsult"
      >
        {rendered}
        {/* Cursor always at the end */}
        <span
          className="ml-0 inline-block h-[1.05em] align-middle"
          aria-hidden="true"
        >
          <span className="cursor-blink inline-block ml-1 border-r-2 border-white" style={{height: '1em'}} />
        </span>
      </h1>

      <style jsx>{`
        .cursor-blink {
          animation: blink 1s steps(2, start) infinite;
        }

        @keyframes blink {
          0%, 49% { border-color: white; }
          50%, 100% { border-color: transparent; }
        }

        /* subtle glow */
        .glow-effect {
          text-shadow: 0 0 8px rgba(255,255,255,0.08), 0 0 22px rgba(255,255,255,0.06);
        }

        /* Improve bounce timing to feel like a "nudge" after typing */
        @keyframes custom-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .animate-bounce {
          animation: custom-bounce 700ms ease-in-out 0s 3;
        }
      `}</style>
    </div>
  );
}



// "use client";

// import { useEffect, useState } from "react";

// export default function SplashScreen({ onFinish }) {
//     const [visible, setVisible] = useState(true);
//     const [showBounce, setShowBounce] = useState(false);

//     useEffect(() => {
//         // Start bounce AFTER typing finishes
//         setTimeout(() => setShowBounce(true), 2800);

//         // Total splash duration (typing + pause + fade)
//         setTimeout(() => {
//             setVisible(false);
//             onFinish();
//         }, 4500);
//     }, [onFinish]);

//     return (
//         <div
//             className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-9999 transition-opacity duration-1500 ${
//                 visible ? "opacity-100" : "opacity-0 pointer-events-none"
//             }`}
//         >
//             <h1
//                 className={`
//                     text-white font-extrabold 
//                     text-4xl sm:text-6xl 
//                     typing-effect
//                     ${showBounce ? "animate-bounce" : ""}
//                     glow-effect
//                 `}
//             >
//                 <span className="text-[#ffbb00]">Adebari </span>
//                 <span className="text-[#08465c]">Konsult</span>
//             </h1>

//             <style jsx global>{`
//                 /* Typing */
//                 @keyframes typing {
//                     from { width: 0; }
//                     to { width: 100%; }
//                 }

//                 /* Cursor blink */
//                 @keyframes blink {
//                     0%, 50% { border-color: white; }
//                     51%, 100% { border-color: transparent; }
//                 }

//                 /* Slower typing, cursor visible from the start */
//                 .typing-effect {
//                     width: 0;
//                     white-space: nowrap;
//                     overflow: hidden;
//                     border-right: 3px solid white;
//                     animation: 
//                         typing 2.8s steps(30, end) forwards,
//                         blink 0.7s infinite;
//                 }

//                 /* Glow */
//                 @keyframes glowPulse {
//                     0%, 100% {
//                         text-shadow: 0 0 10px white, 0 0 20px #ffffffaa;
//                     }
//                     50% {
//                         text-shadow: 0 0 25px white, 0 0 40px #ffffffdd;
//                     }
//                 }

//                 .glow-effect {
//                     animation: glowPulse 3s ease-in-out infinite;
//                 }
//             `}</style>
//         </div>
//     );
// }


// "use client";

// import { useEffect, useState } from "react";

// export default function SplashScreen({ onFinish }) {
//     const [visible, setVisible] = useState(true);
//     const [showBounce, setShowBounce] = useState(false);

//     useEffect(() => {
//         // After typing animation ends, activate bounce
//         setTimeout(() => setShowBounce(true), 1800);

//         // Total splash duration
//         setTimeout(() => {
//             setVisible(false);
//             onFinish();
//         }, 4000);
//     }, [onFinish]);

//     return (
//         <div
//             className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-9999 transition-opacity duration-700 ${
//                 visible ? "opacity-100" : "opacity-0 pointer-events-none"
//             }`}
//         >
//             <h1
//                 className={`
//                     text-white font-extrabold 
//                     text-4xl sm:text-6xl 
//                     typing-effect
//                     ${showBounce ? "animate-bounce" : ""}
//                     glow-effect
//                 `}
//             >
//                 <span className="text-[#ffbb00]">Adebari</span>
//                 <span className="text-[#08465c]">Konsult</span>
//             </h1>

//             <style jsx global>{`
//                 /* Typing animation */
//                 @keyframes typing {
//                     from { width: 0; }
//                     to { width: 100%; }
//                 }

//                 @keyframes blink {
//                     50% { border-color: transparent; }
//                 }

//                 .typing-effect {
//                     width: 0;
//                     white-space: nowrap;
//                     overflow: hidden;
//                     border-right: 3px solid white;
//                     font-weight: 800;
//                     animation: 
//                         typing 1.8s steps(30, end) forwards,
//                         blink 0.7s step-end infinite;
//                 }

//                 /* Glow pulse */
//                 @keyframes glowPulse {
//                     0%, 100% {
//                         text-shadow: 0 0 10px white, 0 0 20px #ffffffaa;
//                     }
//                     50% {
//                         text-shadow: 0 0 25px white, 0 0 40px #ffffffdd;
//                     }
//                 }

//                 .glow-effect {
//                     animation: glowPulse 2s infinite ease-in-out;
//                 }
//             `}</style>
//         </div>
//     );
// }



// // "use client";

// // import { useEffect, useState } from "react";

// // export default function SplashScreen({ onFinish }) {
// //     const [visible, setVisible] = useState(true);

// //     useEffect(() => {
// //         // Length of the intro animation
// //         setTimeout(() => {
// //             setVisible(false);
// //             onFinish(); // notify parent
// //         }, 3000); // <-- same 3 seconds as your jQuery code
// //     }, [onFinish]);

// //     return (
// //         <div
// //             className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-9999 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
// //                 }`}
// //         >
// //             <img
// //                 src="/people.png" // your intro image
// //                 alt="Loading..."
// //                 className="w-40 h-40 animate-fade"
// //             />
// //         </div>
// //     );
// // }

// // "use client";

// // import { useEffect, useRef } from "react";
// // import { gsap } from "gsap";

// // export default function SplashScreen({ onFinish }) {
// //   const containerRef = useRef(null);
// //   const videoRef = useRef(null);
// //   const logoRef = useRef(null);
// //   const overlayRef = useRef(null);

// //   useEffect(() => {
// //     const tl = gsap.timeline({
// //       onComplete: () => {
// //         onFinish();
// //       }
// //     });

// //     tl.set(containerRef.current, { opacity: 1 });

// //     tl.fromTo(
// //       videoRef.current,
// //       { opacity: 0 },
// //       { opacity: 1, duration: 1, ease: "power2.out" }
// //     );

// //     tl.fromTo(
// //       logoRef.current,
// //       { opacity: 0, scale: 0.8, filter: "blur(6px)" },
// //       { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" },
// //       "-=0.5"
// //     );

// //     tl.to(
// //       logoRef.current,
// //       { opacity: 1, scale: 1.05, filter: "brightness(1.5)", duration: 0.7 },
// //       "+=0.2"
// //     );

// //     tl.fromTo(
// //       overlayRef.current,
// //       { x: "-100%" },
// //       { x: "0%", duration: 1.2, ease: "power4.inOut" }
// //     );

// //     tl.to(videoRef.current, {
// //       filter: "blur(12px)",
// //       opacity: 0,
// //       duration: 1.2,
// //       ease: "power2.inOut"
// //     });

// //     tl.to(containerRef.current, {
// //       opacity: 0,
// //       duration: 1,
// //       ease: "power2.inOut"
// //     });

// //   }, [onFinish]);

// //   return (
// //     <div
// //       ref={containerRef}
// //       className="fixed top-0 left-0 w-full h-full bg-black overflow-hidden z-9999 opacity-0"
// //     >
// //       {/* Video */}
// //       <video
// //         ref={videoRef}
// //         src="/intro.mp4"
// //         className="absolute w-full h-full object-cover"
// //         autoPlay
// //         muted
// //         playsInline
// //       />

// //       {/* Logo */}
// //       <div
// //         ref={logoRef}
// //         className="absolute inset-0 flex items-center justify-center"
// //       >
// //         <img src="/logo.svg" className="w-48 h-48 opacity-0" />
// //       </div>

// //       {/* Cinematic wipe overlay */}
// //       <div
// //         ref={overlayRef}
// //         className="absolute top-0 left-0 w-full h-full bg-[#ff0047] opacity-70 -translate-x-full"
// //       />
// //     </div>
// //   );
// // }
