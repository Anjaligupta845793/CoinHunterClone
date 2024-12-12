"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [nav, setnav] = useState(false); // Change initial state to false

  return (
    <div className="bg-black text-white">
      <div className="max-w-[1260px] mx-auto md:flex flex justify-between py-10 items-center md:py-10">
        <h1 className="pl-8 pt-5 md:text-3xl text-xl">CoinHunter</h1>

        {/* Desktop Navigation */}
        <ul className="md:flex hidden gap-7 border border-gray-800 rounded-3xl px-6 p-2">
          <Link href="/Home">Home</Link>
          <Link href="/Product">Product</Link>
          <Link href="/Pricing">Pricing</Link>
          <Link href="/Contact">Contact</Link>
        </ul>

        {/* Desktop Buttons */}
        <div className="md:flex gap-7 hidden">
          <button className="text-black bg-white h-8 w-[120px] rounded-md border border-gray-800">
            start for free
          </button>
          <button className="bg-blue-600 text-white border-2 h-8 w-[120px] rounded-md border-blue-300 border-opacity-75">
            log in
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex mr-4">
          <IoMenu size={30} onClick={() => setnav(!nav)} />
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={
          nav
            ? "fixed top-50 left-0 h-[60%] md:hidden w-full ease-in duration-300 bg-black z-50"
            : "fixed top-[-100%] left-0 w-full ease-in duration-300"
        }
      >
        <div className="w-full">
          <ul className="px-10 gap-10 flex flex-col justify-center text-center py-8 space-y-4">
            <li>
              <Link href="/Home" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Product" className="block py-2">
                Product
              </Link>
            </li>
            <li>
              <Link href="/Pricing" className="block py-2">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="block py-2">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex justify-center space-x-4 mt-8">
            <button className="text-black bg-white h-8 w-[120px] rounded-md border border-gray-800">
              Start for Free
            </button>
            <button className="bg-blue-600 text-white border-2 h-8 w-[120px] rounded-md border-blue-300 border-opacity-75">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
