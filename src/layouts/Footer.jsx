import React from 'react'
import logo from "../assets/homeAssets/logo.svg";
import { FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-h-[100vh] overflow-hidden bg-grey">
      <div className=" grid grid-cols-3 p-[30px]">
        <div>
          <div className="flex flex-col items-start m-8 ">
            <div className="flex ms-0 pb-6">
              <img src={logo} alt="logo" />
            </div>
            <div className="flex pb-6">
              <h1 className="text-[55px] font-extrabold text-white ">
                The Best Restaurants in Your Home
              </h1>
            </div>
            <div className="flex text-slate-50">
              Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
              lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus
              pretium quam.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start pb-[165px] ">
          <div>
            <h1 className="text-slate-300 font-bold text-[25px] tracking-widest pb-[48px]">
              MENU
            </h1>
          </div>
          <div>
            <ul className="text-white font-bold ">
              <span className="">
                <li className="hover:text-orange-500 pb-4 tracking-widest flex items-center transition-all duration-200 ">
                  Home
                  <FaArrowRight />
                </li>
              </span>

              <span className="">
                <li className="hover:text-orange-500 pb-4 tracking-widest flex items-center transition-all duration-200">
                  About
                  <FaArrowRight />
                </li>
              </span>

              <span className="">
                <li className="hover:text-orange-500 pb-4 tracking-widest flex items-center transition-all duration-200">
                  Restorent
                  <FaArrowRight />
                </li>
              </span>

              <span className="">
                <li className="hover:text-orange-500 pb-4 tracking-widest flex items-center transition-all duration-200">
                  Contact
                  <FaArrowRight />
                </li>
              </span>
            </ul>
          </div>
        </div>
        <div className="flex flex-col pb-[100px] ">
          <div className="text-slate-300 font-bold text-[25px] tracking-widest pb-[48px]">
            CONTACTS
          </div>
          <div>
            <div className="flex flex-start mb-6 ">
              <div className="pb-6 pr-4 text-white">
                <FaLocationDot className="flex items-start" />
              </div>
              <div className="font-semibold text-white">
                1717 Harrison St, San Francisco, CA 94103, <br />
                United States
              </div>
            </div>

            <hr className="mb-4" />

            <div className="w-[200px] flex flex-col justify-start items-center pr-[330px] text-white font-semibold">
              <div className="flex mb-4">
                <div className="flex pr-2 ">
                  <CgMail />
                </div>
                <div className="flex">
                  <a href="">quickeat@mail.net</a>
                </div>
                <div></div>
              </div>
              <div className="flex ">
                <div className="pr-2">
                  <FaPhoneAlt />
                </div>
                <div>
                  <a href="">+7025484102</a>
                </div>
              </div>
            </div>

            <div className="flex pr-[150px] mr-4  items-center justify-center mt-[30px]">
              <div className="rounded-full border w-[40px] h-[40px] flex items-center justify-center hover:bg-orange-400 hover:transition-all hover:duration-400">
                <FaFacebook className="text-white" />
              </div>
              <div className="rounded-full border w-[40px] h-[40px] flex items-center justify-center hover:bg-orange-400 hover:transition-all hover:duration-400">
                <FaInstagram className="text-white" />
              </div>
              <div className="rounded-full border w-[40px] h-[40px] flex items-center justify-center hover:bg-orange-400 hover:transition-all hover:duration-400">
                <FaTwitter className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-[40px]" />
      <div className="w-screen  flex gap-[590px] justify-between p-[20px]">
        <div className="text-slate-300">
          Copyright © 2023. QuickEat. All rights reserved.
        </div>
        <div className="text-slate-300">Privacy Policy Terms & Services</div>
      </div>
    </div>
  );
}

export default Footer