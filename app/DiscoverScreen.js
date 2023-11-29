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

// Get the window width
const windowWidth = Dimensions.get("window").width;

const DiscoverScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.buttonText}>Discover</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default DiscoverScreen;
