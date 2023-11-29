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

const DiscoverScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Discover</Text>
    </SafeAreaView>
  );
};

export default DiscoverScreen;
