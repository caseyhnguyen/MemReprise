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
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import Header from "../components/Header";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PillPressable from "../components/PillPressable";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Label from "../components/Label";
import { trackEvent } from "@aptabase/react-native";

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("user@example.com"); // Pre-filled email
  const [password, setPassword] = useState("password123"); // Pre-filled password

  const handleChangeEmail = (text) => {
    setEmail(text);
    trackEvent("User Interaction", { action: "Email Field Interacted" });
  };

  const handleChangePassword = (text) => {
    setPassword(text);
    trackEvent("User Interaction", { action: "Password Field Interacted" });
  };

  const handleLoginPress = () => {
    trackEvent("User Interaction", { action: "Log in Attempted" });
    navigation.navigate("Home");
  };

  const handleNavigateSignUp = () => {
    trackEvent("User Interaction", { action: "Navigate to Sign Up" });
    navigation.navigate("SignUp");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View>
            <Header title="memreprise" />
          </View>
          <View style={styles.postPrompt}>
            <View style={styles.title}>
              <Header1 text="Log in" />
              <Header2 text="Please sign in to continue" />
            </View>

            <View style={styles.containerInput}>
              {/* <Text style={styles.label}>Email</Text> */}
              {/* <Label text="Email" /> */}
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={handleChangeEmail}
                placeholder="Enter your email"
              />

              {/* <Label text="Password" /> */}
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={handleChangePassword}
                secureTextEntry
                placeholder="Enter your password"
              />
            </View>

            <View style={styles.buttonContainer}>
              {/* <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.loginBtnTxt}>Loginn</Text>
              </Pressable> */}
              <PillPressable onPress={handleLoginPress} text="Log in" />
              {/* <View style={styles.buttonSpacer} /> */}
            </View>
            {/* <View style={styles.spacer} /> */}

            <View style={styles.bottomTextContainer}>
              <Text style={styles.signUpText}>Don't have an account?</Text>
              <Text style={styles.linkText} onPress={handleNavigateSignUp}>
                Sign up
              </Text>
            </View>
          </View>
          {/* <Text style={styles.oldPostsText}>Old posts</Text> */}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
    // width: windowWidth,
    // height: windowWidth * 0.98,
  },
  title: {
    alignItems: "center",
  },
  loginText: {
    fontWeight: "500",
    color: colors.white,
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30,
    alignSelf: "center",
  },
  descrText: {
    color: colors.white,
    marginTop: "2.5%",
    alignSelf: "center",
  },
  containerInput: {
    padding: 20,
  },
  label: {
    marginBottom: 5,
    color: colors.white,
  },
  input: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
    padding: 11,
    width: windowWidth - 100,
    borderWidth: 1,
    borderColor: colors.offWhite75,
    borderRadius: 4,
    color: colors.black,
    backgroundColor: colors.offWhite75,
    fontWeight: "bold",
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    color: colors.pink,
    marginLeft: 5,
  },
  postPrompt: {
    borderRadius: 15,
    padding: 50,
    alignItems: "center",
    justifyContent: "space-between",
    width: windowWidth * 0.9,
    height: windowWidth * 0.75,
    elevation: 5,
  },
  titleContainer: {
    alignItems: "center",
    width: "50%",
  },
  spacer: {
    height: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: "5%",
  },
  loginBtnTxt: {
    textAlign: "center",
    fontWeight: "500",
    // fontSize: 14,
    letterSpacing: -0.41,
    color: colors.white,
  },

  buttonSpacer: {
    width: 24,
  },
  signUpText: {
    fontSize: 14,
    color: colors.white,
  },
});

export default LoginScreen;
