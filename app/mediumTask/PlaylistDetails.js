import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router, Link, useLocalSearchParams, Stack } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import { colors } from "../../assets/Themes/colors";
import { StatusBar } from "expo-status-bar";

export default function PlaylistDetails() {
  const route = useRoute();
  const url = route.params.url;
  console.log("Playlist URL:", url); // To debug

  return (
    <>
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.white,
          headerTitle: "Playlist Details",
          headerTitleStyle: { color: colors.white, fontSize: 20 },
        }}
      />
      <WebView source={{ uri: url }} style={styles.main} />
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
