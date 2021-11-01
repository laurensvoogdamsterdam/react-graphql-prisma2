import React, { useContext } from "react";
import { View, SafeAreaView, TouchableOpacity, Modal } from "react-native";
import { CreatePost } from "../Post";
import { CreateTask, TaskView } from "../Task";
import styles from "./bottomModalContainerStyle";
import { AuthContext } from "../../contexts";

export function BottomModalContainer() {
  const { state, dispatch } = useContext(AuthContext);
  const { bottomModal } = state;

  return (
    <Modal animationType='slide' transparent={true}>
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.setModalDimensions("100%", "100%")}>
          {bottomModal === "CreateProject" ? (
            <CreatePost />
          ) : bottomModal === "CreateTask" ? (
            <CreateTask />
          ) : bottomModal === "TaskView" ? (
            <TaskView />
          ) : null}
        </View>
      </SafeAreaView>
    </Modal>
  );
}
