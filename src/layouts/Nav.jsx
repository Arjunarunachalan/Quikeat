import React, { useState } from "react";
import logo from "../assets/homeAssets/logo.svg";
import CartIcon from "../assets/homeAssets/cartIcon ";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Sidedrawer from "./Sidedrawer";


   

const Nav = () => {
  const [isModalOpen,setIsModalOpen]= useState(false)
  const [isModal2Open,setIsModal2Open] = useState(false)
  const [isSideDrawerOpen,setIsSideDrawerOpen] = useState(false)
  
  

  const openModal = ()=>{
    setIsModalOpen(true)
    setIsModal2Open(false)
  }
  const CloseModal = ()=>{
    setIsModalOpen(false)
  }
  
  const modal2open = ()=>{
    setIsModal2Open(true)
    setIsModalOpen(false)
  }
  const modal2close = ()=>{
    setIsModal2Open(false)
  }

const openSideDrawer = ()=>{
 setIsSideDrawerOpen(true)
}
const closeSideDrawer = ()=>{
  setIsSideDrawerOpen(false)
}


  
  return (
    <>
      <div className="flex items-center justify-between gap-4 md:p-6 p-0 max-w-screen overflow-hidden my-4 relative">
        <div className="flex md:gap-10 gap-0 cursor-pointer">
          <div className=" md:w-[250px] w-[150px] ">
            <img src={logo} alt="" className="md:mx-[80px] mx-0 " />
          </div>

          <div className="md:block hidden">
            <div className="flex items-center  gap-8 font-semibold ">
              <Link to={"/"}>
                <div className="hover:text-orange-500 cursor-pointer">
                  {" "}
                  Home
                </div>
              </Link>
              <Link to={"about"}>
                <div className="hover:text-orange-500 cursor-pointer">
                  About Us
                </div>
              </Link>

              <Link to={"restorent"}>
                <div
                  className="hover:text-orange-500 cursor-pointer"
                  onMouseEnter={openModal}
                  onMouseLeave={CloseModal}
                >
                  Restorent
                </div>
              </Link>

              <div
                className="hover:text-orange-500 cursor-pointer"
                onMouseEnter={modal2open}
                onMouseLeave={modal2close}
              >
                Pages
              </div>
              <Link to={"contact"}>
                <div className="hover:text-orange-500 cursor-pointer mr-[200px]">
                  Contact
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex  items-center ps-11">
          <div className="bg-white rounded-md p-4 cursor-pointer  ">
            <CartIcon />
          </div>
          <div>
            <div className="md:block hidden">
              <Link to={"checkout"}>
                <button className="bg-orange-500 rounded-md text-white font-bold p-2 cursor-pointer">
                  ORDER NOW
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:hidden block" onClick={openSideDrawer}>
          <IoMenu className="text-orange-500 h-[30px] w-[30px]" />
        </div>

        <div onMouseEnter={openModal} onMouseLeave={CloseModal}>
          <Modal
            modalId="modal1"
            isOpen={isModalOpen}
            className="left-[340px] top-[70px] w-[220px] h-[170px] bg-white transition-transform transform translate-y-[-5px]"
          >
            <ul className="">
              <li className="mb-3 hover:text-orange-500  hover:translate-x-3 hover:transition-all hover:duration-500 transition-all">
                Restorents
              </li>
              <li className="mb-3 hover:text-orange-500 hover:translate-x-3 hover:transition-all hover:duration-500 transition-all">
                RestorentCard
              </li>
              <li className="hover:text-orange-500 hover:translate-x-3 hover:transition-all hover:duration-500 transition-all">
                Check Out
              </li>
            </ul>
          </Modal>

          <div onMouseEnter={modal2open} onMouseLeave={modal2close}>
            <Modal
              isOpen={isModal2Open}
              modalId="modal2"
              className="left-[460px] top-[70px] w-[220px] h-[150px] bg-white transition-transform transform translate-y-[-5px] "
            >
              <ul>
                <Link to={"blog"}>
                  <li className="mb-3 hover:text-orange-500 hover:translate-x-3 hover:transition-all hover:duration-500 transition-all">
                    Blog
                  </li>
                </Link>
                <Link to={"services"}>
                  <li className="mb-3 hover:text-orange-500 hover:translate-x-3 hover:transition-all hover:duration-500 transition-all">
                    Services
                  </li>
                </Link>
                <Link to={"pricingtable"}>
                  <li className="hover:text-orange-500 hover:translate-x-3 hover:transition-all hover:duration-500 transition-all">
                    PricingTable
                  </li>
                </Link>
              </ul>
            </Modal>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden block w-[100%] h-screen absolute top-0 transition-transform transform duration-500 ${
          isSideDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidedrawer closeside={closeSideDrawer} />
      </div>
    </>
  );
};

export default Nav;
