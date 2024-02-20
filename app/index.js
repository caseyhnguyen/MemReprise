import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLayout from "./_layout";
import * as SplashScreen from "expo-splash-screen";
import { DarkModeContext } from "../assets/Themes/DarkModeContext";
import { PostProvider } from "../utils/PostContext";
import { ThemeProvider } from "../utils/ThemeContext";

import Aptabase from "@aptabase/react-native";

Aptabase.init("A-US-8502203082");

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
    <PostProvider>
      <ThemeProvider>
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <NavigationContainer>
            <AppLayout />
          </NavigationContainer>
        </DarkModeContext.Provider>
      </ThemeProvider>
    </PostProvider>
  );
};

export default App;
