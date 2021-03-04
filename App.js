import {Navigation} from 'react-native-navigation';
import {persistStore} from 'redux-persist';
import messaging from '@react-native-firebase/messaging';
import {LogBox} from 'react-native';
import admob, {MaxAdContentRating} from '@react-native-firebase/admob';

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

admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.MA,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: false,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(() => {
    // Request config successfully set!
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
