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

      <View style={{marginTop:75, flex:1, borderRadius: 15, alignSelf: "center", width: "95%", height: "80%", overflow: "hidden"}}>
        {/* <Pressable>
          <Text style={{color: "white"}}>Back</Text>
        </Pressable> */}
        <WebView source={{ uri: url }} style={styles.main} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    // marginTop: 75,
    flex: 1,
  },
});
