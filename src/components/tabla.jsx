import React, { useState, useEffect } from 'react';

export function Table() {
  const [data, setData] = useState([
    { country: 'China', population: '140.212.000', area: '970.6961', region: 'Asia' },
    { country: 'India', population: '143.932.3776', area: '328.7590', region: 'Asia' },
    { country: 'United States', population: '329.484.123', area: '937.2610', region: 'Americas' },
  ]);

  useEffect(() => {
    
  }, []);

  return (
    <table className="table-auto bg-[#282B30] text-[#D2D5DA]">
      <thead>
        <tr>
          <th className="px-4 py-2">Flag</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Population</th>
          <th className="px-4 py-2">Area (km²)</th>
          <th className="px-4 py-2">Region</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.country}>
            <td className="border px-4 py-2"><img className='w-[70px] h-[50px] border rounded border-solid border-[3px] border-gray-400' src="" alt="bandera" /></td>
            <td className="border px-4 py-2">{row.country}</td>
            <td className="border px-4 py-2">{row.population}</td>
            <td className="border px-4 py-2">{row.area}</td>
            <td className="border px-4 py-2">{row.region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}