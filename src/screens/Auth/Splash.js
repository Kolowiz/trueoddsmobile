import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import LoadingView from '../../components/LoadingView';
import configureStore from '../../config/configureStore';
import Nav from '../../components/Nav';
import {launchMainApp} from '../../app';
import {Colors, Metrics} from '../../themes';

const {store, persistor} = configureStore();

const Splash = ({navigateTo, componentId}) => {
  useEffect(() => {
    // Persist Store && Rehydrate on Boot
    // launchMainApp();
    return () => {};
  }, []);
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
