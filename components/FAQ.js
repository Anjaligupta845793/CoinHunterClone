"use client";
import React, { useState } from "react";
import Qestion from "./Qestion";
import { FAQdata } from "@/app/assests/FAQdata";

const FAQ = () => {
  const [clickedQestion, setclickedQestion] = useState(null);
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-[1260px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-4 px-5 ">
        <div>
          <h1 className="md:text-5xl text-4xl font-bold text-center">
            Frequently asked Question?
          </h1>
          <button className="mt-8 px-7 shadow-[inset_0_8px_8px_rgba(135,206,250,0.5)]  font-bold text-center py-6 border-2 border-gray-700 bg-blue-500 rounded-lg">
            START FOR FREE
          </button>
        </div>
        <div className="w-full grid grid-cols-1 gap-4 ">
          {FAQdata.map((d, index) => (
            <Qestion
              data={d}
              key={index}
              id={d.id}
              onClick={() => setclickedQestion(index)}
              isOpen={index === clickedQestion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
