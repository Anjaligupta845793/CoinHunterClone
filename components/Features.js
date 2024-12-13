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
          className="max-w-[1260px] mx-auto px-20 py-20 relative md:my-40 my-20  "
        >
          <div
            className="md:w-[230px] md:h-[230px] left-[20px]  w-[350px] h-[350px] absolute md:left-[470px] md:top-[60px] blur-xl  rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.5) 1%, black 100%)",
            }}
          ></div>
          <div className="max-w-[450px] mx-auto px-10 text-center  py-10 absolute md:left-[350px] md:top-[60px] top-[55px] z-20 left-[-10px] ">
            <div className="w-[100px] h-[100px] mx-auto ">
              <Image
                src={item.image}
                alt={item.heading}
                width={400}
                height={600}
                layout="responsive"
                className=""
              />
            </div>

            <h1 className="md:text-5xl sm:text-4xl text-3xl mt-3 z-5">
              {item.heading}
            </h1>
            <p className="z-5 text-gray-500 py-2">{item.discription}</p>
            <button className="bg-blue-600 ml-4 text-white border-2 h-8 w-[120px] rounded-md border-blue-300 border-opacity-75  z-5 mt-5">
              Try Now
            </button>
          </div>
          <div className="p-2 grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3 max-w-[1000px] opacity-100 gap-3  ">
            {data.map((item, index) => (
              <p
                className="p-3 border-2  text-gray-800 border-gray-900 rounded-full text-center overflow-hidden "
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
