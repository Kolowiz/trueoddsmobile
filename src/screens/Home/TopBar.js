import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import {Colors, Fonts} from '../../themes/index';
import {RegularIcon} from '../../components/Icon';

const TopBar = ({onRefresh}) => {
  return (
    <ElevatedView elevation={4} style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.true}>True</Text>
        <Text style={styles.odds}>Odds</Text>
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={() => onRefresh()}>
          <RegularIcon
            size={21}
            color={Colors.white}
            name="sync-alt"
            style={styles.icon}
          />
        </TouchableOpacity>
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
    paddingLeft: 15,
    paddingRight: 5,
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
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopBar;
