import React from "react";
import Logo from "../assets/activision_logo_white-text.png";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <header className=" border-b-[1px] border-white bg-black lg:bg-opacity-80 px-[6%] py-4 flex flex-row justify-between items-center">
      <nav className=" flex flex-row gap-16 items-center ">
        <div>
          <img src={Logo} alt="" width={130} />
        </div>
        <div className=" lg:flex flex-row gap-12 hidden">
          <span className=" text-white">GAMES</span>
          <span className=" text-white">ABOUT</span>
          <span className=" text-white">CAREERS</span>
          <span className=" text-white">SUPPORT</span>
        </div>
      </nav>

      <div className=" flex flex-row gap-3 ">
        <button className=" lg:hidden ">
          <MdMenu className=" text-white text-3xl" />
        </button>
        <button className="lg:block hidden bg-[#34658B] rounded-full py-1 px-3 text-sm text-white bg-opacity-95 border-[#3487c6] border-[1px]">
          SIGN UP
        </button>
        <button className=" text-white hidden lg:block">LOGIN</button>
      </div>
    </header>
  );
};

export default Header;
