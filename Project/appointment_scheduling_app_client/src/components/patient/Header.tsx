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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>       
      </div>
     
    </>
  );
};

export default Header;
