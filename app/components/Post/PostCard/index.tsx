import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProgressCircle from "react-native-progress-circle";
import shortid from "shortid";
import styles from "./postCardStyle";
import { appTheme } from "../../../constants";
import { navigateToNestedRoute } from "../../../navigation/RootNavigation";
import { getScreenParent } from "../../../utils/NavigationHelper";

export function PostCard({ post, navigation }) {
  const handleNavigation = (screen, params) => {
    console.log(`coming here ${getScreenParent(screen)}`);
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigation("Post", post)}>
      <Text style={styles.postTitle}>{post?.title}</Text>
      <View style={styles.postTeamAndProgress}>
        <View>
          <Text style={styles.postDescription}>{post?.description}</Text>
          <Text style={styles.postTeamTitle}>Team</Text>
          <View style={styles.postTeamWrapper}>
            {post?.team?.map((member) => (
              <Image
                key={shortid.generate()}
                style={styles.postMemberPhoto}
                source={{ uri: member?.photo }}
              />
            ))}
            <TouchableOpacity style={styles.plusBtnContainer}>
              <MaterialCommunityIcons name='plus' size={22} color='#fff' />
            </TouchableOpacity>
          </View>
        </View>
        <ProgressCircle
          percent={post?.progress}
          radius={40}
          borderWidth={8}
          color='#6AC67E'
          shadowColor='#f4f4f4'
          bgColor='#fff'>
          <Text style={styles.postProgress}>{post?.progress}%</Text>
        </ProgressCircle>
      </View>
      <View style={styles.rowJustifyBetween}>
        <View style={styles.flexRow}>
          <MaterialCommunityIcons
            name='calendar-month-outline'
            size={20}
            color={appTheme.INACTIVE_COLOR}
          />
          <Text style={styles.postBottomText}>{post?.createdAt}</Text>
        </View>
        <View style={styles.flexRow}>
          <MaterialCommunityIcons
            name='checkbox-marked'
            size={20}
            color={appTheme.INACTIVE_COLOR}
          />
          <Text style={styles.postBottomText}>{post?.tasks} Tasks</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
