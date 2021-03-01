import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Colors, Metrics} from '../themes/index';

const LoadingView = (props) => {
  const {layout, width, height, isVisible, customLayout} = props;
  if (!isVisible) {
    return null;
  }
  return (
    <View
      style={
        layout === 'full'
          ? [styles.fullLayout, customLayout]
          : [styles.wrappedLayout, {width: width, height: height}, customLayout]
      }>
      <ActivityIndicator
        size={props.size}
        type={props.type}
        color={props.color}
      />
      {props.message.length > 0 ? (
        <Text style={styles.message}>{props.message}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrappedLayout: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  fullLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  spinner: {},
  message: {
    marginTop: 15,
  },
});
LoadingView.defaultProps = {
  isVisible: true,
  size: Metrics.aIDefaultSize,
  color: Colors.success,
  layout: 'full',
  height: 140,
  width: '100%',
  customLayout: {},
  message: '',
};

LoadingView.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  layout: PropTypes.string.isRequired,
  message: PropTypes.string,
};
export default LoadingView;
