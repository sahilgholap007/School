"use client";
import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file
import Image from "next/image";
import logo from "@/../public/logo.png";
import logoimg from "@/../public/ECA.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap px-24 max-lg:px-6 sticky top-0 z-50">
      <div className="logo-div flex items-center flex-shrink-0 text-white bg-white">
        <Image className="logo" alt="logo" src={logoimg} unoptimized />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" flex items-center px-3 py-2  text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block lg:flex lg:items-center lg:w-auto ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="md-txt font-bold flex flex-col lg:flex-row lg:justify-end text-center space-x-4 gap-5 max-lg:mt-5 mr-24 max-lg:mr-4">
          <a
            href="/"
            className="bubblegum-sans-regular nav-link mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-4"
          >
            Home
          </a>
          <a
            href="/about"
            className="bubblegum-sans-regular nav-link mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white "
          >
            About Us
          </a>
          <a
            href="/contact"
            className="bubblegum-sans-regular nav-link mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
