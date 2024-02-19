const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import V3Home from "./screens/V3Home";
import V3RecieveGift from "./components/V3RecieveGift";
import V3ShareMusicBox from "./screens/V3ShareMusicBox";
import V3PlaylistSample from "./components/V3PlaylistSample";
import PlaylistCity from "./components/PlaylistCity";
import PlaylistPin from "./components/PlaylistPin";
import MusicBoxGiftSample from "./screens/MusicBoxGiftSample";
import MusicBoxGiftSample1 from "./screens/MusicBoxGiftSample1";
import MusicBoxGiftSample2 from "./screens/MusicBoxGiftSample2";
import ShareMusicBox from "./screens/ShareMusicBox";
import Home from "./screens/Home";
import PlaylistInternationalCity from "./screens/PlaylistInternationalCity";
import PlaylistPin1 from "./screens/PlaylistPin1";
import MusicBoxGiftSample3 from "./screens/MusicBoxGiftSample3";
import MusicBoxGiftSample4 from "./screens/MusicBoxGiftSample4";
import MusicBoxGiftSample5 from "./screens/MusicBoxGiftSample5";
import PlaylistSample from "./screens/PlaylistSample";
import PlaylistCity1 from "./screens/PlaylistCity1";
import HitsWhereIAm from "./screens/HitsWhereIAm";
import ReceiveGift from "./screens/ReceiveGift";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "NerkoOne-Regular": require("./assets/fonts/NerkoOne-Regular.ttf"),
    LeagueScript: require("./assets/fonts/LeagueScript.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="V3Home"
              component={V3Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="V3ShareMusicBox"
              component={V3ShareMusicBox}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MusicBoxGiftSample"
              component={MusicBoxGiftSample}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MusicBoxGiftSample1"
              component={MusicBoxGiftSample1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MusicBoxGiftSample2"
              component={MusicBoxGiftSample2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShareMusicBox"
              component={ShareMusicBox}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlaylistInternationalCity"
              component={PlaylistInternationalCity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlaylistPin1"
              component={PlaylistPin1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MusicBoxGiftSample3"
              component={MusicBoxGiftSample3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MusicBoxGiftSample4"
              component={MusicBoxGiftSample4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MusicBoxGiftSample5"
              component={MusicBoxGiftSample5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlaylistSample"
              component={PlaylistSample}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlaylistCity1"
              component={PlaylistCity1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HitsWhereIAm"
              component={HitsWhereIAm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReceiveGift"
              component={ReceiveGift}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
