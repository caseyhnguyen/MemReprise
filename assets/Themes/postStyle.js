import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const postStyles = (dimensions) =>
  StyleSheet.create({
    outerContainer: {
      justifyContent: "flex-start",
      flexDirection: "column",
      backgroundColor: colors.offWhite50,
      borderRadius: 10,
      width: dimensions.windowWidth * 0.9,
      height: dimensions.rowWidth * 1.25,
    },

    expandedOuterContainer: {
      justifyContent: "flex-start",
      flexDirection: "column",
      backgroundColor: colors.offWhite50,
      borderRadius: 10,
      width: "95%",
      height: "90%",
    },
    captionContainer: {
      paddingLeft: 30,
      paddingBottom: 50,
    },
    metaData: {
      margin: 10,
      paddingTop: 10,
      paddingLeft: 5,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      width: "90%",
    },
    time: { marginLeft: "auto" },

    profilePic: {
      width: dimensions.windowWidth * 0.15,
      height: dimensions.windowWidth * 0.15,
      borderRadius: (dimensions.windowWidth * 0.15) / 2,
    },
    postContainer: {
      alignItems: "flex-start",
      justifyContent: "space-between",
      flexDirection: "row",
      width: "90%",
      gap: "5%",
      shadowColor: colors.darkGray,
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    albumCover: {
      width: dimensions.windowWidth * 0.5,
      height: dimensions.windowWidth * 0.5,
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.black,
    },
    artist: {
      fontSize: 12,
      color: colors.black,
    },

    caption: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingTop: "5%",
      paddingRight: "5%",
      paddingBottom: "5%",
    },

    songInfo: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingLeft: "7.5%",
      paddingTop: "5%",
      width: "75%",
    },
    selectionGrid: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: dimensions.totalGapSize,
    },
    postInProgress: {},
    boldText: {
      fontSize: 15,
      fontWeight: "bold",
      alignContent: "center",
    },
    smallImage: {
      margin: 5,
      width: dimensions.windowWidth * 0.175,
      height: dimensions.windowWidth * 0.175,
    },
    smallText: {
      fontSize: 12,
      color: colors.darkGray,
      paddingBottom: "2%",
    },
    smallSelectionCol: {
      alignItems: "center",
      flexDirection: "column",
    },
    subHeader: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.offWhite,
      paddingBottom: "2.5%",
    },
    input: {
      height: 40,
      marginTop: 12,
      marginBottom: 50,
      borderTopColor: colors.darkGray,
      paddingLeft: 20,
      width: "70%",
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2.5%",
      paddingTop: "10.5%",
    },
    postButton: {
      backgroundColor: colors.offWhite75,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      width: "20%",
      marginTop: 10,
      marginBottom: 10,
    },
    postButtonText: {
      color: colors.darkGray,
      fontSize: 16,
      fontWeight: "bold",
      padding: 5,
    },
  });
