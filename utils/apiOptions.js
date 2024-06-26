import axios from "axios";
import getEnv from "./env";

const {
  SPOTIFY_API: { RECENT_TRACKS_API, CURRENT_TRACK_API, ALBUM_TRACK_API_GETTER },
} = getEnv();

const ERROR_ALERT = new Error(
  "Oh no! Something went wrong; probably a malformed request or a network error.\nCheck console for more details."
);

// Formatting function for the currently playing track
export const formatCurrentTrack = (data) => {
  if (!data || !data.item) {
    // Handle the case where no track is currently playing
    return null;
  }

  const track = data.item;

  // Format the artists array
  const artists = track.artists.map((artist) => artist.name);

  // Get the album image URL, preferring the first image if available
  const imageUrl =
    track.album.images.length > 0 ? track.album.images[0].url : null;

  // Format the track details
  return {
    songTitle: track.name,
    songArtists: artists,
    albumName: track.album.name,
    imageUrl: imageUrl,
    duration: track.duration_ms,
    externalUrl: track.external_urls.spotify,
    previewUrl: track.preview_url,
    isPlaying: data.is_playing,
    progressMs: data.progress_ms,
    deviceName: data.device ? data.device.name : null,
  };
};

const formatter = (data) => {
  // Determine if the data is an array or a single object
  const items = Array.isArray(data) ? data : [data.item];

  return items
    .map((item) => {
      if (!item) return null; // Skip if the item is null

      // Extract track details, considering both direct and nested track structures
      const track = item.track || item;

      // Format the artists
      const artists = track.artists.map((artist) => artist.name).join(", ");

      // Extract album information
      const album = track.album || {};

      return {
        songTitle: track.name,
        songArtists: artists,
        albumName: album.name,
        imageUrl:
          album.images && album.images.length > 0 ? album.images[0].url : null,
        duration: track.duration_ms,
        externalUrl: track.external_urls.spotify,
        previewUrl: track.preview_url,
        played_at: item.played_at,
      };
    })
    .filter((item) => item !== null); // Filter out null values
};

/* Fetches data from the given endpoint URL with the access token provided. */
const fetcher = async (url, token) => {
  try {
    return await axios(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

/* Fetches your recent tracks from the Spotify API.
 * Make sure that RECENT_TRACKS_API is set correctly in env.js */
export const getMyRecentTracks = async (token) => {
  try {
    let res = await fetcher(RECENT_TRACKS_API, token);

    return formatter(res.data?.items);
  } catch (e) {
    console.error(e);
    alert(ERROR_ALERT);
    return null;
  }
};

/* Fetches the currently playing track from the Spotify API.
 * Make sure that CURRENT_TRACK_API is set correctly in env.js */
export const getMyCurrentTrack = async (token) => {
  try {
    let res = await fetcher(CURRENT_TRACK_API, token);
    // console.log("hi. this is from api options");
    // console.log(res.data);
    // Process and format the response data
    return formatCurrentTrack(res.data);
  } catch (e) {
    console.error(e);
    alert(ERROR_ALERT);
    return null;
  }
};

/* Fetches the currently playing track from the Spotify API.
 * Make sure that CURRENT_TRACK_API is set correctly in env.js */
export const getTrack = async (url, token) => {
  try {
    let res = await fetcher(url, token);
    console.log("hi from get Track");
    console.log(res.data);
    // Process and format the response data
    return formatCurrentTrack(res.data);
  } catch (e) {
    console.error(e);
    alert(ERROR_ALERT);
    return null;
  }
};

/* Fetches the given album from the Spotify API.
 * Make sure that ALBUM_TRACK_API_GETTER is set correctly in env.js */
export const getAlbumTracks = async (albumId, token) => {
  try {
    const res = await fetcher(ALBUM_TRACK_API_GETTER(albumId), token);
    const transformedResponse = res.data?.tracks?.items?.map((item) => {
      item.album = { images: res.data?.images, name: res.data?.name };
      return item;
    });
    return formatter(transformedResponse);
  } catch (e) {
    console.error(e);
    alert(ERROR_ALERT);
    return null;
  }
};

const PLAYLIST_API_GETTER = (playlistId) =>
  `https://api.spotify.com/v1/playlists/${playlistId}`;

// Function to format playlist data
const formatPlaylistData = (data) => {
  if (!data) {
    console.log("No data received in formatPlaylistData"); // Log when no data is received
    return null;
  }

  const formattedTracks = data.tracks.items.map((item) => {
    const track = item.track;

    return {
      addedAt: item.added_at,
      addedBy: item.added_by.id,
      trackTitle: track.name,
      trackArtists: track.artists.map((artist) => artist.name).join(", "),
      albumName: track.album.name,
      albumImageUrl:
        track.album.images.length > 0 ? track.album.images[0].url : null,
      duration: track.duration_ms,
      externalUrl: track.external_urls.spotify,
      previewUrl: track.preview_url,
    };
  });

  return {
    playlistName: data.name,
    description: data.description,
    externalUrl: data.external_urls.spotify,
    imageUrl: data.images.length > 0 ? data.images[0].url : null,
    owner: data.owner.display_name,
    public: data.public,
    totalTracks: data.tracks.total,
    tracks: formattedTracks,
  };
};

export const getPlaylist = async (playlistId, token) => {
  try {
    const response = await fetch(PLAYLIST_API_GETTER(playlistId), {
      headers: { Authorization: `Bearer ${token}` },
    });
    const resData = await response.json();

    return formatPlaylistData(resData);
  } catch (e) {
    console.error("Error fetching playlist:", e); // Log any errors
    alert("Error fetching playlist data");
    return null;
  }
};
