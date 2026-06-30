import React from "react";

const App = () => {
  const cities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Chennai"
  ];

  return (
    <div id="main">
      <ol>
        {cities.map((city, index) => (
          <li key={`location${index + 1}`}>
            {city}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;