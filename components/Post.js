import React, { useContext, useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import images from "../assets/Images/images";
import { postStyles as styling } from "../assets/Themes/postStyle";
import { PostContext } from "../utils/PostContext";

const windowWidth = Dimensions.get("window").width;
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const rowWidth = windowWidth * 0.8 + totalGapSize;

const Post = ({
  songData,
  caption,
  emotionIconSrc,
  activityIconSrc,
  themeIconSrc,
  themeIconLabel,
  emotionIconLabel,
  activityIconLabel,
  // ... other props ...
}) => {
  const styles = styling({
    windowWidth,
    gap,
    totalGapSize,
    itemPerRow,
    rowWidth,
  });
  const navigation = useNavigation();
  const { setPostMade } = useContext(PostContext);

  const onPress = () => {
    navigation.navigate("PostExpandScreen", {
      songData,
      caption,
      themeIconSrc,
      emotionIconSrc,
      activityIconSrc,
      themeIconLabel,
      emotionIconLabel,
      activityIconLabel,
    });
  };

  return (
    <View style={styles.outerContainer}>
      {songData && songData.title && (
        <Pressable onPress={onPress}>
          <View style={styles.metaData}>
            <Image
              source={{
                uri: songData.imageUrl || images.defaultProfilePic.pic,
              }}
              style={styles.profilePic}
            />
            <View>
              <Text style={styles.title}>Display Name</Text>
              <Text style={styles.artist}>Username</Text>
            </View>
            <View style={styles.time}>
              <Text style={styles.smallText}>10:21 AM • 12/01/23</Text>
            </View>
          </View>

          <View style={styles.postContainer}>
            <View style={styles.songInfo}>
              <Image
                source={{
                  uri: songData.imageUrl || images.defaultAlbumCover.pic,
                }}
                style={styles.albumCover}
              />
              <Text style={styles.title} numberOfLines={2}>
                {songData.title}
              </Text>
              <Text style={styles.artist} numberOfLines={1}>
                {songData.artists?.join(", ") || "Unknown Artist"}
              </Text>
              <Text style={styles.caption}>{caption}</Text>
            </View>

            <View style={styles.smallSelectionCol}>
              <Image source={themeIconSrc} style={styles.smallImage} />
              <Text style={styles.smallText}>{themeIconLabel}</Text>
              <Image source={emotionIconSrc} style={styles.smallImage} />
              <Text style={styles.smallText}>{emotionIconLabel}</Text>
              <Image source={activityIconSrc} style={styles.smallImage} />
              <Text style={styles.smallText}>{activityIconLabel}</Text>
            </View>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default Post;

// const windowWidth = Dimensions.get("window").width;
// // dimensions for selectionGrid styling
// const gap = 12;
// const itemPerRow = 2;
// const totalGapSize = (itemPerRow - 1) * gap;
// const rowWidth = windowWidth * 0.8 + totalGapSize;

// const Post = ({
//   songData,
//   caption,
//   emotionIconSrc,
//   activityIconSrc,
//   themeIconSrc,
//   // ... other props ...
// }) => {
//   console.log("Post props:", {
//     songData,
//     caption,
//     emotionIconSrc,
//     activityIconSrc,
//     themeIconSrc,
//   });

//   const styles = styling(dimensions);
//   const navigation = useNavigation();
//   const { setPostMade } = useContext(PostContext);

//   const onPress = () => {
//     navigation.navigate("PostExpandScreen", { songData });
//   };

//   return (
//     <View style={styles.outerContainer}>
//       {songData && songData.title && (
//         <Pressable onPress={onPress}>
//           <View style={styles.metaData}>
//             <Image
//               source={{ uri: imageUrl || songData.imageUrl }}
//               style={styles.profilePic}
//             />
//             <View>
//               <Text style={styles.title}>{songData.title}</Text>
//               <Text style={styles.artist}>{artistNames}</Text>
//             </View>
//             <View style={styles.time}>
//               <Text>{playedAt}</Text>
//             </View>
//           </View>

//           <View style={styles.postContainer}>
//             <Image
//               source={{ uri: imageUrl || songData.imageUrl }}
//               style={styles.albumCover}
//             />
//             <Text style={styles.title}>{songData.title}</Text>
//             <Text style={styles.artist}>{artistNames}</Text>
//             <Text style={styles.caption}>{caption}</Text>

//             <View style={styles.iconContainer}>
//               <Image source={getIconSource(themeIconId)} style={styles.icon} />
//               <Text style={styles.iconLabel}>{themeIconText}</Text>
//               <Image
//                 source={getIconSource(emotionIconId)}
//                 style={styles.icon}
//               />
//               <Text style={styles.iconLabel}>{emotionIconText}</Text>
//               <Image
//                 source={getIconSource(activityIconId)}
//                 style={styles.icon}
//               />
//               <Text style={styles.iconLabel}>{activityIconText}</Text>
//             </View>
//           </View>
//         </Pressable>
//       )}
//     </View>
//   );
// };

// export default Post;

//   return (
//     <View style={styles.outerContainer}>
//       {songData && songData.title && (
//         <Pressable onPress={onPress}>
//           <View style={styles.metaData}>
//             <Image
//               source={{ uri: songData.imageUrl }}
//               style={styles.profilePic}
//             />

//             <View name="userTag">
//               <Text style={styles.title}>Display Name</Text>
//               <Text style={styles.artist}>Username</Text>
//             </View>

//             <View style={styles.time}>
//               <Text name="time" style={styles.smallText}>
//                 {playedAt}
//               </Text>
//             </View>
//           </View>

//           <View style={styles.postContainer}>
//             <View style={styles.songInfo}>
//               <Image
//                 source={{ uri: songData.imageUrl }}
//                 style={styles.albumCover}
//               />

//               <Text style={styles.title} numberOfLines={2}>
//                 {songData.title}
//               </Text>
//               <Text style={styles.artist} numberOfLines={1}>
//                 {Array.isArray(songData.artists)
//                   ? songData.artists.join(", ")
//                   : songData.artists}
//               </Text>
//               <Text style={styles.caption}>{caption}</Text>
//             </View>

//             <View style={styles.smallSelectionCol}>
//               {themeIconId && (
//                 <>
//                   <Image
//                     source={getIconSource(themeIconId)}
//                     style={styles.smallImage}
//                   />
//                   <Text style={styles.smallText}>{/* Theme Icon Label */}</Text>
//                 </>
//               )}
//               {emotionIconId && (
//                 <>
//                   <Image
//                     source={getIconSource(emotionIconId)}
//                     style={styles.smallImage}
//                   />
//                   <Text style={styles.smallText}>
//                     {/* Emotion Icon Label */}
//                   </Text>
//                 </>
//               )}
//               {activityIconId && (
//                 <>
//                   <Image
//                     source={getIconSource(activityIconId)}
//                     style={styles.smallImage}
//                   />
//                   <Text style={styles.smallText}>
//                     {/* Activity Icon Label */}
//                   </Text>
//                 </>
//               )}
//             </View>
//           </View>
//         </Pressable>
//       )}
//     </View>
//   );
// };

//   return (
//     <View style={styles.outerContainer}>
//       <Text>Test Post</Text>
//       <Text>{caption}</Text>
//       <Text>{playedAt}</Text>
//       {/* ... other simplified test renderings ... */}
//     </View>
//   );
// };

// export default Post;
