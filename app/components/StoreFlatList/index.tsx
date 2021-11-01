import React, { useState, useEffect } from "react";
import { ScrollView, SafeAreaView, StatusBar } from "react-native";

import { Apps, Position, App as AppModel } from "./Model";
import App from "./App";
import AppModal, { AppModalProps } from "./AppModal";

const apps: Apps = [
  {
    id: 0,
    title: "Namaste",
    subtitle: "Best Yoga apps for the summer",
    source: require("../../assets/images/yoga.jpg"),
    content: "",
  },
  {
    id: 1,
    title: "Get Fit",
    subtitle: "Wear it while you work out",
    source: require("../../assets/images/fitness.jpg"),
    content: "",
  },
  {
    id: 2,
    title: "Classic Games",
    subtitle: "They never get old",
    source: require("../../assets/images/chess.jpg"),
    content: "",
  },
];

const StoreFlatList = () => {
  const [state, setState] = useState({
    ready: false,
    modal: null,
  });

  useEffect(() => {
    setState({ ...state, ready: true });
  }, []);

  const open = (app: AppModel, position: Position) => {
    setState({ ...state, modal: { app, position } });
  };

  const close = () => {
    setState({ ...state, modal: null });
  };

  if (!state.ready) {
    return null;
  }
  return null;
};

export default StoreFlatList;
