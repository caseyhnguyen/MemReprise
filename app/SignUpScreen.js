import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import Header from "../components/Header";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { supabase } from "../utils/supabaseClient";
import PillPressable from "../components/PillPressable";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import { trackEvent } from "@aptabase/react-native";

// Get the window dimensions
// Get the window dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    trackEvent("Sign Up Attempt", {
      fullName: fullName,
      userName: userName,
      email: email,
    });

    if (!fullName || !userName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      trackEvent("Sign Up Error", {
        error: "Incomplete form",
      });
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      trackEvent("Sign Up Error", {
        error: "Password mismatch",
      });
      return;
    }

    try {
      const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) throw error;

      if (session) {
        trackEvent("Sign Up Success", {
          userName: userName,
        });
        alert("Sign up successful!");
        navigation.navigate("Home", { userName: userName });
      } else if (user) {
        // If 'Confirm email' is enabled, session will be null and user will need to verify their email
        alert(
          "Please check your email to verify your account before logging in."
        );
      }

      // Optionally, store additional user metadata if needed right after successful sign up
      // However, consider doing this after email verification if 'Confirm email' is enabled
      // const { data, error: metaError } = await supabase.from("users").insert([{
      //     id: user.id,
      //     full_name: fullName,
      //     username: userName,
      //     email: email,
      // }]);

      // if (metaError) throw metaError;
    } catch (error) {
      alert(error.message);
      trackEvent("Sign Up Failure", {
        error: error.message,
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.titleContainer}>
            <Header1 text="Create account" />
            <Header2 text="Please create an account to continue" />
          </View>
          <View style={styles.postPrompt}>
            <View style={styles.containerInput}>
              <TextInput
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
                style={styles.input}
              />
              <TextInput
                placeholder="Username"
                value={userName}
                onChangeText={setUserName}
                style={styles.input}
              />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
              />
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={styles.input}
              />
            </View>
            <View style={styles.buttonContainer}>
              <PillPressable onPress={handleSignUp} text="Sign up" />
            </View>
            <View style={styles.bottomTextContainer}>
              <Text style={styles.signUpText}>Already have an account?</Text>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={styles.linkText}>Log in</Text>
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

export default SignUpScreen;
