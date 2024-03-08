import React from "react";
import TeamImage from "../assets/photo_2024-03-09_00-16-27-removebg-preview.png";

const TeamSection = () => {
  return (
    <div className=" footer border-b-2 border-white grid grid-cols-1 lg:grid-cols-12 px-[6%]">
      <div className=" col-span-8">
        <img src={TeamImage} alt="" />
      </div>
      <div className=" pt-12 col-span-4">
        <h3 className=" text-white text-3xl">
          Our Teams
        </h3>
        <div>
          <p className=" text-white text-xl py-5">
            We are a team of talented developers, designers, and marketers who
            are passionate about helping our clients achieve their goals. We
            work together to create beautiful, engaging digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
