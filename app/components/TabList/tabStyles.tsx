import React from "react";
import { StyleSheet } from "react-native";
import { appTheme } from "../../constants";

export const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
  pillText: {
    fontWeight: "300",
    fontSize: 14,
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
    justifyContent: "space-around",
    paddingHorizontal: 16,
    borderRadius: 7,
    marginBottom: 5,
  },
  projectTab: {
    // width: "30%",
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  activeProjectTab: {
    backgroundColor: appTheme.PRIMARY_COLOR,
  },
  projectTabText: { fontSize: 16, paddingVertical: 7, textAlign: "center" },
  activeProjectTabText: {
    color: "#fff",
    fontSize: appTheme.fontSizes.SMALL,
  },
  inActiveProjectTabText: {
    color: appTheme.PRIMARY_COLOR,
    fontSize: appTheme.fontSizes.SMALL,
  },
});
