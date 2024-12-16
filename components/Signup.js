import React from "react";
import Image from "next/image";

const Signup = () => {
  return (
    <div className="bg-color-black text-white px-4 md:py-20  " id="Contact">
      <div className="max-w-[1260px] relative mx-auto grid md:grid-cols-[60%_40%] px-4 py-9 bg-gradient-to-br to-blue-400 via-blue-500 border-r-1 border-b-1 border-gray-600 rounded-xl from-blue-500">
        <div className="py-7 order-1 md:order-2">
          <Image
            src="https://cdn.prod.website-files.com/65f46cb06dc2aecf0f68075c/66a7f802b54973d81e4d8c32_float%20image.svg"
            alt="image"
            width={300}
            height={100}
            className="mx-auto"
          />
        </div>
        <div className="order-2 md:order-1 md:p-9 max-w-[600px]">
          <h1 className="md:text-5xl text-3xl ">
            Ready to Elevate Your Crypto Strategy?
          </h1>

          <p className=" md:text-xl text-xl font-bold mt-7 ">
            Click below to embark on your CoinHunter journey. Sign up for free
            and transform your crypto investment experience with the power of
            AI.
          </p>
          <button className="bg-white font-light  text-black mt-7 uppercase border-2 h-12  w-[200px] rounded-md border-blue-300 border-opacity-75">
            Sign Up for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
