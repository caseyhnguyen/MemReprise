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
    backgroundColor: colors.offWhite75,
    borderRadius: 16,
    margin: "5%",
    padding: "5%",
    alignItems: "center",
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  activitiesContainer: {
    paddingBottom: "12.5%",
    paddingHorizontal: "3%",
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  activityCard: {
    backgroundColor: colors.offWhite50,
    borderRadius: 16,
    padding: "4.5%",
    marginBottom: "4.5%",
  },
  activityHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "4.5%%",
  },
  activityNumber: {
    fontSize: 50,
    fontWeight: "bold",
    color: colors.primary, // Adjust with your primary color
    marginRight: "3%",
  },
  activityIcon: {
    width: "15%",
    height: "95%",
    marginRight: 10,
  },
  activityTitle: {
    fontSize: 25,
    fontWeight: "bold",
    flex: 1,
  },
  songsCount: {
    fontSize: 16,
  },
  songsContainer: {
    backgroundColor: colors.offWhite50,
    borderRadius: 16,
    padding: 16,
    shadowColor: colors.darkGray,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  songRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: "15%",
    paddingVertical: "5%",
  },
  songTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  songArtist: {
    fontSize: 18,
    color: colors.mediumGray,
  },
  songInfo: {
    flexDirection: "column",
    marginRight: "auto",
  },

  album: {
    width: 100,
    height: 100,
  },

  seeMore: {
    fontSize: 18,
    color: colors.primary,
    marginTop: "2.5%",
    alignSelf: "flex-end",
  },
});
