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
} from "react-native";
import images from "../assets/Images/images";
import { colors } from "../assets/Themes/colors";
import Header from "../components/Header";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { supabase } from "../utils/supabaseClient";
import PillPressable from "../components/PillPressable";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";

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

      alert("Sign up successful!");
      navigation.navigate("Tutorial", { userName: fullName });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View>
          <Header title="memreprise" />
        </View>
        <View style={styles.postPrompt}>
          {/* <View style={styles.spacer} /> */}

          <View>
            <Header1 text="Create account"/>
            <Header2 text="Please create an account to continue" />
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
            <PillPressable onPress={handleSignUp} text="Sign up">
            </PillPressable>

            {/* <View style={styles.buttonSpacer} /> */}
          </View>

          {/* <View style={styles.spacer} /> */}

          <View style={styles.bottomTextContainer}>
            <Text style={styles.signUpText}>Already have an account?</Text>
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate("Login")}
            >
              Log in
            </Text>
          </View>
        </View>
        {/* <Text style={styles.oldPostsText}>Old posts</Text> */}
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
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    textDecorationLine: "underline",
    color: colors.pink,
    fontSize: 14,
    marginLeft: 5,
  },
  descrText: {
    color: colors.white,
    marginTop: "2.5%",
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
  postPrompt: {
    borderRadius: 15,
    // padding: 50,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "10%", // Add padding at the top and bottom instead of using spacer Views
    paddingHorizontal: "5%", // Add some horizontal padding
    // width: windowWidth * 0.9,
    height: windowWidth * 0.7,
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
  loginBtnTxt: {
    textAlign: "center",
    fontWeight: "500",
    // fontSize: 14,
    letterSpacing: -0.41,
    color: colors.white,
  },
  signUpText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
  },
});

export default SignUpScreen;
