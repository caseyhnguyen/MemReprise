import { Platform } from "react-native";

// ***** TODO: Fill in your constants here ***** //
const CLIENT_ID = "d80243faaa8e49278e824c2ce5971e8b";
const CLIENT_SECRET = "dd8697a7f8314f15b542e4f14ad99424";
const REDIRECT_URI = "exp://10.34.56.191:8081"; // TODO: Replace this with your own redirect URI
const ALBUM_ID = "2nLOHgzXzwFEpl62zAgCEC?si=Vy8vkAwuT-GJ_nEKsoo2DA"; // By default, this is the Weeknd's album "DAWN FM"
// ********************************************* //

const redirectUri = (uri) => {
  if (!uri) {
    const err = new Error(
      "No redirect URI provided.\nPlease provide a redirect URI in env.js.\n You can find the file in utils/env.js."
    );
    console.error(err);
    alert(err);
  }
  return Platform.OS === "web" ? "http://localhost:19006/" : uri;
};

const ENV = {
  CLIENT_ID: CLIENT_ID,
  CLIENT_SECRET: CLIENT_SECRET,
  SCOPES: [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private",
  ],
  REDIRECT_URI: redirectUri(REDIRECT_URI),
  ALBUM_ID: ALBUM_ID,
  SPOTIFY_API: {
    // Endpoints for auth & token flow
    DISCOVERY: {
      authorizationEndpoint: "https://accounts.spotify.com/authorize",
      tokenEndpoint: "https://accounts.spotify.com/api/token",
    },
    // ***** TODO: Fill this in ***** //
    RECENT_TRACKS_API:
      "https://api.spotify.com/v1/me/player/recently-played?limit=10",
    CURRENT_TRACK_API: "https://api.spotify.com/v1/me/player/currently-playing",
    // ***** TODO: Or fill this in ***** //
    ALBUM_TRACK_API_GETTER: (albumId) =>
      "https://api.spotify.com/v1/albums/2nLOHgzXzwFEpl62zAgCEC/tracks?offset=0&limit=20&locale=en-US,en;q=0.9",
  },
};

const getEnv = () => ENV;
export default getEnv;
// ^ use this type of exporting to ensure compliance with webpack and expo-web
