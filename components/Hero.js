import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-color-black text-white  " id="Home">
      <div className="max-w-[1260px] relative mx-auto grid md:grid-cols-[60%_40%] px-4 md:py-28 py-[90px] bg-gradient-to-br from-black via-black border-r-1 border-b-1 border-gray-600 rounded-lg to-blue-500">
        <div className="animate-fadeInUp" style={{ animationDuration: "1s" }}>
          <h1 className="md:text-6xl text-5xl space-x-2 space-y-4 font-semibold">
            Discover the Next Crypto Gem Provided By AI
          </h1>

          <p
            className=" md:text-xl text-xl mt-5 animate-fadeInUp"
            style={{ animationDuration: "1s" }}
          >
            CoinHunter is the ultimate tool for crypto enthusiasts that want to
            have an unmatched advantage in the market. With our advanced
            technology, you can effortlessly identify tokens that have the
            potential to 10x, 100x, or more.
          </p>
          <button className="bg-blue-600 italic text-black mt-5 uppercase border-2 h-12  w-[200px] rounded-md border-blue-300 border-opacity-75">
            start for free
          </button>
        </div>

        <div className="py-20 h-full relative">
          <Image
            src="https://cdn.prod.website-files.com/65f46cb06dc2aecf0f68075c/66956f1253ac1ac1658ef296_gems%20trasparenza-p-1600.png"
            alt="image"
            layout="responsive"
            width={1200}
            height={5000}
            className="mx-auto  pt-14 absolute top-8 left-6 md:max-w-[400px]  max-w-[248px] transform animate-float-scale"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
