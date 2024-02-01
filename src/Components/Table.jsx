import React, { useState, useEffect } from "react";
//  no se si es buena manera de haerlo asi pero funciona desde la llamada de la api, so thank me later!
// By Raysell
export function Table() {
  const [countries, setCountries] = useState([
    {
      country: "China",
      population: "140.212.000",
      area: "970.6961",
      region: "Asia",
      flag: "https://flagcdn.com/w320/cn.png", 
    },
    {
      country: "India",
      population: "143.932.3776",
      area: "328.7590",
      region: "Asia",
      flag: "https://flagcdn.com/w320/in.png", 
    },
    {
      country: "United States",
      population: "329.484.123",
      area: "937.2610",
      region: "Americas",
      flag: "https://flagcdn.com/w320/us.png", 
    },
  ]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(
          data.map((country) => ({
            country: country.name.common,
            population: country.population,
            area: country.area,
            region: country.region,
            flag: country.flags?.png || "URL_TO_DEFAULT_FLAG_IMAGE", 
          }))
        );
      });
  }, []);

  return (
    <table className="bg-[#282B30] text-[#D2D5DA] w-full overflow-y-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Flags</th>
          <th className="px-4 py-2">Country</th>
          <th className="px-4 py-2">Population</th>
          <th className="px-4 py-2">Area (km²)</th>
          <th className="px-4 py-2">Region</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((row) => (
          <tr key={row.country}>
            <td className=" px-4 py-2">
              <img
                className="w-[70px] h-[50px]  rounded border-solid border-[3px] border-gray-400"
                src={row.flag}
                alt="flag"
              />
            </td>
            <td className=" px-4 py-2">{row.country}</td>
            <td className=" px-4 py-2">{row.population}</td>
            <td className=" px-4 py-2">{row.area}</td>
            <td className=" px-4 py-2">{row.region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
