import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLayout from "./_layout";
import * as SplashScreen from "expo-splash-screen";
import { DarkModeContext } from "../assets/Themes/DarkModeContext";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Prevent the splash screen from hiding before your app is ready
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    // Simulate a loading scenario
    const timer = setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000); // Adjust the timing as needed

    // Clean up the timer when the effect is re-called or component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <NavigationContainer>
        <AppLayout />
      </NavigationContainer>
    </DarkModeContext.Provider>
  );
};

export default App;
