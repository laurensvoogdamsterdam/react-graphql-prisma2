import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import {
  Feed,
  Calendar,
  Reports,
  Posts,
  Tasks,
  Onboarding,
  Login,
  Register,
  Profile,
  Chat,
  ChatOverview,
  Post,
} from "../screens";
import { appTheme } from "../constants";
import { combineData } from "../utils/dataHelper";
import { AuthContext } from "../contexts";
import { navigationRef } from "./RootNavigation";
import { ChatList } from "../screens/ChatList";
import { ProfileSide } from "../screens/ProfileSide";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function CustomTabBar(props) {
  const { state, dispatch } = useContext(AuthContext);
  const [data, setData] = useState({ activeNavTab: "Feed" });

  const handleNavigation = (route) => {
    setData(combineData(data, { activeNavTab: route }));
    props?.navigation.navigate(route);
  };

  const getColor = (title) => {
    let color;
    if (title === data?.activeNavTab) {
      color = appTheme.PRIMARY_COLOR;
    } else {
      color = appTheme.INACTIVE_COLOR;
    }
    return color;
  };

  const handleBottomModal = (bottomModal) => {
    dispatch({
      type: "toggleBottomModal",
      payload: { bottomModal },
    });
  };

  return (
    <View style={styles.menuWrapper}>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{ padding: 5 }}
          onPress={() => handleNavigation("Feed")}>
          <Feather name='map-pin' size={25} color={getColor("Feed")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 5 }}
          onPress={() => handleNavigation("Posts")}>
          <Feather name='heart' size={25} color={getColor("Posts")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.plusBtnContainer}
          onPress={() => handleBottomModal("CreateProject")}>
          <MaterialCommunityIcons name='plus' size={25} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 5 }}
          onPress={() => handleNavigation("ChatOverview")}>
          <Feather name='send' size={25} color={getColor("ChatOverview")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 5 }}
          onPress={() => handleNavigation("Profile")}>
          <Feather name='user' size={25} color={getColor("Profile")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const BottomStack = () => {
  return (
    <BottomTab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <BottomTab.Screen name='Feed' component={Feed} options={{}} />
      <BottomTab.Screen name='Posts' component={Posts} />
      <BottomTab.Screen name='ChatOverview' component={ChatOverview} />
      <BottomTab.Screen name='Profile' component={Profile} />
    </BottomTab.Navigator>
  );
};

const SingleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Chat'
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ChatList'
        component={ChatList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ProfileSide'
        component={ProfileSide}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Post'
        component={Post}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Reports'
        component={Reports}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Calendar'
        component={Calendar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Tasks'
        component={Tasks}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
      }}
      initialRouteName='Onboarding'>
      <Stack.Screen
        name='Onboarding'
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUp'
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
function AppStack() {
  return (
    <Stack.Navigator initialRouteName='BottomTabStack'>
      <Stack.Screen
        name='SingleStack'
        component={SingleStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='BottomTabStack'
        component={BottomStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const RootApp = () => {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator type='modal' mode='modal'>
        {!state.accessToken ? (
          <Stack.Screen
            name='AuthStack'
            component={AuthStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name='AppStack'
            component={AppStack}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootApp;

const styles = StyleSheet.create({
  menuWrapper: {
    backgroundColor: "transparent",
  },
  menuContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    backgroundColor: "#fff",
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "#000000",
    elevation: 4,
    marginTop: 1,
    paddingHorizontal: 25,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  plusBtnContainer: {
    backgroundColor: appTheme.PRIMARY_COLOR,
    height: 60,
    width: 60,
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
  },
});
