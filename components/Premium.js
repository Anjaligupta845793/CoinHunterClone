"use client";
import React, { useState } from "react";

const Premium = () => {
  const [Price, setPrice] = useState("true");
  return (
    <div className="bg-black text-white py-20" id="Pricing">
      <div className="max-w-[1260px] mx-auto px-5 mt-10">
        <div className="max-w-[500px] mx-auto  text-center py-20">
          <h1 className="md:text-5xl text-4xl font-bold ">
            Choose Plan That’s Right ForYou
          </h1>
          <p className="text-2xl pt-10 transform translate-y-2">
            Choose plan that works best for you, feel free to contact us
          </p>
        </div>
      </div>
      <div className="max-w-[1260px] mx-auto   ">
        <div className="flex justify-center border-2 mx-auto p-1 border-gray-700 rounded-full w-[200px] ${Price ? 'transition-transform ease-in-out duration-500' : 'ease-in duration-200'}` ">
          <button
            className={
              Price
                ? "bg-blue-500 rounded-full p-3 px-5"
                : "bg-black rounded-full p-3 px-5"
            }
            onClick={() => setPrice(true)}
          >
            Monthly
          </button>
          <button
            className={
              !Price
                ? "bg-blue-500 rounded-full p-3 px-5"
                : "bg-black rounded-full p-3 px-5 "
            }
            onClick={() => setPrice(false)}
          >
            Yearly
          </button>
        </div>
        {Price ? (
          <div className="max-w-[900px] mx-auto grid my-10  transition-opacity duration-500 ease-in-out  md:grid-cols-2 grid-cols-1 gap-4 px-7 ">
            <div className="p-5 border-2 border-gray-400 py-10 px-8 bg-gradient-to-t from-blue-800/50 via-slate-800/50 to-slate-800/50 rounded-lg">
              <div className=" border-b-2 border-gray-600 pb-5">
                <h1 className="text-4xl">Shrim Plan</h1>
                <p>$30 / month</p>
              </div>

              <div className="mt-14 ">
                <p className="py-2"> ✓ AI tier list </p>
                <p className="py-2"> ✓ On-Chain Analysis</p>
                <p className="py-2">✓ Wallet Tracker</p>
              </div>

              <button className="mt-8 w-full  text-center py-3 border-2 border-gray-700 bg-blue-500 rounded-lg">
                Start Free Trial →
              </button>
            </div>
            <div className="p-5 border-2 border-gray-400 py-10  rounded-lg">
              <div className=" border-b-2 border-gray-600 pb-5">
                <h1 className="text-4xl">Whale Plan</h1>
                <p>$30 / month</p>
              </div>

              <div className="mt-14 ">
                <p className="py-2"> ✓ AI tier list </p>
                <p className="py-2"> ✓ On-Chain Analysis</p>
                <p className="py-2">✓ Wallet Tracker</p>
                <p className="py-2"> ✓ Institutional Portfolio</p>
                <p className="py-2"> ✓ Memecoin Master</p>
              </div>
              <button className="mt-8 w-full  text-center py-3 border-2 border-gray-700 bg-blue-500 rounded-lg">
                Start Free Trial →
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-[900px] mx-auto grid my-10 ease-in duration-200 transition-transform  md:grid-cols-2 grid-cols-1 gap-4 px-7 ">
            <div className="p-5 border-2 border-gray-400 py-10 bg-gradient-to-t from-slate-800/50 to-slate-800/50 rounded-lg">
              <div className=" border-b-2 border-gray-600 pb-5">
                <h1 className="text-4xl">Shrim Plan</h1>
                <p>$90 / Year</p>
              </div>

              <div className="mt-14 ">
                <p className="py-2"> ✓ AI tier list </p>
                <p className="py-2"> ✓ On-Chain Analysis</p>
                <p className="py-2">✓ Wallet Tracker</p>
              </div>

              <button className="mt-8 w-full  text-center py-3 border-2 border-gray-700 bg-blue-500 rounded-lg">
                Start Free Trial →
              </button>
            </div>
            <div className="p-5 border-2 border-gray-400 py-10  rounded-lg">
              <div className=" border-b-2 border-gray-600 pb-5">
                <h1 className="text-4xl">Shrim Plan</h1>
                <p>$99 /Year</p>
              </div>

              <div className="mt-14 ">
                <p className="py-2"> ✓ AI tier list </p>
                <p className="py-2"> ✓ On-Chain Analysis</p>
                <p className="py-2">✓ Wallet Tracker</p>
                <p className="py-2"> ✓ Institutional Portfolio</p>
                <p className="py-2"> ✓ Memecoin Master</p>
              </div>
              <button className="mt-8 w-full  text-center py-3 border-2 border-gray-700 bg-blue-500 rounded-lg">
                Start Free Trial →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Premium;
