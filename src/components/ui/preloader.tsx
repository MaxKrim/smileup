"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Prevent scrolling while the preloader is active.
    document.body.style.overflow = "hidden";

    // Set a timer to remove the component from the DOM after all animations are complete.
    const removeTimer = setTimeout(() => {
      setIsRemoved(true);
      document.body.style.overflow = ""; // Restore scrolling
    }, 2400); // Total duration: 0.8s (line) + 1.2s (fills) + 0.4s (fade) = 2.4s

    return () => {
      clearTimeout(removeTimer);
      // Ensure scrolling is restored if the component unmounts prematurely.
      document.body.style.overflow = "";
    };
  }, []);

  // Use a <style> tag to inject the necessary animation keyframes.
  const keyframes = `
    @keyframes preloader-line-expand {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }
    @keyframes preloader-fill-up {
      from { transform: translateY(0); }
      to { transform: translateY(-100%); }
    }
    @keyframes preloader-fill-down {
      from { transform: translateY(0); }
      to { transform: translateY(100%); }
    }
    @keyframes preloader-fade-out {
      from { opacity: 1; }
      to { opacity: 0; visibility: hidden; }
    }
  `;

  if (isRemoved) {
    return null;
  }

  return (
    <>
      <style>{keyframes}</style>
      <div
        className="fixed inset-0 z-[999999999] pointer-events-none"
        style={{
          // Fade out the entire preloader container after the main animations.
          animation: "preloader-fade-out 0.4s cubic-bezier(0.65, 0, 0.35, 1) 2.0s forwards",
        }}
        aria-hidden="true" // Hide from screen readers
      >
        <div className="relative flex h-full items-center justify-center">
          {/* This corresponds to the preloader_line */}
          <div
            className="relative h-[2px] w-full origin-left bg-background z-10"
            style={{
              // Horizontal line expansion animation.
              animation: "preloader-line-expand 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards",
            }}
          />

          {/* This corresponds to the preloader__shapes container */}
          <div className="absolute inset-0 flex flex-col pointer-events-auto">
            {/* Top fill, corresponding to preloader__fill-top */}
            <div
              className="h-1/2 w-full bg-[#E77EFF]" // --color-brand-pink
              style={{
                // Vertical reveal animation for the top half.
                animation: "preloader-fill-up 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.8s forwards",
              }}
            />
            {/* Bottom fill, corresponding to preloader__fill-bottom */}
            <div
              className="h-1/2 w-full bg-[#E77EFF]" // --color-brand-pink
              style={{
                // Vertical reveal animation for the bottom half.
                animation: "preloader-fill-down 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.8s forwards",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}