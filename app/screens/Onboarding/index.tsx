import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Illustration } from "../../assets/images/onboard.png";
import styles from "./onboardingStyle";
import { navigateToNestedRoute } from "../../navigation/RootNavigation";
import { getScreenParent } from "../../utils/NavigationHelper";
import { AuthContext } from "../../contexts";
import { ActionType } from "../../contexts";
import { ACCESS_TOKEN_LOCATION } from "../../constants/api";
import { useSigninUserMutation } from "../../hooks/graphql";
import * as SecureStore from "expo-secure-store";

export function Onboarding({ navigation }) {
  const { state, dispatch } = React.useContext(AuthContext);
  const [signin] = useSigninUserMutation();

  const handleNavigation = (screen) => {
    navigation?.navigate(screen);
  };

  React.useEffect(() => {
    handleLogin();
    return () => {};
  }, []);

  const handleLogin = async () => {
    try {
      const response = await signin({
        variables: {
          email: "L@v.com",
          password: "ijnokm",
        },
      });
      await SecureStore.setItemAsync(
        ACCESS_TOKEN_LOCATION,
        response.data.signinUser.token
      );
      dispatch({
        type: ActionType.LOGIN,
        payload: {
          ...response.data.signinUser,
          accessToken: response.data.signinUser.token,
          token: response.data.signinUser.token,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.illustrationWrapper}>
        <Image
          source={{
            uri: "https://mk0snacknation9jc4nw.kinstacdn.com/wp-content/uploads/2020/07/hero-option-2.png",
          }}
          style={styles.illustrationContent}
        />
      </View>
      <Text style={styles.largeText}>Smart Task {"\n"}Management</Text>
      <Text style={styles.smallText}>
        This smart tool is designed to help you {"\n"}better manage your tasks
      </Text>
      <TouchableOpacity
        style={styles.loginBtnWrapper}
        onPress={() => handleNavigation("Login")}>
        <Text style={styles.loginBtnText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtnWrapper}
        onPress={() => handleNavigation("SignUp")}>
        <Text style={styles.loginBtnText}>SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
