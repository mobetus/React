import { useState } from 'react';
const Bulb = ( => {
const [light, setLight] = useState("OFF");

console.log(light);
return (
  <div>
    {lgiht === "ON" ? (
      <h1 style={{ backgroundcolor: "orange"}}>ON</h1>
    ) : (
      <h1 style={{ backgroundcolor: "grey"}}>OFF</h1>
    )}

    <button
    onClick={() -> {
      setLight(light === "ON" ? "OFF" : "ON");
    }}
    >
    {light === "ON" ? "끄기" : "켜기"}
    </button>
   </div>
  );
};

export default Bulb;