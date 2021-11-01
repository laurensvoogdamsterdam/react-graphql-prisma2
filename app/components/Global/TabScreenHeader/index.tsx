import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { combineData } from "../../../utils/dataHelper";
import { appTheme } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../../contexts";
import { getScreenParent } from "../../../utils/NavigationHelper";
import { navigateToNestedRoute } from "../../../navigation/RootNavigation";
import { Avatar } from "react-native-elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function TabScreenHeader({
  leftComponent,
  isSearchBtnVisible = false,
  isMoreBtnVisible = false,
  isChatBtnVisible = false,
  isCoffeeVisible = false,
  isCalendarVisible = false,
  showAvatar = false,
  avatar = "",
}) {
  const [data, setData] = useState({ isSearchFieldVisible: false });
  const { state, dispatch } = useContext(AuthContext);
  const insets = useSafeAreaInsets();

  const navigation = useNavigation();

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  const toggleSearchField = () => {
    let { isSearchFieldVisible } = data;
    isSearchFieldVisible = !isSearchFieldVisible;
    setData(combineData(data, { isSearchFieldVisible }));
  };

  return (
    <View style={{ marginTop: insets.top, ...styles.headerContainer }}>
      {leftComponent()}
      <View style={styles.headerRightContainer}>
        {isSearchBtnVisible ? (
          <View style={styles.searchContainer}>
            {data?.isSearchFieldVisible ? (
              <View style={styles.searchInputWrapper}>
                <TextInput
                  placeholder='Search'
                  style={styles.searchInputField}
                  placeholderTextColor={appTheme.INACTIVE_COLOR}
                />
                <TouchableOpacity onPress={() => toggleSearchField()}>
                  <MaterialIcons
                    name='close'
                    size={20}
                    color={appTheme.INACTIVE_COLOR}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity onPress={() => toggleSearchField()}>
                <Feather name='search' size={22} color='#000' />
              </TouchableOpacity>
            )}
          </View>
        ) : null}
        {isMoreBtnVisible ? (
          <Menu>
            <MenuTrigger>
              <Feather name='more-vertical' size={22} color='#000' />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption>
                <Text style={styles.menuOptionText}>Settings</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => dispatch({ type: "logout", payload: null })}>
                <Text style={styles.menuOptionText}>Log out</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        ) : null}

        {isCoffeeVisible ? (
          <TouchableOpacity onPress={() => toggleSearchField()}>
            <Feather colo={appTheme.PRIMARY_COLOR} name='coffee' size={22} />
          </TouchableOpacity>
        ) : null}
        {isCalendarVisible ? (
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => handleNavigation("Calendar")}>
            <Feather style={{ marginLeft: 10 }} name='calendar' size={22} />
          </TouchableOpacity>
        ) : null}
        {isChatBtnVisible ? (
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => handleNavigation("ChatList")}>
            <Feather style={{ marginLeft: 10 }} name='send' size={22} />
          </TouchableOpacity>
        ) : null}
        {showAvatar ? (
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => handleNavigation("ProfileSide")}>
            <Avatar
              // size={"medium"}
              rounded
              source={{
                uri: avatar,
              }}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  headerRightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    marginRight: 15,
    height: 35,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  menuOptionText: {
    fontSize: 16,
    paddingLeft: 7,
    paddingVertical: 3,
  },
  searchInputWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    width: 170,
    paddingHorizontal: 7,
    height: 35,
  },
  searchInputField: {
    fontSize: 15,
    height: 40,
  },
});
