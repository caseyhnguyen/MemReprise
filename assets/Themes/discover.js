import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const discoverStyles = StyleSheet.create({
  container: {
    flex: 1,
    top: 75,
    // backgroundColor: colors.offWhite50,
  },
  scrollView: {
    width: "100%",
  },
  headerContainer: {
    backgroundColor: colors.darkGray,
    borderRadius: 16,
    margin: "5%",
    padding: "5%",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    
  },
  activitiesContainer: {
    paddingBottom: "12.5%",
    paddingHorizontal: "3%",
  },
  activityCard: {
    backgroundColor: colors.darkGray,
    borderRadius: 16,
    padding: "4.5%",
    marginBottom: "4.5%",
  },
  activityHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "4.5%",
  },
  activityNumber: {
    fontSize: 50,
    fontWeight: "bold",
    color: colors.pink,
    marginRight: "3%",
  },
  activityIcon: {
    width: "15%",
    height: "90%",
    marginRight: 10,
  },
  activityTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.white,
    textTransform: "uppercase",
    flex: 1,
  },
  songsCount: {
    color: colors.white,
    fontSize: 15,
  },
  songsContainer: {
    backgroundColor: colors.black,
    borderRadius: 16,
    padding: 16,
  },
  songRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: "15%",
    paddingVertical: "5%",
  },
  songTitle: {
    fontSize: 18,
    color: colors.white,
    fontWeight: "bold",
  },
  songArtist: {
    color: colors.white,
    fontSize: 16,
  },
  songInfo: {
    flexDirection: "column",
    marginRight: "auto",
  },

  album: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },

  seeMore: {
    fontSize: 18,
    color: colors.primary,
    marginTop: "2.5%",
    alignSelf: "flex-end",
  },
});
