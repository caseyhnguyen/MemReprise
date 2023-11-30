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
import { styles } from "../assets/Themes/default_style";

const ThemeQScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Theme Questions</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("PostSummaryScreen")} // Jump to PostSummaryScreen
      >
        <Text style={styles.buttonText}>
          Jump to Post Summary (Testing Purposes)
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ThemeQScreen;
