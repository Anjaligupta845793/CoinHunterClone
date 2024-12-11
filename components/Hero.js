import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-color-black text-white py-28 ">
      <div className="max-w-[1260px] mx-auto grid md:grid-cols-[60%_40%] px-4 ">
        <div className="">
          <h1 className="md:text-6xl text-4xl  font-bold">
            Discover the Next Crypto Gem Provided By AI
          </h1>

          <p className=" md:text-xl text-md mt-5">
            CoinHunter is the ultimate tool for crypto enthusiasts that want to
            have an unmatched advantage in the market. With our advanced
            technology, you can effortlessly identify tokens that have the
            potential to 10x, 100x, or more.
          </p>
          <button className="bg-blue-600 italic text-black mt-5 uppercase border-2 h-12  w-[200px] rounded-md border-blue-300 border-opacity-75">
            start for free
          </button>
        </div>
        <div className="">
          <Image
            src="https://cdn.prod.website-files.com/65f46cb06dc2aecf0f68075c/66956f1253ac1ac1658ef296_gems%20trasparenza-p-1600.png"
            alt="Gems Transparency"
            width={400} // Set the width according to your needs
            height={600} // Set the height according to your needs
            layout="responsive" // Optional: Makes the image responsive
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
