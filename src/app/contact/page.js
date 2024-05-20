"use client";
import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import "./contact.css";
import facebook from "../assets/facebook.png";
import instagram from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";

const Contact = () => {
  return (
    <div className="flex flex-col bubblegum-sans-regular">
      <Image src={logo} alt="logo" className="mt-[3px]" unoptimized />
      <div className="flex max-lg:flex-col bg-[yellow] pt-10">
        <div className="w-full flex flex-col justify-center items-center p-6">
          <div className="flex flex-col gap-10 bg-[#ff0000] px-6 py-6 rounded-md">
            <div className="flex flex-col gap-2">
              <h1 className="xxl-txt text-[#ffff00]">Contact</h1>
              <p className="sm-txt text-[#ffff00]">Contact us for more information</p>
            </div>
            <div className="flex gap-2  items-center max-sm:">
              <h2 className="md-txt text-[#ffff00]">Email :-</h2>
                <a className="sm-txt text-[#ffff00]" href="mailto:gholapsahil007@gmail.com">
                  gholapsahil007@gmail.com
                </a>
            </div>
            <div className="flex gap-2  items-center">
              <h2 className="md-txt text-[#ffff00]">Phone :-</h2>
              <p className='sm-txt text-[#ffff00]'>+91 1234567890</p>
            </div>
            <div className="flex gap-2 items-center ">
              <h2 className="md-txt text-[#ffff00]">Address :-</h2>
              <p className='sm-txt text-[#ffff00]'>123, ABC Road, XYZ City, 123456</p>
            </div>
            <div className="flex gap-6 items-center ">
              <h2 className="md-txt text-[#ffff00]">Follow Us On:-</h2>
              <div className="flex gap-6 ">
                <a className='sm-txt w-10' href="http://www.instagram.com" >
                  <Image alt="socials" src={facebook} unoptimized/>
                </a>
                <a className='sm-txt w-10' href="http://www.instagram.com" >
                  <Image alt="socials" src={instagram} unoptimized/>
                </a>
                <a className='sm-txt w-10' href="http://www.instagram.com" >
                  <Image alt="socials" src={linkedin} unoptimized/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[yellow] flex flex-col justify-center items-center">
          <form className="flex flex-col gap-4 p-6">
            <label className="sm-txt" htmlFor="name">
              Name
            </label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
            />
            <label className="sm-txt" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
            <label className="sm-txt" htmlFor="phone">
              Phone
            </label>
            <input
              className="input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone"
            />
            <label className="sm-txt" htmlFor="message">
              Message
            </label>
            <textarea
              className="input"
              id="message"
              name="message"
              placeholder="Your Message"
            />
            <button className="primary-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
