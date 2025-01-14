import React from "react";
import { assets } from "../../assets/assets";

export const About = () => {
  return (
    <div
      className="relative top-60  flex flex-col items-center justify-center container p-14 md:px-20 lg:px-48 w-full z-10"
      
      id="About"
    >
      <h1 className="text-cyan-600 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
        About
        <span className="underline underline-offset-4  decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-cyan-500 text-2xl max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className=" flex flex-col md:flex-row items-center md:items-start md:gp-20">
        <img
          src={assets.banners[0]}
          alt=""
          className="w-full sm:w-1/3 md:w-1/2 lg:max-w-md rounded-lg py-3"
        />
        <div className="flex flex-col items-center md:items-start mx-3 text-cyan-500">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-cyan-500">10+</p>
              <p>Year of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-cyan-500">10+</p>
              <p>Year of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-cyan-500">10+</p>
              <p>Year of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-cyan-500">10+</p>
              <p>Year of Excellence</p>
            </div>
          </div>
          <p className="m-4 max-w-lg">
            finish, your explanation is also very Good, thanks for sharing a
            little of your knowledge with us.
          </p>
          <button className=" ml-3 bg-cyan-500 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
