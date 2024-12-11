import React from "react";
import { CryptoCardsData } from "@/app/assests/CryptoCardsdata";
import Image from "next/image";

const CryptoCards = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-t from-black py-20 via-blue-600/50 to-black ">
      <div className="max-w-[1260px] mx-auto ">
        <h1 className="md:text-5xl text-3xl font-bold text-center py-10">
          Ready to Dive into Crypto Analytics
        </h1>
        <div className="max-w-[1100px] mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-5">
          {CryptoCardsData.map((item, index) => (
            <div
              className=" bg-gradient-to-t from-slate-900/50 bg-blend-lighten to-slate-900/50 rounded-2xl py-[70px] backdrop-opacity-50 p-10 border-2 border-gray-700"
              key={index}
            >
              <div className="w-[70px] h-[70px]">
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={400} // Set the width according to your needs
                  height={600} // Set the height according to your needs
                  layout="responsive" // Optional: Makes the image responsive
                />
              </div>
              <h1 className="pt-10 text-2xl font-bold">{item.heading}</h1>
              <p className="pt-3">{item.discription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoCards;
