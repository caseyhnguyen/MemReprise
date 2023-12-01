import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  Image,
  FlatList,
  View,
  Dimensions,
  TextInput,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "./HomeScreen";
import TracksScreen from "./TracksScreen";
import FeedScreen from "./FeedScreen";
import DiscoverScreen from "./DiscoverScreen";
import ThemeQScreen from "./ThemeQScreen";
import PostSummaryScreen from "./PostSummaryScreen";
import GradientBackground from "../assets/Themes/background";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const FeedStack = createStackNavigator();
const DiscoverStack = createStackNavigator();

// Create a wrapper component to apply gradient background
const GradientWrapper = ({ Component, navigation, route }) => (
  <GradientBackground>
    <Component navigation={navigation} route={route} />
  </GradientBackground>
);

// HomeStack Navigator
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>
      <HomeStack.Screen name="Home" options={{ headerShown: false }}>
        {(props) => <GradientWrapper {...props} Component={HomeScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Tracks">
        {(props) => <GradientWrapper {...props} Component={TracksScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Theme Question">
        {(props) => <GradientWrapper {...props} Component={ThemeQScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Post Summary">
        {(props) => (
          <GradientWrapper {...props} Component={PostSummaryScreen} />
        )}
      </HomeStack.Screen>

      {/* <HomeStack.Screen name="Feed" options={{ headerShown: false }}>
        {(props) => <GradientWrapper {...props} Component={FeedScreen} />}
      </HomeStack.Screen> */}
    </HomeStack.Navigator>
  );
}

// FeedStack Navigator
function FeedStackScreen() {
  return (
    <FeedStack.Navigator screenOptions={{ headerShown: false }}>
      <FeedStack.Screen name="Feed">
        {(props) => <GradientWrapper {...props} Component={FeedScreen} />}
      </FeedStack.Screen>
    </FeedStack.Navigator>
  );
}

// DiscoverStack Navigator
function DiscoverStackScreen() {
  return (
    <DiscoverStack.Navigator screenOptions={{ headerShown: false }}>
      <DiscoverStack.Screen name="Discover">
        {(props) => <GradientWrapper {...props} Component={DiscoverScreen} />}
      </DiscoverStack.Screen>
    </DiscoverStack.Navigator>
  );
}

const AppLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.verdigrisGreen,
        tabBarInactiveTintColor: colors.teal,
        tabBarLabelStyle: { fontSize: 14, padding: 5 },
        tabBarStyle: {
          display: "flex",
          paddingTop: 30,
        },
        tabBarIconStyle: { paddingBottom: 10 },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={images.homeIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FeedScreen"
        component={FeedStackScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={images.repriseIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DiscoverScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={images.profileIcon}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppLayout;
