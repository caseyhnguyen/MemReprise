import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const postStyles = (dimensions) =>
  StyleSheet.create({
    outerContainer: {
      justifyContent: "flex-start",
      flexDirection: "column",
      backgroundColor: colors.darkGray,
      borderRadius: 10,
      width: dimensions.windowWidth * 0.9,
      // height: dimensions.rowWidth * 1.25,
      paddingVertical: 25
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
      paddingHorizontal: 30,
      paddingBottom: 50,
    },
    metaData: {
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
      gap: 15,
      color: colors.white,
    },

    info: {
      gap: 5,
      color: colors.white,
    },

    profilePic: {
      width: dimensions.windowWidth * 0.2,
      height: dimensions.windowWidth * 0.2,
      borderRadius: 200,
    },
    postContainer: {
      // alignItems: "flex-start",
      // flex: 1,
      // justifyContent: "space-between",
      // flexDirection: "row",
      // flexWrap: "wrap",
      paddingHorizontal: 15,
      width: "100%"
    },
    albumCover: {
      // width: dimensions.windowWidth * 0.5,
      width: dimensions.windowWidth * .78,
      height: dimensions.windowWidth * 0.78,
      // width: "100%",
      // height: "auto",
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.white,
      // paddingRight: 50,
    },
    artist: {
      fontSize: 16,
      color: colors.white,

    },

    caption: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingTop: "5%",
      paddingBottom: "5%",
      width: "100%",
      color: colors.white,
    },

    songInfo: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      // paddingLeft: "7.5%",
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
    time: {
      fontSize: 12,
      color: colors.white,
      // marginLeft: "auto", 
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
