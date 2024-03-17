import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={["#000", "#000"]}

      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
