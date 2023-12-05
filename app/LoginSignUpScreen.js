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
      {/* <Text style={styles.oldPostsText}>Old posts</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
    width: windowWidth,
    // height: windowWidth * 0.5,
  },
  postPrompt: {
    borderRadius: 15,
    // padding: 50,
    alignItems: "center",
    // justifyContent: "space-between",
    // backgroundColor: colors.offWhite,
    // width: windowWidth,
    // height: windowWidth * 0.25,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // backgroundColor: colors.offWhite50,
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
    // flexDirection: "col",
    // flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    // width: "100%",
  },
  button: {
    borderRadius: 15,
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
    fontWeight: "500",
    fontSize: 10,
    letterSpacing: -0.41,
    color: colors.white,
  },
  signUpText: {
    textAlign: "center",
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
