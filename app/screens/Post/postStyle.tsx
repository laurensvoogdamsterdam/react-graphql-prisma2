import { StyleSheet } from "react-native";
import { appTheme } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  headerTitle: {
    fontWeight: "900",
    fontSize: 30,
  },
  screenWrapper: {
    flex: 1,
    position: "absolute",
  },
  backgroundStyle: {
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    bottom: "45%",
  },
  backButton: {
    padding: 5,
    paddingTop: 50,
    paddingLeft: 10,
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
