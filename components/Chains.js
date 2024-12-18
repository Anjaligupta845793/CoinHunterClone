import React from "react";
import { chain } from "@/app/assests/chain";
import Image from "next/image";

const Chains = () => {
  return (
    <div className="bg-black text-white py-20 flex flex-col ">
      <h1 className="text-gray-500 text-center py-10">
        Find the Next Gems on :
      </h1>
      <div className="max-w-[1000px] mx-auto px-4 grid md:grid-cols-4 grid-cols-2 gap-5 ">
        {chain.map((item, index) => (
          <div
            className="flex px-10 py-6 items-center border-2 border-gray-800 rounded-lg "
            key={index}
          >
            <div className="min-w-[40px] min-h-[40px] relative">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill" // Makes the image fill the parent div
                objectFit="contain" // Ensures the image maintains its aspect ratio
              />
            </div>

            <p className="ml-3">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chains;
