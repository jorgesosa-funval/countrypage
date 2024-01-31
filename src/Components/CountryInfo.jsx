// CountryInfo.js
import React from "react";

const CountryInfo = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-900 rounded-lg  shadow-md w-full pb-6 flex-col mt-2">
      <div className=" w-full flex justify-between items-center border-slate-400 border-b mt-4 ">
        <span className="ml-2 text-gray-600 mb-3 mt-3">Capital</span>
        <span className="mr-2 text-white">New Delhi</span>
      </div>
      <div className=" w-full flex justify-between items-center border-slate-400 border-b">
        <span className="ml-2 text-gray-600 mb-3 mt-3">Subregion</span>
        <span className="mr-2 text-white">Southern Asia</span>
      </div>
      <div className=" w-full flex justify-between items-center border-slate-400 border-b">
        <span className="ml-2 text-gray-600 mb-3 mt-3">Language</span>
        <span className="mr-2 text-white">English, Hindi, Tami</span>
      </div>
      <div className=" w-full flex justify-between items-center border-slate-400 border-b">
        <span className="ml-2 text-gray-600 mb-3 mt-3">Currencies</span>
        <span className="mr-2 text-white">India rupee</span>
      </div>
      <div className=" w-full flex justify-between items-center border-slate-400 border-b">
        <span className="ml-2 text-gray-600 mb-3 mt-3">Continents</span>
        <span className="mr-2 text-white">Asia</span>
      </div>
      <div className=" w-full flex justify-between items-center border-slate-400">
        <span className="ml-2 text-gray-600 mb-3 mt-3">Neighbouring Countries</span>
      </div>
     



      <div className="flex gap-4 ml-2 mt-2 flex-row overflow-x-auto ">
        <div className="flex  flex-col items-center">
          <div className="border rounded-md p-2">
            <img src="" alt="Flag" className="w-12 h-12 mr-2" />
          </div>
          <span className="text-white text-center">Vecino 1</span>
        </div>

        <div className="flex flex-col items-center ">
          <div className="border rounded-md p-2">
            <img
              src="URL_DE_LA_BANDERA_DEL_VECINO_2"
              alt="Flag"
              className="w-12 h-12 mr-2"
            />
          </div>
          <span className="text-white">Vecino 2</span>
        </div>
        <div className="flex  flex-col items-center">
          <div className="border rounded-md p-2">
            <img src="" alt="Flag" className="w-12 h-12 mr-2" />
          </div>
          <span className="text-white text-center">Vecino 3</span>
        </div>
        
       
       
      </div>
    </div>
  );
};

export default CountryInfo;
