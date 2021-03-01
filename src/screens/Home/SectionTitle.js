import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Moment from 'react-moment';

import {Colors} from '../../themes';

const DateString = ({date}) => {
  const today = new Date();
  const yesterday = new Date(today);

  yesterday.setDate(yesterday.getDate() - 1);

  if (date === today.toISOString().slice(0, 10)) {
    return <Text style={styles.dateText}> Today's predictions</Text>;
  } else if (date === yesterday.toISOString().slice(0, 10)) {
    return <Text style={styles.dateText}> Yesterday's predictions</Text>;
  } else {
    return (
      <Moment element={Text} style={styles.date} format="D MMMM YYYY">
        {date}
      </Moment>
    );
  }
};

const SectionTitle = ({title}) => {
  //   console.log('Date', new Date().toISOString().slice(0, 10));

  return (
    <View style={styles.container}>
      <DateString date={title} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#303030',
  },
  date: {
    color: Colors.defaultTextColor,
    textTransform: 'uppercase',
    fontFamily: 'ProductSans-Medium',
  },
  dateText: {
    color: Colors.defaultTextColor,
    textTransform: 'uppercase',
    fontFamily: 'ProductSans-Medium',
  },
});

export default SectionTitle;
