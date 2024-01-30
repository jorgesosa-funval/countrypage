import React from "react";

function App() {
  return (
    <div className="main-container">
      <div className="hero-section relative">
        <img
          src="/assets/hero-image-wr.jpg"
          alt="Hero Image"
          className="w-full h-auto"
        />
        <div className="logo-overlay absolute mt-32 top-0 left-1/2 transform -translate-x-1/2 text-center">
          <img
            src="/public/assets/Logo.svg"
            alt="Logo Img"
            className="mx-auto mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
