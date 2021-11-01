import { StyleSheet } from 'react-native';
import { appTheme } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  backButton: {
    marginRight:10,
  },
  chatHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: appTheme.fontWeights.BOLD,
    fontSize:appTheme.fontSizes.HEADER
  },
  selectedMemberName: {
    fontWeight: appTheme.fontWeights.BOLD,
  },
  selectedMembeDescription: {
    fontWeight: appTheme.fontWeights.NORMAL,
    fontSize:appTheme.fontSizes.BODY,
  },
  membersWrapper: {flex: 1, padding: 16},
  singleMember: {
    backgroundColor: '#fff',
    padding: 10,
    height: 80,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    margin: 1,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  singleMemberPhoto: {
    // height: 50,
    // width: 50,
    // borderRadius: 10,
    marginRight: 10,
  },
  singleMemberInfo: {
    width: '65%',
    marginRight: 'auto',
  },
  chatWrapper: {
    flex: 1,
    position: 'relative',
  },
});

export default styles;
