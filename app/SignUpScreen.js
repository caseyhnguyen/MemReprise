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
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import Header from "../components/Header";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { supabase } from "../utils/supabaseClient";

// Get the window dimensions
const windowWidth = Dimensions.get("window").width;

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("password123");
  const [confirmPassword, setConfirmPassword] = useState("password123");

  const handleSignUp = async () => {
    if (!fullName) {
      alert("Please enter your full name.");
      return;
    }

    try {
      const { error } = await supabase
        .from("users")
        .insert([{ user: fullName }]);

      if (error) {
        throw error;
      }

      alert('Sign up successful!');
      navigation.navigate("Tutorial, { userName: fullName }");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="memreprise" />
      </View>
      <View style={styles.postPrompt}>
        <View style={styles.spacer} />

        <View>
          <Text style={styles.loginText}>Create Account</Text>
        </View>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
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
          <Pressable style={styles.button} onPress={handleSignUp}>
            <Text style={styles.loginBtnTxt}>Sign Up</Text>
          </Pressable>

          <View style={styles.buttonSpacer} />
        </View>

        <View style={styles.spacer} />

        <View>
          <Text style={styles.signUpText}>
            Already have an account?{" "}
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.linkText}>Login</Text>
            </Pressable>
          </Text>
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
  },
  loginText: {
    fontWeight: "500",
    color: colors.white,
    fontSize: 30,
    alignItems: "flex-start",
    marginTop: -50,
  },
  linkText: {
    textDecorationLine: "underline",
    color: "#44AA99",
  },
  descrText: {
    color: colors.white,
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
  postPrompt: {
    borderRadius: 15,
    // padding: 50,
    alignItems: "center",
    justifyContent: "space-between",
    // width: windowWidth * 0.9,
    height: windowWidth * 0.7,
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
    width: "50%",
  },
  button: {
    borderRadius: 15,
    padding: 7,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#44AA99",
    shadowColor: colors.darkGray,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: "center",
  },
  loginBtnTxt: {
    textAlign: "center",
    fontWeight: "500",
    // fontSize: 14,
    letterSpacing: -0.41,
    color: colors.white,
  },

  signUpText: {
    fontSize: 14,
    color: colors.white,
  },
});

export default SignUpScreen;
