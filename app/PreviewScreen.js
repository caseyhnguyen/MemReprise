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
import { useLocalSearchParams, Stack } from "expo-router";
import { WebView } from "react-native-webview";
import { colors } from "../assets/Themes/colors";
import { StatusBar } from "expo-status-bar";

export default function Page() {
  const params = useLocalSearchParams();
  console.log("preview URL:", params.url);

  return (
    <>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.white,
          headerTitle: "Song Preview",
          headerTitleStyle: { color: colors.white, fontSize: 20 },
        }}
      />
      <WebView source={{ uri: params.url }} style={styles.main} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
});
