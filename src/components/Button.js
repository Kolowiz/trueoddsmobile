import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Colors, Fonts} from '../themes/index';
import ElevatedView from 'react-native-elevated-view';

const button = props => {
  const {
    customStyle,
    btnColor,
    textColor,
    outline,
    icon,
    onPress,
    loading,
    children,
  } = props;

  if (outline) {
    return (
      <ElevatedView style={{borderRadius: 50}} elevation={2}>
        <TouchableOpacity
          style={[styles.outlineBtn, {borderColor: btnColor}, {...customStyle}]}
          activeOpacity={0.8}
          onPress={onPress || null}>
          {loading ? <ActivityIndicator color={textColor} /> : null}

          {!loading && icon && icon()}
          <Text style={[styles.text, {color: btnColor}]}>{children}</Text>
        </TouchableOpacity>
      </ElevatedView>
    );
  }
  return (
    <ElevatedView style={styles.elevated} elevation={0}>
      <TouchableOpacity
        style={[styles.btn, {backgroundColor: btnColor}, {...customStyle}]}
        activeOpacity={0.8}
        onPress={onPress || null}>
        {loading ? <ActivityIndicator color={textColor} /> : null}

        {!loading && icon && icon()}
        <Text
          style={[
            styles.text,
            {color: textColor, marginLeft: icon() ? 12 : 0},
          ]}>
          {children}
        </Text>
      </TouchableOpacity>
    </ElevatedView>
  );
};

button.defaultProps = {
  btnColor: Colors.defaultBlue,
  textColor: Colors.snow,
  customStyle: {},
  icon: () => null,
  onPress: () => {},
  loading: false,
};

const styles = StyleSheet.create({
  btn: {
    //padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  elevated: {
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '100',
  },
  outlineBtn: {
    flexDirection: 'row',
    //   justifyContent: "center",
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  roundedBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 50,
  },
});
export default button;
