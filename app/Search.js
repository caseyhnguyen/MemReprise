// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, TextInput, FlatList } from "react-native";

// const fakeDelay = (ms) => new Promise((res) => setTimeout(res, ms));

// const Search = () => {
//     const [search, setSearch] = useState("");
//     const [searchedSongs, setSearchedSongs] = useState([]);
//     const [timeoutToClear, setTimeoutToClear] = useState();

//     const fakeDelay = (ms) => new Promise((res) => setTimeout(res, ms));

//     useEffect(() => {
//       return () => {
//         clearTimeout(timeoutToClear);
//       };
//     }, []);

//     const debounce = (callback, alwaysCall, ms) => {
//       return (...args) => {
//         alwaysCall(...args);
//         clearTimeout(timeoutToClear);
//         setTimeoutToClear(
//           setTimeout(() => {
//             callback(...args);
//           }, ms)
//         );
//       };
//     };

//     // Include your search functions here (e.g., searchSpotifyItems, searchSongs, etc.)
//     const setSearchTextAlways = (text) => {
//         setSearch(text);
//       };

//       const SPOTIFY_SEARCH_ENDPOINT = "https://api.spotify.com/v1/search";

//       const searchSpotifyItems = async (
//         searchQuery,
//         types,
//         market,
//         limit,
//         offset,
//         includeExternal
//       ) => {
//         try {
//           const params = new URLSearchParams({
//             q: searchQuery,
//             type: types.join(","),
//             market,
//             limit,
//             offset,
//             include_external: includeExternal ? "audio" : undefined,
//           });

//           const response = await fetch(`${SPOTIFY_SEARCH_ENDPOINT}?${params}`, {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           });

//           if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(
//               `Spotify API responded with ${response.status}: ${errorData.error.message}`
//             );
//           }

//           return response.json();
//         } catch (error) {
//           console.error("Error searching Spotify:", error);
//           throw error;
//         }
//       };

//       const searchSongs = async (text) => {
//         setSearch(text);
//         if (!text.trim()) {
//           // If the search text is empty or only whitespace, don't attempt a search
//           setSearchedSongs([]);
//           return;
//         }
//         try {
//           await fakeDelay(150);
//           const response = await searchSpotifyItems(
//             text,
//             ["track"],
//             "US",
//             20,
//             0,
//             true
//           );
//           setSearchedSongs(response.tracks.items);
//         } catch (error) {
//           console.error("Error occurred while searching for songs:", error);
//         }
//       };

//       const debouncedSearchSongs = debounce(searchSongs, setSearchTextAlways, 500);

//     // Render your screen with the search bar and results
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search for songs"
//           value={search}
//           onChangeText={(text) => /* call your debounced search function */ }
//         />
//         <FlatList
//           data={searchedSongs}
//           // renderItem and other FlatList props
//         />
//       </View>
//     );
//   };

//   const styles = StyleSheet.create({
    // searchContainer: {
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     marginHorizontal: 20,
    //     paddingVertical: 10,
    //   },
    //   searchInput: {
    //     flex: 1,
    //     paddingHorizontal: 10,
    //     paddingVertical: 10,
    //     backgroundColor: colors.white,
    //     color: colors.black,
    //     borderRadius: 5,
    //   },
//   });

//   export default Search;
