import React from "react";
import '../../styles.css'

const ThemeSwitcher = ({ currentTheme, onSwitch }) => {
  const handleSwitch = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    onSwitch(newTheme);
  };

  return (
    <button onClick={handleSwitch}>
      {currentTheme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
    </button>
  );
};

export default ThemeSwitcher;