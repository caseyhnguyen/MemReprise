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

import { styles } from "../assets/Themes/default_style";

// Get the window width
const windowWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Tracks")} // Updated route name
      >
        <Text style={styles.buttonText}>Post</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;
