import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div
        className="min-h-screen mb-4 w-full bg-cover bg-center flex items-center overflow-hidden relative"
        style={{ backgroundImage: "url('/background.jpeg')" }}
        id="Header"
      >
         <Navbar />
        <div className="container text-center mx-auto py-6 px-6 md:px-20 lg:px-32 text-white relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-[72px] inline-grid max-w-3xl font-semibold pt-20">Schedule an appointment and view your results online</h2>
          <h2 className=" text-xl text-cyan-500 sm:text-xl md:inline-grid max-w-4xl ">Now you can make an appointment before coming for a check-up and view your test results online quickly anytime, anywhere.</h2>
          <div className="space-x-6 mt-16 ">
            <a className="border  border-white px-8 py-3 rounded " href="#" >Booking appoiment</a>
            <a className="bg-cyan-600   px-8 py-3 rounded " href="#">Contact us</a>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
     
    </>
  );
};

export default Header;
