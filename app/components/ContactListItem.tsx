import * as React from "react";
import {
  Animated,
  StyleSheet,
  Platform,
  UIManager,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  View,
  LayoutAnimation,
} from "react-native";
import Constants from "expo-constants";
const { width } = Dimensions.get("window");

import SegmentedControl from "@react-native-community/segmented-control";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const SIZE = 36;
const SPACING = 12;
const HEADER_HEIGHT = 60 + Constants.statusBarHeight;
const threshold = HEADER_HEIGHT;

const ContactListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.avatar }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text
          style={{ ...styles.name, color: item.missedCall ? "red" : "#222" }}>
          {item.name}
        </Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>
      <Text>{item.date.fromNow()}</Text>
    </View>
  );
};

export default ContactListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: SPACING,
    alignItems: "center",
    paddingBottom: SPACING,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: SPACING / 2,
  },
  phone: { fontSize: 12, color: "#333" },
  image: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE,
    marginLeft: -SIZE - SPACING,
    marginRight: SPACING,
  },
});
