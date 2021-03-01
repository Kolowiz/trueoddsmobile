import {Navigation} from 'react-native-navigation';
import {persistStore} from 'redux-persist';
import messaging from '@react-native-firebase/messaging';
import {LogBox} from 'react-native';

import configureStore from './src/config/configureStore';
import Provider from './src/components/Provider';
import {launchMainApp} from './src/app';
import registerScreens from './src/screens';
import Colors from './src/themes/colors';

LogBox.ignoreAllLogs();
const {store} = configureStore();

registerScreens(store, Provider);

// Persist Store && Rehydrate on Boot
// persistStore(store, null, () => {

//   });

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
});
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: Colors.primaryColor,
      //drawBehind: false,
      visible: true,
      style: 'light',
    },
    layout: {
      componentBackgroundColor: Colors.white,
      orientation: ['portrait'],
    },
    topBar: {
      visible: false,
    },
    bottomTabs: {
      backgroundColor: Colors.white,
      titleDisplayMode: 'alwaysShow',
    },
  });

  launchMainApp();
});
