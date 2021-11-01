import * as React from "react";
import {
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  Dimensions,
  View,
} from "react-native";
import styles from "./overflowFlatListStyles";
import { getScreenParent } from "../../utils";
import { navigateToNestedRoute } from "../../navigation/RootNavigation";
import { URL } from "../../constants";
import shortid from "shortid";
const { width } = Dimensions.get("screen");
const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;

const OverflowItem = (data: any) => {
  const item = data.data;
  const thumbnail = item?.files.length
    ? `${URL}${item.files[0].url}`
    : `${URL}${item?.user?.avatar}`;

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };
  return (
    <TouchableOpacity onPress={() => handleNavigation("Post", { post: item })}>
      <View style={styles.cardContainer}>
        {/* <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>{item?.body}</Text>
          <Text style={styles.cardHeaderBody}>{item?.body}</Text>
        </View> */}
        <View>
          <Image style={styles.cardImage} source={{ uri: thumbnail }} />
        </View>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>{item?.body}</Text>
          <Text style={styles.cardHeaderBody}>{item?.body}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const OverflowList = (data: any) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.feedHeaderText}>Nearby</Text>
      </View>
      <FlatList
        style={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data?.data?.seeFeed}
        renderItem={({ item, index }) => <OverflowItem data={item} />}
        keyExtractor={({ item, index }) => `${index}-${shortid.generate()}`}
      />
    </View>
  );
};

export { OverflowList };
