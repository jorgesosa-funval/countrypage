import React, { useState } from "react";
import Header from "../Header";
import { Table } from "../Table";
import RegionBox from "../RegionBox";
import Status from "../Status";

import DropDownIcon from "../../assets/Expand_down.svg";
import RegionFliter from "../Continents";

export default function Layout() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="flex flex-col bg-green-800   md:h-full md:pb-5 lg:p-4 lg:pb-10">
      <div className="buscardor flex h-14 bg-red-400 m-2  md:mt-3">
        <Header />
      </div>
      <div className="flex flex-col md:flex-row md:h-full">
        <div className="filtros flex m-2 bg-gray-900 h-44 md:h-full  md:mb-4 md:w-1/4 lg:w-1/6 lg:h-full flex-col">
          {/* Raysell */}
          <div className="my-4">
            <label
              htmlFor="mySelect"
              className="block text-gray-700 text-sm font-bold mb-2 px-2"
            >
              Sort by
            </label>
            <div className="relative px-2">
              <select
                id="mySelect"
                value={selectedOption}
                onChange={handleSelectChange}
                className="border rounded px-3 p-1 appearance-none w-[100%] bg-gray-900 border-gray-700 text-gray-700 "
              >
                <option value="">Population</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <img src={DropDownIcon} alt="Drop" />
              </div>
            </div>
          </div>
          {/* Raysell */}

          <div className="flex  bg-gray-900 flex-wrap h-2/5">
            <RegionFliter />
          </div>
          <div>
            <Status />
          </div>
        </div>

        {/* Raysell */}
        <div className="tabla flex m-2 bg-red-950 h-[450px] md:h-full  md:mb-4 md:w-3/4 lg:w-5/6 lg:h-full overflow-y-auto">
          <Table />
        </div>
      </div>
    </div>
  );
}
