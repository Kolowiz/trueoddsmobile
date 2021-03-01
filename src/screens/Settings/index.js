import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {List, Divider} from 'react-native-paper';

import TopBar from './TopBar';
import {Colors} from '../../themes';
import Nav from '../../components/Nav';

const listItemStyle = {};
const rpTheme = {
  colors: {
    text: Colors.defaultTextColor,
  },
};

const Settings = ({navigateTo, componentId}) => (
  <View style={styles.container}>
    <TopBar />
    <View style={styles.screen}>
      <List.Item
        title={<Text style={styles.titleStyle}>About</Text>}
        // description={'info@thirti'}
        theme={rpTheme}
        style={listItemStyle}
        onPress={() => {
          navigateTo({
            screenName: 'AboutScreen',
            componentId,
            passProps: {},
            options: {
              statusBar: {
                backgroundColor: Colors.primaryColor,
                style: 'light',
              },
            },
          });
        }}
      />
      <List.Item
        title={<Text style={styles.titleStyle}>Terms and Conditions</Text>}
        // description={'info@thirti'}
        theme={rpTheme}
        style={listItemStyle}
        onPress={() => {}}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1},
  screen: {
    flex: 1,
    backgroundColor: Colors.screenColor,
    paddingVertical: 10,
  },
});

export default Nav(Settings);
