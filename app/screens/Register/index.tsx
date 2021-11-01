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
  MaterialCommunityIcons,
  Octicons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import styles from "./registerStyles";
import { navigateToNestedRoute } from "../../navigation/RootNavigation";
import { getScreenParent } from "../../utils/NavigationHelper";
import { appTheme } from "../../constants";
import { AuthContext } from "../../contexts";
import { useSignupUserMutation } from "../../hooks/graphql";
import { okUsername, okPassword, okEmail } from "../../utils";
import { ActionType } from "../../contexts";

export function Register({ navigation }) {
  const { _state, dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signup] = useSignupUserMutation();
  const handleBackButton = () => {
    navigation?.goBack();
  };

  const handleNavigation = (screen, params) => {
    navigation?.navigate(screen);
  };

  const handleSignup = async () => {
    if (okPassword(password) && okUsername(username) && okEmail(email)) {
      setEmail(null);
      try {
        const response = await signup({
          variables: {
            username,
            email,
            password,
          },
        });
        dispatch({
          type: ActionType.SIGNUP,
          payload: {
            ...response.data.signupUser,
            accessToken: response.data.signupUser.token,
          },
        });
      } catch (e) {
        console.log(e.message);

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
        <Text style={styles.largeText}>Sign Up !</Text>
        <Text style={styles.smallText}>
          Sign up your account &amp; manage {"\n"}your tasks
        </Text>
        {error ? <Text style={styles.smallText}>{error}</Text> : null}
        <View style={styles.inputRow}>
          <Ionicons name='person-outline' size={20} color='gray' />
          <TextInput
            placeholder='Username'
            placeholderTextColor='gray'
            style={styles.textInput}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputRow}>
          <MaterialCommunityIcons name='email-outline' size={20} color='gray' />
          <TextInput
            placeholder='Email'
            placeholderTextColor='gray'
            style={styles.textInput}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputRow}>
          <MaterialIcons name='lock-outline' size={20} color='gray' />
          <TextInput
            placeholder='Password'
            placeholderTextColor='gray'
            secureTextEntry={true}
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
          style={styles.loginBtnWrapper}
          onPress={() => handleSignup()}>
          <Text style={styles.han}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtnWrapper}
          onPress={() => handleNavigation("Login")}>
          <Text style={styles.han}>Already have an account? LOGIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
