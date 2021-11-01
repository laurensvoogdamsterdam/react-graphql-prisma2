import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import shortid from "shortid";
import styles from "./postsStyles";
import { AuthContext } from "../../contexts";
import {
  TabScreenHeader,
  PostCard,
  EmptyListComponent,
} from "../../components";
import { combineData } from "../../utils/dataHelper";
import { TabList } from "../../components/TabList";

export function Posts({ navigation }) {
  const tabs = ["All", "Ongoing", "Completed"];

  const { state, dispatch } = useContext(AuthContext);
  const { projects } = state;

  const [data, setData] = useState({ activeTab: "All" });

  const toggleTab = (tab) => {
    setData(combineData(data, { activeTab: tab }));
  };

  const isActiveTab = (tab) => {
    const value = data?.activeTab === tab;
    return value;
  };

  const getProjects = () => {
    let { activeTab } = data;
    let projectsToRender = [];
    if (activeTab === "All") {
      projectsToRender = projects;
    } else {
      projectsToRender =
        projects?.filter(
          (project) => project.status === activeTab?.toLowerCase()
        ) || [];
    }

    return projectsToRender;
  };

  const renderPostInfo = ({ item }) => {
    return (
      <PostCard post={item} key={shortid.generate()} navigation={navigation} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => <Text style={styles.headerTitle}>Posts</Text>}
        // isCalendarVisible={true}
        // isChatBtnVisible={true}
        // showAvatar={true}
      />
      <TabList />
      <View style={styles.projectsBody}>
        {projects?.length > 0 ? (
          <FlatList
            data={getProjects()}
            keyExtractor={(item, index) => shortid.generate()}
            renderItem={renderPostInfo}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <EmptyListComponent />
        )}
      </View>
    </SafeAreaView>
  );
}
