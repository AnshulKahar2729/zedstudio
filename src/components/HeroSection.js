import { Carousel } from "flowbite-react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="  w-screen h-[700px] overflow-x-hidden">
      <Carousel className="">
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default HeroSection;
