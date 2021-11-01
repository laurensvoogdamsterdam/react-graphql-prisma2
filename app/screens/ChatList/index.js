import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import shortid from 'shortid';
import styles from './membersStyle';
import {appTheme} from '../../constants';
import {TabScreenHeader, EmptyListComponent} from '../../components';
import {AuthContext} from '../../contexts';
import {navigateToNestedRoute} from '../../navigation/RootNavigation';
import {getScreenParent} from '../../utils/NavigationHelper';
import { Avatar } from 'react-native-paper';

export function ChatList({ navigation }) {
  const {state, dispatch} = useContext(AuthContext);
  const {members} = state;

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  const handleBackButton = () => {
    navigation?.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => (
          <View style={{ flexDirection: 'row',alignItems:'center' }}r>
            <TouchableOpacity
              onPress={() => handleBackButton()}
              style={styles.backButton}>
              <Ionicons name='arrow-back-outline' size={25} color='#000' />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Chat</Text>
          </View>)}
        isSearchBtnVisible={false}
        isMoreBtnVisible={false}
      />
      {members?.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.membersWrapper}>
            {members.map(member => (
              <TouchableOpacity
                style={styles.singleMember}
                onPress={() => handleNavigation('Chat', member)}
                key={shortid.generate()}>
                <Avatar.Image
                  style={styles.singleMemberPhoto}
                  size={50}
                  source={{
                    uri: member?.photo,
                  }}
                />
                <View style={styles.singleMemberInfo}>
                  <Text
                    style={styles.selectedMemberName}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {member?.name}
                  </Text>
                  <Text style={styles.selectedMembeDescription}>
                    {member?.designation}
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name="message"
                  size={17}
                  color={appTheme.PRIMARY_COLOR}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      ) : (
        <EmptyListComponent />
      )}
    </SafeAreaView>
  );
}
