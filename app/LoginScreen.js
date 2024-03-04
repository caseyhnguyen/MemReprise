import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { colors } from "../assets/Themes/colors";
import PillPressable from "../components/PillPressable";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import { trackEvent } from "@aptabase/react-native";
import { supabase } from "../utils/supabaseClient";

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = async () => {
    console.log("Login attempt with email:", email, "password:", password);
    try {
      // Use signInWithPassword for email/password authentication
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      }

      // Assuming 'data' contains the user session information
      console.log("Login successful, session data:", data);
      navigation.navigate("Home");
    } catch (error) {
      console.log("Login Error:", error.message);
      Alert.alert("Login Error", error.message);
    }
  };

  const handleNavigateSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleChangeEmail = (text) => {
    setEmail(text);
    console.log("Email Updated:", text);
    trackEvent("User Interaction", { action: "Email Field Interacted" });
  };

  const handleChangePassword = (text) => {
    setPassword(text);
    console.log("Password Updated:", text);
    trackEvent("User Interaction", { action: "Password Field Interacted" });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.titleContainer}>
            <Header1 text="Log in" />
            <Header2 text="Please sign in to continue" />
          </View>

          <View style={styles.postPrompt}>
            <View style={styles.containerInput}>
              <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={handleChangeEmail}
                style={styles.input}
              />
              <TextInput
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={handleChangePassword}
                style={styles.input}
              />
            </View>

            <View style={styles.buttonContainer}>
              <PillPressable onPress={handleLoginPress} text="Log in" />
            </View>

            <View style={styles.bottomTextContainer}>
              <Text style={styles.signUpText}>Don't have an account?</Text>
              <Pressable onPress={handleNavigateSignUp}>
                <Text style={styles.linkText}>Sign up</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20, // Add padding to the bottom of the scroll view
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  postPrompt: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  containerInput: {
    width: "100%",
  },
  input: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 20,
    padding: 11,
    width: windowWidth - 40,
    borderWidth: 1,
    borderColor: colors.offWhite75,
    borderRadius: 4,
    color: colors.black,
    backgroundColor: colors.offWhite75,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
    marginRight: 5,
  },
  linkText: {
    textDecorationLine: "underline",
    color: colors.pink,
    fontSize: 14,
  },
});

export default LoginScreen;
