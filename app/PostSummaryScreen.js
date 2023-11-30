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

const PostSummaryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Post Summary</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("FeedScreen")}
      >
        <Text style={styles.buttonText}>Feed</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PostSummaryScreen;
