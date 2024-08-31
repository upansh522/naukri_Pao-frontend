import React, { useState } from 'react';

const Sidebar = ({ onFilterChange }) => {
  const [minBasePay, setMinBasePay] = useState(0);
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const allCities = [
    // Wrk From Home
    "Remote","Work From Home",
    // India
    "Bangalore", "Hyderabad", "Chennai", "Mumbai", "Pune",
    // UK
    "London", "Manchester", "Edinburgh", "Birmingham",
    // Japan
    "Tokyo", "Osaka", "Nagoya", "Fukuoka",
    // America
    "New York", "San Francisco", "Seattle", "Austin",
    // Australia
    "Sydney", "Melbourne", "Brisbane", "Perth",
    // Netherlands
    "Amsterdam", "Rotterdam", "Utrecht", "The Hague"
  ];

  const handleBasePayChange = (e) => {
    setMinBasePay(e.target.value);
    onFilterChange({ minBasePay: e.target.value, location });
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);

    if (value.length > 0) {
      const filteredSuggestions = allCities.filter(city =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }

    onFilterChange({ minBasePay, location: value });
  };

  const handleSuggestionClick = (city) => {
    setLocation(city);
    setSuggestions([]);
    setShowSuggestions(false);
    onFilterChange({ minBasePay, location: city });
  };

  return (
    <div className="w-64 bg-slate-300 p-4">
      <h2 className="text-xl font-bold mb-4 rounded">Filters</h2>

      <div className="mb-4">
        <label htmlFor="minBasePay" className="block text-sm font-bold text-lg flex justify-center">Minimum Base Pay</label>
        <input
          type="range"
          id="minBasePay"
          min="0"
          max="200000"
          value={minBasePay}
          onChange={handleBasePayChange}
          className="w-full"
        />
        <div className="text-sm text-orange-700">Selected: ${minBasePay}</div>
      </div>

      <div className="mb-4 relative">
        <label htmlFor="location" className="mt-4 block text-sm font-bold text-lg flex justify-center">Location</label>
        <input
          id="location"
          value={location}
          onChange={handleLocationChange}
          className="w-full border-orange-300 rounded-md h-10"
          placeholder="Select or type a city"
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 max-h-40 overflow-y-auto z-10">
            {suggestions.map((city, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(city)}
                className="p-2 cursor-pointer hover:bg-gray-200"
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
