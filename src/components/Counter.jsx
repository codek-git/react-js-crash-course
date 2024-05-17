import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      style={{ backgroundColor: isOn ? "green" : "red" }}
      onClick={handleClick}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

export default Toggle;
