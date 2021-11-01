import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './calendarStyles';
import {TabScreenHeader} from '../../components';
import {AuthContext} from '../../contexts';
import {navigateToNestedRoute} from '../../navigation/RootNavigation';
import {getScreenParent} from '../../utils/NavigationHelper';

export function Calendar({ navigation }) {
  const {state, dispatch} = useContext(AuthContext);

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
            <Text style={styles.headerTitle}>Calendar</Text>
          </View>)}
        isSearchBtnVisible={false}
        isMoreBtnVisible={false}
      />
     
    </SafeAreaView>
  );
}
