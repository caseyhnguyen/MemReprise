import React, { createContext, useState, useContext } from "react";

export const ThemeContext = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const updateTheme = (theme) => {
    console.log("Setting theme:", theme);
    setSelectedTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{ selectedTheme, setSelectedTheme: updateTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
