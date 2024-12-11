"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [nav, setnav] = useState(true);
  return (
    <div className="bg-black text-white">
      <div className="max-w-[1260px] mx-auto md:flex flex   justify-between py-10 items-center md:py-10">
        <h1 className="px-3 md:text-3xl text-4xl">CoinHunter</h1>
        <ul className="md:flex hidden gap-7 border border-gray-800 rounded-3xl px-6 p-2">
          <Link href="/Home">Home</Link>
          <Link href="/Product">Product</Link>
          <Link href="/Pricing">Pricing</Link>
          <Link href="/Contact">Contact</Link>
        </ul>
        <div className="md:flex gap-7 hidden">
          <button className="text-black bg-white h-8 w-[120px] rounded-md border border-gray-800">
            start for free
          </button>
          <button className="bg-blue-600 text-white border-2  h-8 w-[120px] rounded-md border-blue-300 border-opacity-75">
            log in
          </button>
        </div>
        <div className="md:hidden flex mr-4">
          <IoMenu className=" " size={30} onClick={() => setnav(!nav)} />
        </div>
      </div>
      <div
        className={
          !nav
            ? "fixed top-50 left-0 h-[60%] md:hidden w-full ease-in duration-100 bg-black" // Use w-full for full width
            : "fixed top-[-100%] left-0 w-full" // Ensure it has full width when hidden
        }
      >
        <div className="w-full ">
          <ul className="px-10 gap-10 border container  border-gray-800 rounded-3xl flex flex-col justify-center text-center p-2">
            <li>
              <Link href="/Home">Home</Link>
            </li>
            <li>
              <Link href="/Product">Product</Link>
            </li>
            <li>
              <Link href="/Pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
          <div className="gap-7 my-8 flex justify-center">
            <button className="text-black bg-white h-8 w-[120px] rounded-md border border-gray-800">
              Start for Free
            </button>
            <button className="bg-blue-600 ml-4 text-white border-2 h-8 w-[120px] rounded-md border-blue-300 border-opacity-75">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
