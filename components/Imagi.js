"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ImageData } from "@/app/assests/Imagedata";

const Imagi = () => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [visibleCards, setVisibleCards] = useState({
    mobile: 1,
    desktop: 3,
  });
  const [isMobile, setIsMobile] = useState(false);

  // Dynamically adjust the number of visible cards and detect if mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Automatically advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [current, ImageData.length]);

  // Handle next slide
  const handleNext = useCallback(() => {
    setCurrent((prevCurrent) =>
      prevCurrent + 1 >= ImageData.length ? 0 : prevCurrent + 1
    );
  }, []);

  // Handle previous slide
  const handlePrev = useCallback(() => {
    setCurrent((prevCurrent) =>
      prevCurrent - 1 < 0 ? ImageData.length - 1 : prevCurrent - 1
    );
  }, []);

  // Touch event handlers for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext(); // Swipe left
    }

    if (touchStart - touchEnd < -75) {
      handlePrev(); // Swipe right
    }
  };

  return (
    <div className="text-white py-20">
      <div className="max-w-[1240px] mx-auto">
        <div
          className="relative overflow-hidden max-w-[900px] mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                current *
                (100 / (isMobile ? visibleCards.mobile : visibleCards.desktop))
              }%)`,
            }}
          >
            {ImageData.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-2">
                <div className="md:w-[300px] md:h-[320px] h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={item}
                    alt={`image ${index}`}
                    width={400}
                    height={600}
                    layout="responsive"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex gap-2 justify-center pb-10 mt-4">
          {ImageData.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-[10px] h-[10px] rounded-full border-white border-2 ${
                index === current ? "bg-white" : "bg-transparent"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Imagi;
