import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts";
import { styles } from "./tabStyles";
import shortid from "shortid";

export const TabList: any = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { searchTab, tabs } = state;
  return (
    <View style={styles.projectsTabs}>
      {tabs?.map((tab, index) => (
        <TouchableOpacity
          style={[
            styles.projectTab,
            searchTab === index ? styles.activeProjectTab : null,
          ]}
          onPress={() => dispatch({ type: "setSearchTab", payload: index })}
          key={shortid.generate()}>
          <Text
            style={[
              styles.projectTabText,
              searchTab === index
                ? styles.activeProjectTabText
                : styles.inActiveProjectTabText,
            ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
