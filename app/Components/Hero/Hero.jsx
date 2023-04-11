import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-primary font-bold p-2">
          Growing whith data analytics
        </p>
        <h1 className="md:text-7xl md:py-6 sm:text-6xl text-4xl font-bold">
          Grow with data
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl py-4 font-bold">
            Fast, flexible financing for
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray px-4">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-blackPrimary">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
