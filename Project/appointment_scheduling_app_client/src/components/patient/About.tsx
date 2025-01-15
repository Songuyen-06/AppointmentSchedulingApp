import React from "react";
import { assets } from "../../assets/assets";

export const About = () => {
  return (
    <div
      className="relative top-60 flex flex-col items-center justify-center container p-14 md:px-20 lg:px-48 w-full z-10"
      id="About"
    >
      <h1 className="text-cyan-600 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
        Meet
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Doctor Team
        </span>
      </h1>
      <p className="text-cyan-500 text-xl sm:text-xl md:max-w-6xl lg:max-w-full text-center mb-8">
        Our team of expert doctors is dedicated to providing you with the best
        healthcare services. Passionate, skilled, and experienced in various
        medical fields, we are here to ensure your health and well-being.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-10">
        <img
          src={assets.banners[0]}
          alt="Doctor Team"
          className="w-full sm:w-1/3 md:w-1/2 lg:max-w-md rounded-lg py-3"
        />
        <div className="flex flex-col items-center md:items-start mx-3 text-cyan-500">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-cyan-500">15+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-cyan-500">100+</p>
              <p>Qualified Doctors</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-cyan-500">50+</p>
              <p>Specialties Covered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-cyan-500">10K+</p>
              <p>Happy Patients</p>
            </div>
          </div>
          <p className="m-4 max-w-lg">
            Our doctors are always ready to assist you with personalized care
            and attention. Together, we strive to make every patient's journey
            smooth and stress-free.
          </p>
          <button className="ml-3 bg-cyan-500 text-white px-8 py-2 rounded hover:bg-cyan-600">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
