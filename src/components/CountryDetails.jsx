import React from "react";
import World from '/assets/hero-image-wr.jpg'; 
import logo from '/assets/Logo.svg'
export default function CountryDetails() {
  return (
    <>
    <div className="flex justify-center items-center">
     <img src={World} alt="" className='w-full sm:h-30'/>
     <img src={logo} alt="logo" className='absolute top-[80px] xl:absolute xl:top-[120px]'/>
     </div>
     <div className=" flex justify-center ">
       
      <div className=" text-color-texto flex flex-col items-center justify-star w-[500px] h-[650px] rounded-[20px] py-[110px] bg-color-base sm:w-full  md:absolute md:bg-color-base md:w-[450px] md:top-[160px] lg:bg-color-base lg:absolute lg:top-[190px] xl:bg-color-base xl:absolute xl:top-[230px] shadow-lg">

        <div className="border-4 border-indigo-500/100 w-[190px] h-[150px]  rounded-[20px] max-sm:absolute max-sm:bottom-[345px] sm:absolute sm:bottom-[345px] md:absolute md:bottom-[550px] ">

        </div>
        <h2 className='text-[25px]'>India</h2>
        <p className="flex text-sm">Republic of India</p>
        <div className="flex text-sm gap-6 ">

          <div className="bg-bg-info w-[200px] h-[35px] rounded-[5px] justify-center flex items-center gap-3 my-[20px] text-[13px]">
            <span>Population</span>
            <span>1,380,004,385</span>
            
          </div>
          <div className="bg-bg-info w-[170px] h-[35px] rounded-[5px] justify-center flex items-center gap-3 my-[20px] text-[13px]">
            <span>Area(km²)</span>
            <span>2,973,190</span>
          </div>
        </div>
      </div>
      </div>

    </>
  );
}
