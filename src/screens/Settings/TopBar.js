import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import {Colors, Fonts} from '../../themes/index';
import Icon from '../../components/Icon';

const TopBar = (props) => {
  const {} = props;
  return (
    <ElevatedView elevation={4} style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.true}>Settings</Text>
      </View>
      <View style={styles.btnArea}>
        {/* <TouchableOpacity style={styles.btn} onPress={() => addNewPost()}>
            <Icon
              size={25}
              color={Colors.snow}
              name="plus"
              style={styles.icon}
            />
          </TouchableOpacity> */}
      </View>
    </ElevatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    height: 50,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {flexDirection: 'row'},
  true: {
    fontSize: 23,
    color: Colors.white,
    fontFamily: 'ProductSans-Black',
    marginRight: 2,
  },
  odds: {
    fontSize: 23,
    color: Colors.secondaryColor,
    fontFamily: 'ProductSans-Black',
  },

  icon: {
    // marginHorizontal: 10
  },
  btnArea: {},
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopBar;
