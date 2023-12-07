import React, { useContext, useState, useEffect } from "react";
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
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
// Simple Task
import LoginSignUpScreen from "./LoginSignUpScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import HomeScreen from "./HomeScreen";
import TracksScreen from "./TracksScreen";
import ProfileScreen from "./ProfileScreen";
import ThemeQScreen from "./ThemeQScreen";
import PostSummaryScreen from "./PostSummaryScreen";
import GradientBackground from "../assets/Themes/background"; // Import the GradientBackground component
import EmotionQScreen from "./EmotionQScreen";
import ActivityQScreen from "./ActivityQScreen";

// Medium Task
import FeedScreen from "./FeedScreen";
import DiscoverScreen from "./mediumTask/DiscoverScreen";
import ActivityScreen from "./mediumTask/ActivityScreen";
import ActivityPlaylistScreen from "./mediumTask/ActivityPlaylistScreen";
import FeelingScreen from "./mediumTask/FeelingScreen";
import ThemeScreen from "./mediumTask/ThemeScreen";
import PostExpandScreen from "./mediumTask/PostExpandScreen";
import PlaylistDetails from "./mediumTask/PlaylistDetails";

import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import { TabBarIndicator } from "react-native-tab-view";
import ThemePlaylistScreen from "./mediumTask/ThemePlaylistScreen";
import FeelingPlaylistScreen from "./mediumTask/FeelingPlaylistScreen";
import { PostContext } from "../utils/PostContext";

// Complex Task 
import CalendarActivityScreen from "./complexTask/CalendarActivityScreen"; 

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

// Medium Task
const ActivityStack = createStackNavigator();
const ThemeStack = createStackNavigator();
const FeelingStack = createStackNavigator();
const FeedTabs = createMaterialTopTabNavigator();
const FeedStack = createStackNavigator();
const DiscoverTabs = createMaterialTopTabNavigator();

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
      <HomeStack.Screen name="LoginSignUp" options={{ headerShown: false }}>
        {(props) => (
          <GradientWrapper {...props} Component={LoginSignUpScreen} />
        )}
      </HomeStack.Screen>
      <HomeStack.Screen name="Login" options={{ headerShown: false }}>
        {(props) => <GradientWrapper {...props} Component={LoginScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="SignUp" options={{ headerShown: false }}>
        {(props) => <GradientWrapper {...props} Component={SignUpScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Home" options={{ headerShown: false }}>
        {(props) => <GradientWrapper {...props} Component={HomeScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Tracks">
        {(props) => <GradientWrapper {...props} Component={TracksScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Theme Question">
        {(props) => <GradientWrapper {...props} Component={ThemeQScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Emotion Question">
        {(props) => <GradientWrapper {...props} Component={EmotionQScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Activity Question">
        {(props) => <GradientWrapper {...props} Component={ActivityQScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Post Summary">
        {(props) => (
          <GradientWrapper {...props} Component={PostSummaryScreen} />
        )}
      </HomeStack.Screen>

      <HomeStack.Screen name="FeedTabs" options={{ headerShown: false }}>
        {(props) => <GradientWrapper {...props} Component={FeedTabsScreen} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

function ActivityStackScreen() {
  return (
    <ActivityStack.Navigator screenOptions={{ headerShown: false }}>
      <ActivityStack.Screen name="ActivityScreen">
        {(props) => <GradientWrapper {...props} Component={ActivityScreen} />}
      </ActivityStack.Screen>

      <ActivityStack.Screen name="ActivityPlaylist">
        {(props) => (
          <GradientWrapper {...props} Component={ActivityPlaylistScreen} />
        )}
      </ActivityStack.Screen>

      <ActivityStack.Screen name="PlaylistDetails">
        {(props) => <GradientWrapper {...props} Component={PlaylistDetails} />}
      </ActivityStack.Screen>
    </ActivityStack.Navigator>
  );
}

function ThemeStackScreen() {
  return (
    <ThemeStack.Navigator screenOptions={{ headerShown: false }}>
      <ThemeStack.Screen name="ThemeScreen">
        {(props) => <GradientWrapper {...props} Component={ThemeScreen} />}
      </ThemeStack.Screen>

      <ThemeStack.Screen name="ThemePlaylist">
        {(props) => (
          <GradientWrapper {...props} Component={ThemePlaylistScreen} />
        )}
      </ThemeStack.Screen>

      <ThemeStack.Screen name="PlaylistDetails">
        {(props) => <GradientWrapper {...props} Component={PlaylistDetails} />}
      </ThemeStack.Screen>
    </ThemeStack.Navigator>
  );
}

function FeelingStackScreen() {
  return (
    <FeelingStack.Navigator screenOptions={{ headerShown: false }}>
      <FeelingStack.Screen name="FeelingScreen">
        {(props) => <GradientWrapper {...props} Component={FeelingScreen} />}
      </FeelingStack.Screen>

      <FeelingStack.Screen name="FeelingPlaylist">
        {(props) => (
          <GradientWrapper {...props} Component={FeelingPlaylistScreen} />
        )}
      </FeelingStack.Screen>

      <FeelingStack.Screen name="PlaylistDetails">
        {(props) => <GradientWrapper {...props} Component={PlaylistDetails} />}
      </FeelingStack.Screen>
    </FeelingStack.Navigator>
  );
}

function DiscoverTabsScreen() {
  return (
    <DiscoverTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          margin: 10,
          position: "absolute",
          left: 5,
          right: 5,
        },
        tabBarItemStyle: {
          borderRadius: 30,
          margin: 5,
          backgroundColor: "rgba(256, 256, 256, 0.5)",
        },
        tabBarIndicatorStyle: {
          height: null,
          top: 0,
          borderRadius: 30,
          backgroundColor: "#FFD966CC",
        },
      }}
    >
      <DiscoverTabs.Screen name="Activity">
        {(props) => (
          <GradientWrapper {...props} Component={ActivityStackScreen} />
        )}
      </DiscoverTabs.Screen>

      <DiscoverTabs.Screen name="Theme">
        {(props) => <GradientWrapper {...props} Component={ThemeStackScreen} />}
      </DiscoverTabs.Screen>

      <DiscoverTabs.Screen name="Feeling">
        {(props) => (
          <GradientWrapper {...props} Component={FeelingStackScreen} />
        )}
      </DiscoverTabs.Screen>
    </DiscoverTabs.Navigator>
  );
}

function FeedStackScreen() {
  return (
    <FeedStack.Navigator screenOptions={{ headerShown: false }}>
      <FeedStack.Screen name="FeedInnerScreen">
        {(props) => <GradientWrapper {...props} Component={FeedScreen} />}
      </FeedStack.Screen>

      <FeedStack.Screen name="PostExpandScreen">
        {(props) => <GradientWrapper {...props} Component={PostExpandScreen} />}
      </FeedStack.Screen>
    </FeedStack.Navigator>
  );
}

// FeedStack Navigator
function FeedTabsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FeedTabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#05BCF3",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#FFD966CC"
          },
        }}
      >
        <FeedTabs.Screen
          name="FeedStackScreen"
          options={{ tabBarLabel: "Feed" }}
        >
          {(props) => (
            <GradientWrapper {...props} Component={FeedStackScreen} />
          )}
        </FeedTabs.Screen>

        <FeedTabs.Screen name="Discover">
          {(props) => (
            <GradientWrapper {...props} Component={DiscoverTabsScreen} />
          )}
        </FeedTabs.Screen>
      </FeedTabs.Navigator>
    </SafeAreaView>
  );
}

// ProfileStack Navigator
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Calendar">
        {(props) => <GradientWrapper {...props} Component={CalendarActivityScreen} />}
    <ProfileStack.Navigator screenOptions={{ headerShown: false }} >
      <ProfileStack.Screen name="Profile">
        {(props) => <GradientWrapper {...props} Component={ProfileScreen} />}
      </ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
}

const AppLayout = () => {
  const { postMade } = useContext(PostContext);
  console.log("PostContext - postMade:", postMade);
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
        component={postMade ? FeedStackScreen : HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={images.home.pic}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FeedScreen"
        component={FeedTabsScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={images.reprise.pic}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={images.profile.pic}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppLayout;
