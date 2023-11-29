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

import {styles} from "../assets/Themes/default_style";
// Get the window width
const windowWidth = Dimensions.get("window").width;

const FeedScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Feed</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("DiscoverScreen")}>
        <Text style={styles.buttonText}>Discover</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default FeedScreen;
