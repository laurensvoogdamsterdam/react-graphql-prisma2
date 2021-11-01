import * as React from "react";
import {
  View, Text, TouchableWithoutFeedback, StyleSheet, Dimensions,
} from "react-native";
import { App, Position } from "./Model";
import AppThumbnail from "./AppThumbnail";

const { width, height } = Dimensions.get("window");
const measure = async (ref: View | Text | ScrollView): Promise<Position> => new Promise(resolve => ref.measureInWindow((x, y, width, height) => resolve({
  x, y, width, height,
})));

export type Apps = App[];

interface AppProps {
  app: App;
  open: (app: App, position: Position) => void;
}

export default class extends React.PureComponent<AppProps> {
  container = React.createRef();


  startTransition = async () => {
    const { app, open } = this.props;
    const position = await measure(this.container.current);
    open(app, position);
  };

  render() {
    const { app } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this.startTransition}>
        <View
          ref={this.container}
          style={styles.container}
        >
          <AppThumbnail {...{ app }} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 32,
    height: height / 2,
    alignSelf: "center",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
