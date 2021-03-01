import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Colors} from '../themes/index';
import {SolidIcon} from '../components/Icon';

const NoItems = ({noText, loading, error, errorText, noRefreshText}) => {
  if (loading) {
    return null;
  }
  if (error) {
    return (
      <View style={styles.container}>
        <SolidIcon
          size={60}
          color={Colors.defaultTextColor}
          name="exclamation-triangle"
          style={styles.icon}
        />
        <Text style={styles.errorText}>{errorText}</Text>
        <Text style={styles.refreshText}>{'Pull down to refresh'}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <SolidIcon
        size={60}
        color={Colors.defaultTextColor}
        name="box-open"
        style={styles.icon}
      />

      <Text style={styles.noText}>{noText}</Text>

      {noRefreshText ? (
        <Text style={styles.noRefreshText}>{'Pull down to refresh'}</Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noText: {
    color: Colors.defaultTextColor,
    marginTop: 20,
    marginHorizontal: 20,
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
  },
  errorText: {
    marginHorizontal: 20,
    marginTop: 20,
    color: Colors.defaultTextColor,
    textAlign: 'center',
  },
  refreshText: {
    marginHorizontal: 20,
    marginTop: 20,
    color: Colors.defaultDarkTextColor,
    textAlign: 'center',
  },
  noRefreshText: {
    marginHorizontal: 20,
    marginTop: 10,
    color: Colors.defaultTextColor,
    textAlign: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: 130,
    height: 130,
  },
  icon: {},
});

NoItems.defaultProps = {
  noText: 'No Items Found',
  noRefreshText: false,
  loading: false,
  error: false,
  errorText:
    'Error while fetching data. Please check your internet connection.',
};

export default NoItems;
