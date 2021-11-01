import * as React from "react";
import { Dimensions, View } from "react-native";

import AppThumbnail from "./AppThumbnail";
import { App, Position } from "./Model";
import Content from "./Content";
import SwipeToClose from "./SwipeToClose";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

export interface AppModalProps {
  app: App;
  position: Position;
  close: () => void;
}

export default ({ app, position, close } : AppModalProps) => {
  const borderRadius = 8;
  const p = {
    width: wWidth,
    height: wHeight,
    top: 0,
    left: 0,
  };
  return (
    <SwipeToClose>
      <View
        style={{
          position: "absolute",
          backgroundColor: "white",
          ...p,
        }}
      />
      <View
        style={{
          position: "absolute",
          opacity: 1,
          paddingTop: position.height,
          ...p,
        }}
      >
        <Content />
      </View>
      <View
        style={{
          position: "absolute",
          ...p,
          height: position.height,
        }}
      >
        <AppThumbnail borderRadius={borderRadius} {...{ app }} />
      </View>
    </SwipeToClose>
  );
};
