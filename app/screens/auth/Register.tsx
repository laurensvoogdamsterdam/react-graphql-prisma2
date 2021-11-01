import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useLoginMutation } from "../../hooks/graphql";
import { setAccessToken } from "../../utils/accessToken";
import { ActionType, AppContext } from "../../contexts";
import { View, Dimensions, Animated } from "react-native";
import { Input, Header, Button, Icon } from "../../components";

const { height } = Dimensions.get("screen");

export default function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  const [error, setError] = useState("");
  const { dispatch } = useContext(AppContext);
  const [alignment, setAlignment] = useState(new Animated.Value(0));

  const toDocumentsPage = () => {
    Animated.timing(alignment, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const backToMainComponent = () => {
    Animated.timing(alignment, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const heightIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [height, 0],
  });

  const opacityIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const documentPageOpacityIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const documentPageHeightIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height],
  });

  const mainContainerStyle = {
    height: heightIntropolate,
    opacity: opacityIntropolate,
  };

  const documentContainerStyle = {
    height: documentPageHeightIntropolate,
    opacity: documentPageOpacityIntropolate,
  };

  const handleSubmit = async () => {
    try {
      const rsp = await login({
        variables: {
          email,
          password,
        },
      });

      if (rsp && rsp.data) {
        setAccessToken(rsp.data.login.accessToken);
        setError("");
        dispatch({ type: ActionType.LOGIN, token: rsp.data.login.accessToken });
      }
    } catch (e: any) {
      setError(e.message);
    }
  };
  return (
    <View style={styles.loginContainer}>
      <Animated.View style={[styles.mainContainer, mainContainerStyle]}>
        <View style={{ width: "100%" }}>
          <Header title='Sign Up' subTitle='Create Your Account Now' />
        </View>
        <View>
          <Input
            onChangeText={setEmail}
            icon='md-person'
            placeholder='Username'
            size={18}
          />
          <Input
            onChangeText={setPassword}
            icon='md-mail'
            placeholder='Email'
            size={18}
          />
        </View>
        <Button onPress={() => toDocumentsPage()} title='NEXT' />
      </Animated.View>
      <Animated.View style={[styles.mainContainer, documentContainerStyle]}>
        <Icon
          name='chevron-left'
          onPress={() => backToMainComponent()}
          size={30}
        />
        <View style={{ width: "100%" }}>
          <Header
            title='Personal Information'
            subTitle='Enter Your Personal Information'
          />
        </View>
        <View>
          <Input
            size={18}
            icon='md-person'
            placeholder='First Name'
            onChangeText={setEmail}
          />
          <Input
            size={18}
            icon='md-person'
            placeholder='Last Name'
            onChangeText={setPassword}
          />
        </View>
        <Button title='NEXT' />
      </Animated.View>
    </View>
  );
}
