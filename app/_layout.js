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
import { trackEvent } from "@aptabase/react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

// Screens
// Simple Task
import LoginSignUpScreen from "./LoginSignUpScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import HomeScreen from "./HomeScreen";
import Tracks from "./Tracks";
import ProfileScreen from "./ProfileScreen";
import ThemeQScreen from "./ThemeQScreen";
import PostSummaryScreen from "./PostSummaryScreen";
import GradientBackground from "../assets/Themes/background";
import EmotionQScreen from "./EmotionQScreen";
import ActivityQScreen from "./ActivityQScreen";

// Medium Task
import FeedScreen from "./FeedScreen";
import ActivityScreen from "./mediumTask/ActivityScreen";
import FeelingScreen from "./mediumTask/FeelingScreen";
import ThemeScreen from "./mediumTask/ThemeScreen";
import PostExpandScreen from "./mediumTask/PostExpandScreen";
import PlaylistDetails from "./mediumTask/PlaylistDetails";

import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import { TabBarIndicator } from "react-native-tab-view";
import { PostContext } from "../utils/PostContext";

// Complex Task
import CalendarActivityScreen from "./complexTask/CalendarActivityScreen";
import TutorialScreen from "./TutorialScreen";
import { StatusBar } from "expo-status-bar";
import ShareMusicBox from "./complexTask/ShareMusicBox";
import RecieveGift from "./complexTask/RecieveGift";
import SentGift from "./complexTask/SentGift";
import PlaylistCity from "./complexTask/PlaylistCity";

import Aptabase from "@aptabase/react-native";
import MusicBox from "../components/MusicBox";

Aptabase.init("A-US-8502203082");

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
const GradientWrapper = ({ Component, navigation, route }) => {
  useEffect(() => {
    // Log screen view with Aptabase
    trackEvent("Screen View", { screen: route.name });
  }, [route.name]);

  return (
    <GradientBackground>
      <Component navigation={navigation} route={route} />
    </GradientBackground>
  );
};

// HomeStack Navigator
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>
      {/* <HomeStack.Screen name="LoginSignUp" options={{ headerShown: false }}>
        {(props) => (
          <GradientWrapper {...props} Component={LoginSignUpScreen} />
        )}
      </HomeStack.Screen> */}
      <HomeStack.Screen name="Login" options={{ headerShown: false }}>
        {(props) => <GradientWrapper {...props} Component={LoginScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="SignUp" options={{ headerShown: false }}>
        {(props) => <GradientWrapper {...props} Component={SignUpScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Tutorial" options={{ headerShown: false }}>
        {(props) => <GradientWrapper {...props} Component={TutorialScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Home" options={{ headerShown: false }}>
        {(props) => <GradientWrapper {...props} Component={HomeScreen} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Tracks">
        {(props) => <GradientWrapper {...props} Component={Tracks} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Share a Music Box">
        {(props) => <GradientWrapper {...props} Component={ShareMusicBox} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Recieve Gift">
        {(props) => <GradientWrapper {...props} Component={RecieveGift} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Sent Gift">
        {(props) => <GradientWrapper {...props} Component={SentGift} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="City Playlist">
        {(props) => <GradientWrapper {...props} Component={PlaylistCity} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Music Box">
        {(props) => <GradientWrapper {...props} Component={MusicBox} />}
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

      {/* <ActivityStack.Screen name="ActivityPlaylist">
        {(props) => (
          <GradientWrapper {...props} Component={ActivityPlaylistScreen} />
        )}
      </ActivityStack.Screen> */}

      <ActivityStack.Screen name="PlaylistDetails">
        {(props) => <GradientWrapper {...props} Component={PlaylistDetails} />}
      </ActivityStack.Screen>
    </ActivityStack.Navigator>
  );
}

function ThemeStackScreen() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.black}
        translucent={true}
      />

      <ThemeStack.Navigator screenOptions={{ headerShown: false }}>
        <ThemeStack.Screen name="ThemeScreen">
          {(props) => <GradientWrapper {...props} Component={ThemeScreen} />}
        </ThemeStack.Screen>

        <ThemeStack.Screen name="PlaylistDetails">
          {(props) => (
            <GradientWrapper {...props} Component={PlaylistDetails} />
          )}
        </ThemeStack.Screen>
      </ThemeStack.Navigator>
    </>
  );
}

function FeelingStackScreen() {
  return (
    <FeelingStack.Navigator screenOptions={{ headerShown: false }}>
      <FeelingStack.Screen name="FeelingScreen">
        {(props) => <GradientWrapper {...props} Component={FeelingScreen} />}
      </FeelingStack.Screen>
      <FeelingStack.Screen name="PlaylistDetails">
        {(props) => <GradientWrapper {...props} Component={PlaylistDetails} />}
      </FeelingStack.Screen>
    </FeelingStack.Navigator>
  );
}

function DiscoverTabsScreen() {
  return (
    <>
      <DiscoverTabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "transparent",
            margin: 10,
            position: "absolute",
            left: 5,
            color: colors.black,
            right: 5,
          },
          tabBarItemStyle: {
            borderRadius: 15,
            color: colors.black,
            margin: 5,
            backgroundColor: colors.darkGray,
          },
          tabBarIndicatorStyle: {
            height: null,
            top: 0,
            // borderRadius: 15,
            color: colors.black,
            backgroundColor: colors.black,
          },
        }}
      >
        <DiscoverTabs.Screen
          name="Music boxes near me"
          style={{ color: colors.black }}
        >
          {(props) => (
            <GradientWrapper {...props} Component={ActivityStackScreen} />
          )}
        </DiscoverTabs.Screen>

        {/* <DiscoverTabs.Screen name="Theme">
        {(props) => <GradientWrapper {...props} Component={ThemeStackScreen} />}
      </DiscoverTabs.Screen>

      <DiscoverTabs.Screen name="Feeling">
        {(props) => (
          <GradientWrapper {...props} Component={FeelingStackScreen} />
        )}
      </DiscoverTabs.Screen> */}
      </DiscoverTabs.Navigator>
    </>
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
    <SafeAreaView style={{ flex: 1, color: colors.black }}>
      <FeedTabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.darkGray,
            color: colors.black,
          },
          tabBarIndicatorStyle: {
            // backgroundColor: "#FFD966CC",
            backgroundColor: colors.blue,
            color: colors.black,
          },
        }}
      >
        <FeedTabs.Screen
          name="FeedStackScreen"
          style={{ color: colors.black }}
          options={{ tabBarLabel: "Feed" }}
        >
          {(props) => (
            <GradientWrapper {...props} Component={FeedStackScreen} />
          )}
        </FeedTabs.Screen>

        <FeedTabs.Screen name="Discover" style={{ color: colors.black }}>
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
        {(props) => (
          <GradientWrapper {...props} Component={CalendarActivityScreen} />
        )}
      </ProfileStack.Screen>
      <ProfileStack.Screen name="Profile">
        {(props) => <GradientWrapper {...props} Component={ProfileScreen} />}
      </ProfileStack.Screen>
      <ProfileStack.Screen name="PostExpandScreen">
        {(props) => <GradientWrapper {...props} Component={PostExpandScreen} />}
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
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.gray,
        tabBarActiveBackgroundColor: colors.pink,
        tabBarLabelStyle: {
          fontSize: 14,
          paddingBottom: 5,
        },
        tabBarStyle: {
          display: "flex",
          bottom: "0%",
          backgroundColor: colors.black,
          height: "10.5%",
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={postMade ? FeedStackScreen : HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="complexTask/ShareMusicBox"
        component={ShareMusicBox}
        options={{
          tabBarLabel: "Mix",
          tabBarIcon: ({ color, size }) => (
            <Icon name="music" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="complexTask/PlaylistCity"
        component={PlaylistCity}
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="globe-americas"
              style={{ fontSize: size, color: color }}
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
            <Icon name="user-alt" style={{ fontSize: size, color: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppLayout;
