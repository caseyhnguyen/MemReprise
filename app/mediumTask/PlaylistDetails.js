import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { router, Link, useLocalSearchParams, Stack } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import { colors } from "../../assets/Themes/colors";
import { StatusBar } from "expo-status-bar";

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications

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

      <View style={{marginTop: "22.5%", flex:1, borderRadius: 15, alignSelf: "center", width: "95%", height: "80%", overflow: "hidden"}}>
        <WebView source={{ uri: url }} style={styles.main} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
