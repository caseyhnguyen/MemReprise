import getEnv from "./env";
import { useState, useEffect } from "react";
import {
  ResponseType,
  useAuthRequest,
  makeRedirectUri,
} from "expo-auth-session";

import * as WebBrowser from "expo-web-browser";

const {
  REDIRECT_URI,
  SCOPES,
  CLIENT_ID,
  ALBUM_ID,
  SPOTIFY_API: { DISCOVERY },
} = getEnv();

// needed so that the browser closes the modal after auth token
WebBrowser.maybeCompleteAuthSession();

const useSpotifyAuth = () => {
  const [token, setToken] = useState(null);
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      scopes: SCOPES,
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: REDIRECT_URI,
    },
    DISCOVERY
  );

  // TODO: Figure out how to set token properly!
  useEffect(() => {
    if (response?.type === "success" && response.params.access_token) {
      setToken(response.params.access_token);
    } else if (response?.type === "error") {
      console.error("Authentication error:", response.error);
    }
  }, [response]);

  const getSpotifyAuth = () => {
    if (request) {
      promptAsync().catch((error) => {
        console.error("Authentication prompt error:", error);
      });
    } else {
      console.error("Authentication request not generated!");
    }
  };

  return { token, getSpotifyAuth };
};

export default useSpotifyAuth;
