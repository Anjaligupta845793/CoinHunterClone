"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [click, setclick] = useState(true);
  return (
    <div className="bg-black text-white">
      <div className="max-w-[1260px] mx-auto grid md:grid-cols-2 grid-cols-1 ">
        <div>
          <h1>Frequently asked Question?</h1>
          <button className="mt-8 w-full  text-center py-3 border-2 border-gray-700 bg-blue-500 rounded-lg">
            START FOR FREE
          </button>
        </div>
        <div>
          <div className="flex justify-between">
            <h1>
              Does CoinHunter provide insights on when to buy or sell specific
              tokens?
            </h1>
            <button onClick={() => setclick(!click)}>+</button>
          </div>
          <p className={!click ? "flex" : "hidden"}>
            CoinHunter provides actionable insights to inform your buying or
            selling decisions: Market Signals: Offering real-time alerts and
            indicators based on technical analysis, market sentiment, and
            on-chain events that may suggest opportune moments to buy or sell.
            Investment Strategies: Guiding users with tailored investment
            strategies that align with their risk tolerance and market
            conditions, advising on potential entry and exit points.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
