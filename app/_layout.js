// import { Stack } from "expo-router";

// export default function AppLayout() {
//   return <Stack />;
// }

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import TracksScreen from "./TracksScreen";
import FeedScreen from "./FeedScreen";
import DiscoverScreen from "./DiscoverScreen";
import ThemeQScreen from "./ThemeQScreen";
import PostSummaryScreen from "./PostSummaryScreen";

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
      <Stack.Screen name="ThemeQScreen" component={ThemeQScreen}/>
      <Stack.Screen name="PostSummaryScreen" component={PostSummaryScreen}/>
      <Stack.Screen name="FeedScreen" component={FeedScreen}/>
      <Stack.Screen name="DiscoverScreen" component={DiscoverScreen}/>
    </Stack.Navigator>
  );
}
