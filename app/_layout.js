import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "./HomeScreen";
import TracksScreen from "./TracksScreen";
import FeedScreen from "./FeedScreen";
import DiscoverScreen from "./DiscoverScreen";
import ThemeQScreen from "./ThemeQScreen";
import PostSummaryScreen from "./PostSummaryScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const FeedStack = createStackNavigator();
const DiscoverStack = createStackNavigator();

// Stack Navigators for each tab
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="TracksScreen" component={TracksScreen} />
      <HomeStack.Screen name="ThemeQScreen" component={ThemeQScreen} />
      <HomeStack.Screen
        name="PostSummaryScreen"
        component={PostSummaryScreen}
      />
      {/* Other screens related to Home can be added here */}
    </HomeStack.Navigator>
  );
}

function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="FeedMain" component={FeedScreen} />
      {/* Other screens related to Feed can be added here */}
    </FeedStack.Navigator>
  );
}

function DiscoverStackScreen() {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen name="DiscoverMain" component={DiscoverScreen} />
      {/* Other screens related to Discover can be added here */}
    </DiscoverStack.Navigator>
  );
}

const AppLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // This will hide the header for all screens in the tab navigator
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: { fontSize: 18 },
        tabBarStyle: [{ display: "flex" }, null],
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
      <Tab.Screen name="FeedScreen" component={FeedStackScreen} />
      <Tab.Screen name="DiscoverScreen" component={DiscoverStackScreen} />
    </Tab.Navigator>
  );
};

export default AppLayout;
