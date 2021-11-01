import React, { useState, useEffect, useContext } from "react";
import {
  TouchableOpacity,
  View,
  ImageBackground,
  Text,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./postStyle";
import { AuthContext } from "../../contexts";
import {
  useToggleLikeMutation,
  useViewPostMutation,
} from "../../hooks/graphql";
import { FlatList } from "react-native-gesture-handler";
import { buildStaticUrl } from "../../utils";
const { width, height } = Dimensions.get("window");
import { appTheme } from "../../constants";
import shortid from "shortid";

export function Post({ navigation, route }) {
  const { post } = route.params;
  const { state, dispatch } = useContext(AuthContext);
  const [viewPostMutation] = useViewPostMutation();

  useEffect(() => {
    const setView = async () => {
      const view = await viewPostMutation({
        variables: {
          postId: Number(post.id),
        },
      });
      return view;
    };
    setView();
    return () => {};
  }, []);

  const handleBackButton = () => {
    navigation?.goBack();
  };

  return (
    <View>
      <FlatList
        data={post.files}
        pagingEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ index }) => `${shortid.generate()}${index}`}
        renderItem={(item) => {
          return (
            <View key={`${item.item.url}${shortid.generate()}`}>
              <ImageBackground
                source={{ uri: buildStaticUrl(item.item.url) }}
                style={{ height: height / 2, width }}>
                <TouchableOpacity
                  onPress={() => handleBackButton()}
                  style={styles.backButton}>
                  <Ionicons
                    name='arrow-back-outline'
                    size={25}
                    color={"#fff"}
                  />
                </TouchableOpacity>
              </ImageBackground>
            </View>
          );
        }}
      />
      <LikeOpacity post={post} />
    </View>
  );
}

const LikeOpacity = (props: { post: any }) => {
  const [toggleLike] = useToggleLikeMutation();
  const [isLiked, setIsLiked] = useState(props.post.isLiked);

  const like = () => {
    toggleLike({ variables: { postId: Number(props.post.id) } });
    setIsLiked(!isLiked);
  };
  return (
    <TouchableOpacity onPress={() => like()}>
      {isLiked ? <Ionicons name='heart' /> : <Ionicons name='menu' />}
    </TouchableOpacity>
  );
};
