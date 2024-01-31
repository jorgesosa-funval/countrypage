import React from "react";
import HeroImage from "./components/HeroImage/HeroImage";

function App() {
  return (
    <div className="main-container">
      <HeroImage />
      <div className="flex flex-wrap justify-center p-4  bg-gray-900">
        <RegionBox name="América" />
        <RegionBox name="Antarctic" />
        <RegionBox name="Africa" />
        <RegionBox name="Asia" />
        <RegionBox name="Europe" />
        <RegionBox name="Oceanía" />
      </div>
    </div>
  );
}

export default App;
