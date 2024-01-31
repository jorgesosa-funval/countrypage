import React, { useState } from 'react';

const RegionBox = ({ name }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`border-none m-2 flex   text-white  cursor-pointer  rounded flex-wrap
                  ${isSelected ? 'border-gray-800 bg-gray-800 text-white' : ''}`}
                  
      onClick={handleClick}
    >
      <p className="m-4">{name}</p>
    </div>
  );
};

export default RegionBox;
