import { StyleSheet } from "react-native";
import { appTheme } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  listItemSmallText: {
    fontWeight: appTheme.fontWeights.THIN,
    marginLeft: 2,
    fontSize: appTheme.fontSizes.SMALL,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  listItemBodyText: {
    fontWeight: appTheme.fontWeights.NORMAL,
    fontSize: appTheme.fontSizes.BODY,
  },
  flatListRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 2,
    paddingVertical: 8,
  },
  listItemBodyTitle: {
    fontWeight: appTheme.fontWeights.BOLD,
    fontSize: appTheme.fontSizes.BODY,
  },
  listItemRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  headerLeftText: {
    color: "#000",
    marginRight: 5,
    fontWeight: "900",
    fontSize: appTheme.fontSizes.HEADER,
  },
  contentBody: {
    paddingHorizontal: 16,
    // paddingTop: 30,
  },
  singleMemberPhoto: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  statisticsSection: {
    paddingTop: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 30,
  },
  statisticsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  listItemImage: {
    marginRight: 20,
  },
  statisticsContent: {
    width: "45%",
    borderRadius: 15,
    marginRight: 10,
    padding: 15,
    marginBottom: 15,
  },
  statisticsIcon: {
    marginLeft: "auto",
  },
  statisticsCounter: {
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
  },
  statisticsValue: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  statisticsTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  tasksSection: {
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  tasksHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  tasksRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  tasksLeftText: {
    marginRight: 7,
    fontWeight: "bold",
    fontSize: 15,
  },
  plusBtnContainer: {
    backgroundColor: appTheme.COLOR1,
    height: 25,
    width: 25,
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tasksRightText: {
    marginRight: 7,
    fontWeight: "bold",
    fontSize: 15,
    color: appTheme.INACTIVE_COLOR,
  },
  tasksBody: {
    height: 220,
  },
  tasksList: {
    marginBottom: 50,
  },
  projectsBody: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  projectsTabs: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 3,
    borderRadius: 7,
    marginBottom: 30,
  },
  projectTab: {
    width: "30%",
    borderRadius: 7,
  },
  activeProjectTab: {
    backgroundColor: appTheme.PRIMARY_COLOR,
  },
  projectTabText: { fontSize: 16, paddingVertical: 7, textAlign: "center" },
  activeProjectTabText: {
    color: "#fff",
  },
  inActiveProjectTabText: {
    color: appTheme.PRIMARY_COLOR,
  },
});

export default styles;
