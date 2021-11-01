import React from "react";
import { View, TouchableOpacity, Image, Text, FlatList } from "react-native";
import styles from "./feedListStyles";
import { Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { URL, appTheme } from "../../constants";
import { navigateToNestedRoute } from "../../navigation/RootNavigation";
import { getScreenParent } from "../../utils";
import shortid from "shortid";

const FeedList = (data: any) => {
  return (
    <View style={styles.contentBody}>
      <View>
        <Text style={styles.feedHeaderText}>Popular</Text>
      </View>
      {data?.data?.seeFeed.map((item) => {
        return (
          <FlatListItem
            key={`${shortid.generate()}`}
            data={{ item, index: "index" }}
          />
        );
      })}
    </View>
  );
};

const FlatListItem = (data: any) => {
  const { item } = data.data;

  const thumbnail = item?.files.length
    ? `${URL}${item.files[0].url}`
    : `${URL}${item?.user?.avatar}`;

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  return (
    <TouchableOpacity onPress={() => handleNavigation("Post", { post: item })}>
      <View style={styles.flatListRow}>
        <Image
          style={styles.singleMemberPhoto}
          source={{
            uri: thumbnail,
          }}
        />

        <View style={{ flex: 1 }}>
          <View>
            <Text style={styles.listItemBodyTitle}>
              {item.body}, {item.city}
            </Text>
            <Text style={styles.listItemBodyText}>
              textUpdate(item.body.length ,132)
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                padding: 8,
              }}>
              <View style={styles.listItemRow}>
                <Feather color={appTheme.PRIMARY_COLOR} name='eye' />
                <Text style={styles.listItemSmallText}>{item.viewCount}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                {item.isLiked ? (
                  <MaterialIcons
                    color={appTheme.PRIMARY_COLOR}
                    name='favorite'
                  />
                ) : (
                  <MaterialIcons
                    color={appTheme.PRIMARY_COLOR}
                    name='favorite-border'
                  />
                )}
                <Text style={styles.listItemSmallText}>{item.likeCount}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Feather color={appTheme.PRIMARY_COLOR} name='message-circle' />
                <Text style={styles.listItemSmallText}>
                  {item.commentCount}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { FeedList };
