"client side";
import React from "react";
import ImageSlider from "./ImageSlider";
import Imagi from "./Imagi";

const BiggWin = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black md:mt-[380px] mt-[50px] via-blue-600/60 to-black h-screen w-full">
        <div className="max-w-[1260px] mx-auto md:pt-30 pt-10">
          <div className="">
            <h1 className="md:text-6xl py-10 text-4xl text-center">
              Our Biggest Win
            </h1>
            <Imagi />
          </div>
        </div>
      </div>
    </>
  );
};

export default BiggWin;
