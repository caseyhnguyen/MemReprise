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

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("user@example.com"); // Pre-filled email
  const [password, setPassword] = useState("password123"); // Pre-filled password

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
              <Text style={styles.loginText}>Log In</Text>
              <Text style={styles.descrText}>Please sign in to continue</Text>
            </View>

            <View style={styles.containerInput}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Enter your email"
              />

              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                placeholder="Enter your password"
              />
            </View>

            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.loginBtnTxt}>Login</Text>
              </Pressable>
              {/* <View style={styles.buttonSpacer} /> */}
            </View>
            {/* <View style={styles.spacer} /> */}

            <View style={styles.bottomTextContainer}>
              <Text style={styles.signUpText}>Don't have an account?</Text>
              <Text
                style={styles.linkText}
                onPress={() => navigation.navigate("SignUp")}
              >
                Sign Up
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
    height: 40,
    borderColor: "gray",
    borderRadius: 15,
    marginBottom: 20,
    padding: 10,
    backgroundColor: colors.offWhite50,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: windowWidth - 100,
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    textDecorationLine: "underline",
    color: "#44AA99",
    marginLeft: 5,
  },
  postPrompt: {
    borderRadius: 15,
    padding: 50,
    alignItems: "center",
    justifyContent: "space-between",
    width: windowWidth * 0.9,
    height: windowWidth * 0.75,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
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
  button: {
    borderRadius: 15,
    padding: 7,
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#44AA99",
    shadowColor: colors.darkGray,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
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
