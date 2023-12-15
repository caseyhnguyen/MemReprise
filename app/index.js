import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLayout from "./_layout";
import * as SplashScreen from "expo-splash-screen";
import { DarkModeContext } from "../assets/Themes/DarkModeContext";
import { PostProvider } from "../utils/PostContext";
import { ThemeProvider } from "../utils/ThemeContext";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Prevent the splash screen from hiding before app is ready
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    // Simulate a loading scenario
    const timer = setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);

    // Clean up the timer when the effect is re-called or component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <PostProvider>
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <NavigationContainer>
            <AppLayout />
          </NavigationContainer>
        </DarkModeContext.Provider>
      </PostProvider>
    </ThemeProvider>
  );
};

export default App;
