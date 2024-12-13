import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-20">
      <div className="max-w-[1260px] mx-auto flex md:flex-row flex-col px-6  justify-between ">
        <div>
          <h1 className="md:text-3xl font-bold ">COINHUNTER</h1>
          <p className="pt-4">Your Gateway to Crypto Investment Success</p>
          <h1 className="md:text-xl font-bold pt-4">Get in Touch</h1>
          <p className="pt-4">Coinhunte</p>
        </div>
        <div className="max-w-[280px]">
          <h1 className="md:text-xl font-bold  ">
            Explore More on CoinHunter.com
          </h1>
          <p className="pt-10">
            Strategies for Identifying High-Potential Crypto Tokens
          </p>
          <p className="pt-4">
            The Role of Market Analysis in Crypto Investment Success
          </p>
          <p className="pt-4">
            Tips for Managing and Growing Your Crypto Portfolio
          </p>
          <p className="pt-4">
            Navigating the Volatility of the Crypto Market with Confidence
          </p>
        </div>
      </div>
      <div className="max-w-[1260px] mx-auto flex  md:flex-row flex-col px-6 mt-20 py-10 md:text-left text-center justify-between ">
        <h6 className="text-[12px] ">
          Copyright © 2024 Coinhunter | Powered by Coinhunter
        </h6>
        <h4 className="">
          Privacy Policy <span className="ml-5 ">Terms & Conditions</span>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
