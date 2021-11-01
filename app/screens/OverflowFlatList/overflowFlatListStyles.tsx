import { StyleSheet } from "react-native";
import { appTheme } from "../../constants";

const styles = StyleSheet.create({
  flatList: {
    marginHorizontal: 2,
  },
  feedHeaderText: {
    paddingLeft: 6,
    paddingBottom: 6,
    fontSize: appTheme.fontSizes.TITLE,
    fontWeight: appTheme.fontWeights.BOLD,
  },
  container: {
    height: 400,
    paddingTop: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    // borderBottomStartRadius: 30,
    // borderBottomEndRadius: 30,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    // shadowRadius: 1,
    elevation: 1,
  },
  cardHeaderText: {
    fontSize: appTheme.fontSizes.TITLE,
    fontWeight: appTheme.fontWeights.BOLD,
  },
  cardHeaderBody: {
    fontSize: appTheme.fontSizes.BODY,
    fontWeight: appTheme.fontWeights.NORMAL,
  },
  cardHeader: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    justifyContent: "center",
  },
  cardImage: {
    width: 200,
    height: 300,
    borderRadius: 25,
  },
  cardContainer: {
    height: 100,
    marginHorizontal: 4,
  },
});

export default styles;
