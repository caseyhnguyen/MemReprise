// import { Stack } from "expo-router";

// export default function AppLayout() {
//   return <Stack />;
// }

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import TracksScreen from "./TracksScreen";

const Stack = createStackNavigator();

export default function AppLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="TracksScreen"
        component={TracksScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
