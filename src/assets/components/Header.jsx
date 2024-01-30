import React from 'react';

import imagen from '/public/assets/Search.svg';

function Header() {
  const headerStyle = {


    display: 'flex',

    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#1B1D1F',
  };

  const inputContainerStyle = {
    position: 'relative',

    display: 'flex',

    alignItems: 'center',
  };

  const inputStyle = {
    padding: '5px 5px 5px 30px',
    width: '280px',
    background: '#282B30',
    color: 'white',

    border: 'none',
    borderRadius: '5px',

    backgroundImage: `url(${imagen})`,
    backgroundRepeat: 'no-repeat',

    backgroundPosition: '8px 50%',
  };

  const buttonStyle = {
    padding: '5px 10px',

    color: 'white',
    border: 'none',

    cursor: 'pointer',
  };

  const headingStyle = {
    marginLeft: '10px', 
    color: 'white',
  };

  return (
    <div style={headerStyle}>

      <h2 style={headingStyle}>Found 234 countries</h2>

      <div style={inputContainerStyle}>
        
        <input type="text" placeholder="Search by Name, Region, Subregion" style={inputStyle} />
        <button style={buttonStyle}></button>
      </div>
    </div>
  );
}

export default Header;
