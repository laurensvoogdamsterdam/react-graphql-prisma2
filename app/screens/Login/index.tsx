import React, { useState, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Switch,
} from "react-native";
import {
  Octicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import styles from "./loginStyle";
import { AuthContext } from "../../contexts";
import { useSigninUserMutation } from "../../hooks/graphql";
import { ActionType } from "../../contexts";
import { okEmail, okPassword } from "../../utils";
import { ACCESS_TOKEN_LOCATION, appTheme } from "../../constants";
import * as SecureStore from "expo-secure-store";

export function Login({ navigation }) {
  const { state, dispatch } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [signin] = useSigninUserMutation();

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const handleNavigation = (screen, params) => {
    navigation?.navigate(screen);
  };

  const handleLogin = async (screen, params) => {
    if (okPassword(password) && okEmail(email)) {
      setEmail(null);
      try {
        const response = await signin({
          variables: {
            email,
            password,
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
        setError(e.message);
      }
    } else {
      setError("Please make sure to fill in all required fields");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => handleBackButton()}>
          <MaterialIcons name='keyboard-arrow-left' size={25} color='gray' />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContent}>
        <Text style={styles.largeText}>Welcome Back!</Text>
        <Text style={styles.smallText}>
          Log into your account &amp; manage {"\n"}your tasks
        </Text>
        {error ? <Text style={styles.smallText}>{error}</Text> : null}
        <View style={styles.inputRow}>
          <MaterialCommunityIcons name='email-outline' size={20} color='gray' />
          <TextInput
            placeholder='Email'
            placeholderTextColor='gray'
            style={styles.textInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputRow}>
          <MaterialIcons name='lock-outline' size={20} color='gray' />
          <TextInput
            placeholder='Password'
            placeholderTextColor='gray'
            secureTextEntry={true}
            value={password}
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
          />
          <Octicons name='eye-closed' size={20} color='gray' />
        </View>
        <View style={styles.savePwdRow}>
          <Text style={styles.savePwdText}>Save Password</Text>
          <Switch
            trackColor={{
              false: appTheme.INACTIVE_COLOR,
              true: appTheme.COLOR2,
            }}
            thumbColor='#fff'
            value={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => handleLogin("Dashboard")}
          style={styles.signUpBtnWrapper}>
          <Text style={styles.signUpBtnText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpBtnWrapper}
          onPress={() => handleNavigation("SignUp")}>
          <Text style={styles.signUpBtnText}>
            Don't have an account? SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
