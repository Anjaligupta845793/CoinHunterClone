"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ImageData } from "@/app/assests/Imagedata";

const Imagi = () => {
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(3);

  const visibleCards = {
    mobile: 1,
    desktop: 3,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Check if we've reached the end of the ImageData array
      if (first + visibleCards.desktop >= ImageData.length) {
        // Reset to the beginning
        setFirst(0);
        setLast(visibleCards.desktop);
      } else {
        // Move to the next set of images
        setFirst((prevFirst) => prevFirst + 1);
        setLast((prevLast) => prevLast + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [first, ImageData.length]);

  return (
    <div className=" text-white py-20">
      <div className="max-w-[1240px] mx-auto">
        <div className="relative overflow-hidden max-w-[900px] mx-auto">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                first * (100 / visibleCards.desktop)
              }%)`,
            }}
          >
            {ImageData.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-2">
                <div className="md:w-[300px] md:h-[320px] h-[400px]  rounded-lg overflow-hidden">
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
              onClick={() => setFirst(index)}
              className={`w-[10px] h-[10px] rounded-full border-white border-2 ${
                index == first ? "bg-white" : "bg-transparent"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Imagi;
