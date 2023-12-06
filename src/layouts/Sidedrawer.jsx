import React, { useState } from 'react'
import logo from "../assets/homeAssets/logo.svg";
import Remove from "../assets/homeAssets/remove.svg";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
const Sidedrawer = ({ closeside }) => {
  const [submenu, setSubmenu] = useState(false);
  const [submenuPage, setSubmenuPage] = useState(false);

  const openSumenu = () => {
    setSubmenu(!submenu);
  };

  const openPageSubmenu = () => {
    setSubmenuPage(!submenuPage);
  };

  return (
    <div className="relative w-[100%] bg-white overflow-hidden">
      <div className="  w-[150px]  m-[50px] cursor-pointer">
        <img src={logo} alt="" className="" />
      </div>
      <div className="absolute top-4 right-4 h-[35px] w-[35px] space-x-0 cursor-pointer">
        <img src={Remove} alt="close modal" onClick={closeside} />
      </div>
      <ul className=" ps-[22px] w-[screen]  m-6 text-[20px] cursor-pointer">
        <li className="mb-4  border-b-2 border-gary-500 py-2">Home</li>
        <li className="mb-4 border-b-2 border-gary-500 py-2">About Us</li>
        <div className="flex justify-between gap-[200px] border-b-2 border-gary-500 py-2 pr-[155px]">
          <div onClick={openSumenu}>
            <li className=" ">Restorent</li>
          </div>
          <div>{submenu ? <FaChevronDown /> : <FaChevronRight />}</div>
        </div>

        {submenu && (
          <div className="flex items-center justify-start bg-orange-500 relative my-[40px]">
            <div className="bg-orange-500 w-[10px] h-[10px] absolute left-0"></div>
            <div className="absolute left-6">Restorents</div>
          </div>
        )}

        {submenu && (
          <div className="flex items-center justify-start bg-orange-500 relative my-[40px]">
            <div className="bg-orange-500 w-[10px] h-[10px] absolute left-0"></div>
            <div className="absolute left-6">Restorent Card</div>
          </div>
        )}

        {submenu && (
          <div className="flex items-center justify-start bg-orange-500 relative my-[40px]">
            <div className="bg-orange-500 w-[10px] h-[10px] absolute left-0"></div>
            <div className="absolute left-6">Check Out</div>
          </div>
        )}

        <div className="flex justify-between gap-[230px] border-b-2 border-gary-500 py-2 pr-[155px]">
          <div onClick={openPageSubmenu}>
            <li className=" ">Pages</li>
          </div>
          <div>{submenuPage ? <FaChevronDown /> : <FaChevronRight />}</div>
        </div>

        {submenuPage && (
          <div className="flex items-center justify-start bg-orange-500 relative my-[40px]">
            <div className="bg-orange-500 w-[10px] h-[10px] absolute left-0"></div>
            <div className="absolute left-6">Blog</div>
          </div>
        )}

        {submenuPage && (
          <div className="flex items-center justify-start bg-orange-500 relative my-[40px]">
            <div className="bg-orange-500 w-[10px] h-[10px] absolute left-0"></div>
            <div className="absolute left-6">Services</div>
          </div>
        )}

        {submenuPage && (
          <div className="flex items-center justify-start bg-orange-500 relative my-[40px]">
            <div className="bg-orange-500 w-[10px] h-[10px] absolute left-0"></div>
            <div className="absolute left-6">Pricing Table</div>
          </div>
        )}

        <li className="mb-4 border-b-2 border-gary-500 py-3">Contacts</li>
      </ul>
    </div>
  );
};

export default Sidedrawer