import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  BackHandler,
  Linking,
} from 'react-native';
import VersionCheck from 'react-native-version-check';

import LoadingView from '../../components/LoadingView';
import configureStore from '../../config/configureStore';
import Nav from '../../components/Nav';
import {launchMainApp} from '../../app';
import {Colors, Metrics} from '../../themes';

const {store, persistor} = configureStore();

const Splash = ({navigateTo, componentId}) => {
  useEffect(() => {
    checkVersion();
    return () => {};
  }, []);

  const checkVersion = async () => {
    try {
      let updateNeeded = await VersionCheck.needUpdate();
      if (updateNeeded && updateNeeded.isNeeded) {
        Alert.alert(
          'Please Update',
          'You will have to update your app to the latest version to continue using it.',
          [
            {
              text: 'Update',
              onPress: () => {
                BackHandler.exitApp();
                Linking.openURL(updateNeeded.storeUrl);
              },
            },
          ],
          {cancelable: false},
        );
      } else {
        launchMainApp();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.screen}>
      <LoadingView full size={Metrics.aIWaitingViewSize} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.screenColor,
  },
});

export default Nav(Splash);
