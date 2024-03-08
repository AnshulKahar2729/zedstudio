import React from "react";
import FooterLogo from "../assets/WhatsApp_Image_2024-03-09_at_12.32.45_AM-removebg-preview.png";
import CopyRightLogo from "../assets/photo_2024-03-09_00-16-27-removebg-preview.png";
import { MdFacebook } from "react-icons/md";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer  text-white px-[6%] py-10 ">
      <div className=" grid grid-cols-12">
        <div className=" px-[7%] col-span-4">
          <img src={FooterLogo} width={300} alt="" />
        </div>

        <div className=" col-span-8 flex flex-row gap-60 py-20">
          <div>
            <h3 className=" font-bold text-white mb-5 text-xl">
              Popular Games
            </h3>
            <ul className=" flex flex-col gap-2">
              <li className=" hover:underline cursor-pointer">Call of Duty</li>
              <li className=" hover:underline cursor-pointer">
                Counter Strike
              </li>
              <li className=" hover:underline cursor-pointer">
                Grand Theft Auto
              </li>
              <li className=" hover:underline cursor-pointer">
                Need for Speed
              </li>
            </ul>
          </div>
          <div>
            <h3 className=" font-bold text-white mb-5 text-xl">Company</h3>
            <ul className=" flex flex-col gap-2">
              <li className=" hover:underline cursor-pointer">About Us</li>
              <li className=" hover:underline cursor-pointer">Our Services</li>
              <li className=" hover:underline cursor-pointer">Our Team</li>
              <li className=" hover:underline cursor-pointer">Our Blog</li>
            </ul>
          </div>

          <div>
            <h3 className=" font-bold text-white mb-5 text-xl">Follow Us</h3>
            <div className=" flex flex-row gap-5">
              <MdFacebook className=" text-5xl cursor-pointer" />
              <FaLinkedin className=" text-5xl cursor-pointer" />
              <FaSquareXTwitter className=" text-5xl cursor-pointer" />
              <FaYoutube className=" text-5xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex items-center flex-col">
        <span className=" mb-[16px]">Copyright 2023 ZedStudio, Inc.</span>
      </div>
    </footer>
  );
};

export default Footer;
