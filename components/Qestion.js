"use client";
import React from "react";
import { FAQdata } from "@/app/assests/FAQdata";

const Qestion = ({ data, id, isOpen, onClick }) => {
  return (
    <div className="text-white border-2 border-gray-700 p-6 rounded-lg overflow-hidden ">
      <div
        className="flex justify-between cursor-pointer transition-all ease-in-out duration-800"
        onClick={onClick}
      >
        <p className="font-bold">{data.question}</p>
        {isOpen ? <h1>-</h1> : <h1>+</h1>}
      </div>
      <div className="mt-3">
        <div className={isOpen ? "flex " : "hidden"}>{data.answers}</div>
      </div>
    </div>
  );
};

export default Qestion;
