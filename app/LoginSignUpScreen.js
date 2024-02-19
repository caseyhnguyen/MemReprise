import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import Header from "../components/Header";
import PillPressable from "../components/PillPressable";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;

const LoginSignUpScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.postPrompt}>
          {/* <View style={styles.spacer} /> */}
          <View style={styles.titleContainer}>
            <Header1 text="memreprise"/>
            <Header2 text="Where music and memories meet" />
          </View>
          {/* <View style={styles.spacer} /> */}
          <View style={styles.buttonContainer}>
            <PillPressable
              onPress={() => navigation.navigate("Login")}
              text="Log in"
            />
            <PillPressable
              onPress={() => navigation.navigate("SignUp")}
              text="Sign up"
            />
            {/* <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.loginText}>Login</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.signUpText}>Sign Up</Text>
            </Pressable> */}
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth,
  },
  postPrompt: {
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
    paddingVertical: 20, // Or use a percentage of the screen height if you prefer
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  titleContainer: {
    alignItems: "center",
    width: "100%",
    marginBottom: "5%",
  },
  memrepriseTitle: {
    color: colors.white,
    fontSize: 38,
  },
  postASongText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
    letterSpacing: -0.41,
    color: colors.white,
    // marginTop: "2.5%",
  },
  spacer: {
    height: 16,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    textAlign: "center",
    marginVertical: -1,
    fontWeight: "500",
    fontSize: 16,
    color: colors.white,
  },
  signUpText: {
    textAlign: "center",
    marginVertical: -1,
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: -0.41,
    color: colors.white,
  },
  buttonSpacer: {
    height: 10,
  },
});

export default LoginSignUpScreen;
