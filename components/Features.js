import React from "react";
import { features } from "@/app/assests/features";
import { data } from "@/app/assests/data";
import Image from "next/image";

const Features = () => {
  return (
    <div className="bg-black text-white">
      <div className=" max-w-[1260px] mx-auto ">
        <h1 className="md:text-5xl sm-text-4xl text-3xl max-w-[800px] text-center font-bold py-2 mx-auto ">
          Empower Your Crypto Investment Strategy with CoinHunter
        </h1>
      </div>
      {features.map((item, index) => (
        <div
          key={index}
          className="max-w-[1260px] mx-auto px-20 py-20 relative  grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3 md:my-40 my-20 "
        >
          <div className="max-w-[500px] mx-auto px-5 text-center py-10 absolute md:left-[350px] md:top-[80px] z-20 ">
            <div className="w-[100px] h-[100px] mx-auto ">
              <Image
                src={item.image}
                alt={item.heading}
                width={400}
                height={600}
                layout="responsive"
              />
            </div>

            <h1 className="md:text-5xl sm:text-4xl text-3xl mt-3">
              {item.heading}
            </h1>
            <p>{item.discription}</p>
            <button className="bg-blue-600 ml-4 text-white border-2 h-8 w-[120px] rounded-md border-blue-300 border-opacity-75 mt-5">
              Try Now
            </button>
          </div>
          {data.map((item, index) => (
            <div key={index} className="p-2 opacity-65  ">
              <p className="p-3 border-2  border-gray-600 rounded-full text-center overflow-hidden ">
                {item}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Features;
