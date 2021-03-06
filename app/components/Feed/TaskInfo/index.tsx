import React, { useContext } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";
import shortid from "shortid";
import styles from "./taskInfoStyle";
import { appTheme } from "../../../constants";
import { AuthContext } from "../../../contexts";

export function TaskInfo({ task }) {
  const { state, dispatch } = useContext(AuthContext);

  const handleBottomModal = () => {
    dispatch({
      type: "toggleBottomModal",
      payload: { bottomModal: "TaskView" },
    });

    dispatch({
      type: "viewTask",
      payload: { selectedTask: task },
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => handleBottomModal()}>
      <View style={styles.container}>
        <AntDesign
          name='checksquareo'
          size={20}
          color={
            task?.progress === 100 ? appTheme.COLOR2 : appTheme.INACTIVE_COLOR
          }
          style={styles.taskProgressIndicator}
        />
        <View style={styles.taskMiddleColumn}>
          <Text style={styles.taskTitle} numberOfLines={1} ellipsizeMode='tail'>
            {task?.title}
          </Text>
          <ProgressBar
            progress={Number(task?.progress)}
            color={task?.progress === 100 ? appTheme.COLOR2 : appTheme.COLOR1}
            style={styles.taskProgressBar}
          />
        </View>
        <View style={styles.teamWrapper}>
          {task?.members?.slice(0, 2)?.map((member) => (
            <Image
              key={shortid.generate()}
              style={styles.memberPhoto}
              source={{ uri: member?.photo }}
            />
          ))}
        </View>
        <MaterialIcons
          name='keyboard-arrow-right'
          size={25}
          color={appTheme.INACTIVE_COLOR}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
