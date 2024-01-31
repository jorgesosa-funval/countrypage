import React from "react";

function HeroImage({children}) {
  return (
 
    <div className="flex flex-col h-full w-full relative bg-gray-950   ">
      <div className=" h-2/5 w-full flex items-center justify-center bg-hero-pattern bg-black bg-contain  bg-center bg-no-repeat">
        <img
          src="/public/assets/Logo.svg"
          alt="Logo Img"
          className="   w-[14rem] h-auto"
        />
      </div>
      <div className="w-full h-full relative    pb-10 box-border">
        <div className="  h-full w-full absolute left-0 -top-10 px-10">
          {children}
        </div>

      </div>

    </div>
  );
}

export default HeroImage;
