import React, { useState, useEffect } from 'react';

const CustomAddUser = () => {
  const countriesData = {
    "Romania": ["Bucharest", "Cluj-Napoca", "Iasi", "Timisoara", "Constanta"],
    "France": ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
    "Germany": ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"],
    "Italy": ["Rome", "Milan", "Naples", "Turin", "Palermo"],
    "Spain": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza"],
    "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
    "Brazil": ["São Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Fortaleza"],
    "China": ["Beijing", "Shanghai", "Chongqing", "Tianjin", "Guangzhou"],
    "India": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad"],
    "Russia": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    "Canada": ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton"],
    "United Kingdom": ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool"]
  };

  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  useEffect(() => {
    if (selectedCountry) {
      setCities(countriesData[selectedCountry]);
    } else {
      setCities([]);
    }
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setSelectedCity('');
    setCities(countriesData[country]);
  };
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <h1>Select Country and City</h1>
      <div>
        <label htmlFor="country">Select a country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {Object.keys(countriesData).map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      {selectedCountry && (
        <div>
          <label htmlFor="city">Select a city:</label>
          <select id="city" value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      )}
      {selectedCity && (
        <div>
          <h2>You selected:</h2>
          <p>Country: {selectedCountry}</p>
          <p>City: {selectedCity}</p>
        </div>
      )}
    </div>
  );
};

export default CustomAddUser;
