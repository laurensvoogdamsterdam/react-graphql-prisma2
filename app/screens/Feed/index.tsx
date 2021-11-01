import React, { useEffect, useContext } from "react";
import { View, ScrollView, Text, SafeAreaView } from "react-native";
import styles from "./feedStyles";
import { useMeQuery, useSeeFeedQuery } from "../../hooks/graphql";
import { ActionType } from "../../contexts";
import { OverflowList } from "../OverflowFlatList";
import { AuthContext } from "../../contexts";
import { TabScreenHeader } from "../../components";
import { TabList } from "../../components/TabList";
import { FeedList } from "../FeedList";
import { URL } from "../../constants/api";

export function Feed() {
  const { state, dispatch } = useContext(AuthContext);
  const feed = useSeeFeedQuery();
  const me = useMeQuery();

  useEffect(() => {
    if (!me.loading) {
      dispatch({ type: ActionType.ME, payload: me });
    }
    if (!feed.loading) {
      dispatch({ type: ActionType.FEED, payload: feed });
    }
  }, [feed.loading, me.loading]);

  return (
    <SafeAreaView>
      <TabScreenHeader
        leftComponent={() => (
          <View style={styles.flexRow}>
            <Text style={styles.headerLeftText}>Feed</Text>
          </View>
        )}
        isCalendarVisible={true}
        isChatBtnVisible={true}
        showAvatar={true}
        avatar={`${URL}${me?.data?.me?.avatar}`}
      />
      {/* Body of the view */}
      <TabList />
      <ScrollView>
        <OverflowList data={state.feed?.data} />
        <FeedList data={state.feed?.data} />
      </ScrollView>
    </SafeAreaView>
  );
}
