import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, Easing, Text, View } from "react-native";
import { THEME_COLORS } from "../../constants/Api";

const RotateView = (props) => {
  const rotateAnimation = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const interpolateRotating: Animated.AnimatedInterpolation =
    rotateAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "720deg"],
    });
  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  useEffect(() => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
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
