import React from "react";

function HeroImage() {
  return (
    <div className="hero-section relative">
      <img
        src="/assets/hero-image-wr.jpg"
        alt="Hero Image"
        className="w-full h-auto"
      />
      <div className="text-center absolute mt-32 logo-overlay top-0 left-1/2 transform -translate-x-1/2 ">
        <img
          src="/public/assets/Logo.svg"
          alt="Logo Img"
          className="mx-auto mt-4 w-[14rem] h-auto"
        />
      </div>
    </div>
  );
}

export default HeroImage;
