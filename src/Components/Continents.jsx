import React, { useState } from "react";
//  Hecho pot Raysell, Agradeceme despues! 😏

const Continents = () => {

  const [selectedRegions, setSelectedRegions] = useState([]);

  const regions = [
    { name: "Americas", style: "regionHighlight" },
    { name: "Antarctic", style: "" },
    { name: "Africa", style: "regionHighlight" },
    { name: "Asia", style: "regionHighlight" },
    { name: "Europe", style: "regionHighlight" },
    { name: "Oceania", style: "" },
  ];

  const handleRegionStyle = (e) => {
    const regionName = e.currentTarget.innerText;


    setSelectedRegions((prevSelected) => {
      if (prevSelected.includes(regionName)) {
        return prevSelected.filter((name) => name !== regionName);
      } else {
        return [...prevSelected, regionName];
      }
    });
  };

  return (
    <div>
      {/* Region Filtering */}
      <h3 className="font-semibold px-3 text-gray-700">Region</h3>
      <ul className="flex  gap-3 flex-wrap my-2 px-2">
        {regions.map((item, index) => (
          <li
            key={index}
            className={`${
              selectedRegions.includes(item.name)
                ? "regionHighlight text-gray-700"
                : "bg-gray-500 text-white"
            } text-sm font-semibold p-3 w-max rounded cursor-pointer`}
            onClick={handleRegionStyle}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
