import React from "react";
import { FeaturesCards } from "@/app/assests/Fcardsdata";
import Image from "next/image";

const FCards = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-[1260px] mx-auto md:py-20 py-5">
        <h1 className="text-center md:text-5xl text-3xl py-10">Our Product</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 text-center gap-6 max-w-[1000px] mx-auto px-5">
          {FeaturesCards.map((item, index) => (
            <div className=" p-10 rounded-lg border-2  border-gray-500 bg-gradient-to-t from-blue-700/50 to-black ">
              <h1 className="font-bold text-3xl mt-2">{item.heading}</h1>
              <p className="text-gray-500 mt-2">{item.discription}</p>
              <div className="w-[150px] h-[150px] mx-auto mt-8">
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={400}
                  height={600}
                  layout="responsive"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FCards;
