import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import Header from "../components/Header";

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;

const LoginSignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.postPrompt}>
        <View style={styles.spacer} />
        <View style={styles.titleContainer}>
          <Text style={styles.memrepriseTitle}>
            memreprise
          </Text>
          <Text style={styles.postASongText}>
            Where Memories and Music Meet
          </Text>
        </View>
        <View style={styles.spacer} />
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
          <View style={styles.buttonSpacer} />
         <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.signUpText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
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
  memrepriseTitle: {
    color: colors.white,
    fontSize: 30
  },
  postASongText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 15,
    letterSpacing: -0.41,
    color: colors.white,
  },
  spacer: {
    height: 16,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 50,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#44AA99",
    color: colors.white, 
    shadowColor: colors.darkGray,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    width: 150,
    height: 50
  },
  loginText: {
    textAlign: "center",
    marginVertical: -1,
    fontWeight: "500",
    fontSize: 10,
    color: colors.white,
  },
  signUpText: {
    textAlign: "center",
    marginVertical: -1,
    fontWeight: "500",
    fontSize: 10,
    letterSpacing: -0.41,
    color: colors.white,
  },
  buttonSpacer: {
    height: 10,
  },
});

export default LoginSignUpScreen;
