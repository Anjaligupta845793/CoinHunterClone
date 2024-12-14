"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ServiceData } from "@/app/assests/Servicedata";
import Image from "next/image";

const Slidy = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const slideHandler = () => {
    setcurrentSlide((prevSlide) => {
      if (prevSlide === ServiceData.length - 1) {
        return 0;
      } else {
        return prevSlide + 1;
      }
    });
  };

  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-[1260px] mx-auto text-center md:text-2xl px-5 mb-4">
        <h1>Testimonial</h1>
      </div>
      <div className="max-w-[1260px] mx-auto text-center md:text-5xl px-5  text-3xl font-bold mb-20">
        <h1>People are loving to Use our Services</h1>
      </div>
      <div className="max-w-[1260px] mx-auto px-5 bg-gradient-to-r from-slate-900/70 via-blue-700/30 to-bg-slate-600/60 pt-20 border-1 border-gray-500 rounded-lg">
        <div className="grid grid-cols-[80%_10%] ">
          <div className="relative md:h-[290px] h-[210px] overflow-hidden">
            {ServiceData.map((item, index) => (
              <div
                key={index}
                className={`
      mx-auto 
      transition-all 
      duration-700 
      ease-in-out
      ${
        currentSlide === index
          ? "opacity-100 translate-x-0 scale-100"
          : "opacity-0 -translate-x-full scale-95"
      }
      absolute 
      top-0 
      left-0 
      right-0 
      flex 
      justify-center 
      gap-6 
      max-w-[600px]
    `}
              >
                <div className="flex md:justify-start justify-center md:w-[620px] ">
                  <Image
                    src={item.image}
                    alt="image"
                    width={300}
                    height={200}
                    className="mx-auto rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-between md:gap-10 gap-5">
                  <div className=" font-bold text-gray-400">
                    <p>{item.discription}</p>
                  </div>
                  <div>
                    <p className="">{item.name}</p>
                    <p className="text-[13px]">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div onClick={slideHandler} className="flex flex-col justify-center">
            <MdOutlineKeyboardArrowRight size={40} />
          </div>
        </div>
        <div className="flex gap-2 justify-center  pb-10">
          {ServiceData.map((_, index) => (
            <div
              key={index}
              onClick={() => setcurrentSlide(index)}
              className={`w-[10px] rounded-full h-[10px] border-white border-2 gap-2 ${
                currentSlide === index ? "bg-white" : "bg-black"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slidy;
