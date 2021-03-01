import {Navigation} from 'react-native-navigation';
import Colors from './themes/colors';

const startApp = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'SplashScreen',
        options: {
          statusBar: {
            backgroundColor: Colors.primaryColor,
            style: 'dark',
          },
        },
      },
    },
  });
};

const launchMainApp = () => {
  return Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'HomeScreen',
                    passProps: {},
                    options: {
                      bottomTab: {
                        text: 'Predictions',
                        icon: require('./assets/icons/list.png'),
                        testID: 'LIST_TAB_BAR_BUTTON',
                        iconColor: Colors.tabButtonColor,
                        selectedIconColor: Colors.selectedTabButtonColor,
                        textColor: Colors.tabButtonColor,
                        selectedTextColor: Colors.selectedTabButtonColor,
                      },
                      statusBar: {
                        backgroundColor: Colors.primaryColor,
                      },
                    },
                  },
                },
              ],
              options: {},
            },
          },

          {
            stack: {
              children: [
                {
                  component: {
                    name: 'SettingsScreen',
                    passProps: {},
                    options: {
                      bottomTab: {
                        text: 'Settings',
                        icon: require('./assets/icons/settings.png'),
                        testID: 'SETTINGS_TAB_BAR_BUTTON',
                        iconColor: Colors.tabButtonColor,
                        selectedIconColor: Colors.selectedTabButtonColor,
                        textColor: Colors.tabButtonColor,
                        selectedTextColor: Colors.selectedTabButtonColor,
                      },
                      statusBar: {
                        backgroundColor: Colors.primaryColor,
                      },
                    },
                  },
                },
              ],
              options: {},
            },
          },
        ],
        options: {
          bottomTabs: {
            backgroundColor: Colors.bottomTabColor,
            titleDisplayMode: 'alwaysShow',
            style: 'dark',
          },
          bottomTab: {},
        },
      },
    },
  });
};

export {startApp, launchMainApp};
