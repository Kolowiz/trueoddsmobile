import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Colors} from '../../../themes';
import {SolidIcon} from '../../../components/Icon';

const isEven = (value) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const Status = ({status}) => {
  if (status === 'pending') {
    return (
      <View style={styles.statusContainer}>
        <SolidIcon name={'circle'} size={12} color={Colors.default} />
      </View>
    );
  } else if (status === 'won') {
    return (
      <View style={styles.statusContainer}>
        <SolidIcon name={'check-circle'} size={12} color={Colors.success} />
      </View>
    );
  } else {
    return (
      <View style={styles.statusContainer}>
        <SolidIcon name={'times-circle'} size={12} color={Colors.danger} />
      </View>
    );
  }
};

const SlipItem = ({data, index}) => {
  const {home_team, away_team, prediction, result, odd, game_status} = data;

  return (
    <View
      activeOpacity={0.5}
      style={[
        styles.container,
        {
          backgroundColor: isEven(index)
            ? Colors.darkScreenColor
            : Colors.screenColor,
        },
      ]}>
      <View style={styles.row1}>
        <Status status={game_status} />
        <View style={styles.teamInfo}>
          <Text style={styles.vs}>{`${home_team} vs ${away_team}`}</Text>
          <Text style={styles.odd}>{odd}</Text>
        </View>
      </View>

      <Text style={styles.prediction}>{`Prediction: ${prediction}`}</Text>
      <View style={styles.row2}>
        <Text style={styles.outcome}>{`Outcome: ${
          result ? result : 'pending'
        }`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    flex: 1,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  vs: {
    color: '#BABABA',
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
  },
  odd: {
    color: '#BABABA',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
  },
  prediction: {
    color: '#BABABA',

    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    lineHeight: 23,
    paddingHorizontal: 30,
  },
  outcome: {
    color: '#BABABA',
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
  },
  status: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  statusContainer: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SlipItem;
