import {Navigation} from 'react-native-navigation';

/* 
    Auth Screens
*/
import SplashScreen from './Auth/Splash';

/* 
      Home Screens
  */
import HomeScreen from './Home';
import SlipListScreen from './Home/SlipList/index';

/* 
      Settings Screens
  */
import SettingsScreen from './Settings';
import AboutScreen from './Settings/About';

const registerScreens = (store, Provider) => {
  /* 
      Auth Screens
  */
  Navigation.registerComponent(
    'SplashScreen',
    () => Provider(SplashScreen, store),
    () => SplashScreen,
  );
  /* 
      Home Screens
  */
  Navigation.registerComponent(
    'HomeScreen',
    () => Provider(HomeScreen, store),
    () => HomeScreen,
  );
  Navigation.registerComponent(
    'SlipListScreen',
    () => Provider(SlipListScreen, store),
    () => SlipListScreen,
  );
  /* 
      Settings Screens
  */
  Navigation.registerComponent(
    'SettingsScreen',
    () => Provider(SettingsScreen, store),
    () => SettingsScreen,
  );
  Navigation.registerComponent(
    'AboutScreen',
    () => Provider(AboutScreen, store),
    () => AboutScreen,
  );
};

export default registerScreens;
