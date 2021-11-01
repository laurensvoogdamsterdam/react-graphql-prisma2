import * as React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { BlurView } from "expo";

interface SwipeToCloseProps {
}

export default class SwipeToClose extends React.PureComponent<SwipeToCloseProps> {
  render() {
    const {
      children,
    } = this.props;
    return (
      <View style={StyleSheet.absoluteFill}>
        <View style={StyleSheet.absoluteFill}>
          <BlurView
            tint="default"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        </View>
        <StatusBar barStyle="light-content" />
        <View>
          {children}
        </View>
      </View>
    );
  }
}
