import React from "react";

const Premium = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-[1260] mx-auto px-5 mt-10">
        <div className="max-w-[500px] mx-auto  text-center py-20">
          <h1 className="md:text-5xl text-3xl ">
            Choose Plan That’s Right ForYou
          </h1>
          <p className="text-2xl pt-10">
            Choose plan that works best for you, feel free to contact us
          </p>
        </div>
      </div>
      <div className="max-w-[1260] mx-auto    ">
        <div className="flex justify-center border-2 mx-auto py-4 px-7 border-gray-700 rounded-full w-[150px] ">
          <button className="mr-5 ">Monthly</button>
          <button className="">Yearly</button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
