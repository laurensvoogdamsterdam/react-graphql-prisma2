import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, Easing, Text, View } from "react-native";
import { THEME_COLORS } from "../../constants/Api";

const ScaleView = (props) => {
  const scaleAnimation = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0

  const interpolateRotating: Animated.AnimatedInterpolation =
    scaleAnimation.interpolate({
      inputRange: [1, 2],
      outputRange: [1, 2],
    });
  const animatedStyle = {
    transform: [
      {
        scaleX: interpolateRotating,
      },
    ],
  };

  useEffect(() => {
    Animated.timing(scaleAnimation, {
      toValue: 2,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        ...animatedStyle,
      }}>
      {props.children}
    </Animated.View>
  );
};

const localStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: THEME_COLORS.five,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
