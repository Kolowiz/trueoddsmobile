import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Moment from 'react-moment';
import {Colors} from '../../themes';

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
      <Text style={[styles.status, {color: Colors.default}]}>{status}</Text>
    );
  } else if (status === 'won') {
    return (
      <Text style={[styles.status, {color: Colors.success}]}>{status}</Text>
    );
  } else {
    return (
      <Text style={[styles.status, {color: Colors.danger}]}>{status}</Text>
    );
  }
};

const PredictionItem = ({data, index, onPressItem}) => {
  const {slip_category, date, slip_list, bet_status} = data;
  const teams = slip_list.length;

  return (
    <TouchableOpacity
      onPress={() => onPressItem(data)}
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
        <Text style={styles.category}>
          {slip_category && slip_category.name}
        </Text>
      </View>

      <Text style={styles.teams}>{`${teams} teams`}</Text>
      <View style={styles.row2}>
        <Moment element={Text} format="D MMMM YYYY" style={styles.date}>
          {date}
        </Moment>
        <Status status={bet_status} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  row1: {
    flexDirection: 'row',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  category: {
    color: '#BABABA',
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
  },
  date: {
    color: '#BABABA',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  teams: {
    color: '#BABABA',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 23,
  },
  status: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
});

export default PredictionItem;
