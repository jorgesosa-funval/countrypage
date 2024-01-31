import React, { useState, useEffect, createContext } from 'react';

export const CountriesContext = createContext();
export default function DisplayCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        data.forEach(country => {
          console.log('Country:', country.name.common);
          console.log('Population:', country.population);
          console.log('Flag:', country.flags.png);
        });
      });
  }, []);

  return (
    <CountriesContext.Provider value={countries}>
    </CountriesContext.Provider>
  );
}