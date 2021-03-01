import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import {Colors, Fonts} from '../../themes/index';
import Icon from '../Icon';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchBar = props => {
  return (
    <ElevatedView
      style={[styles.navGradient, {...props.style}]}
      elevation={props.elevation}>
      <View style={styles.left}>
        {props.back && !props.cancel && (
          <TouchableOpacity
            onPress={props.onBackPress}
            style={styles.touchable}>
            <Icon size={28} color={'#000000'} name="long-arrow-left" />
          </TouchableOpacity>
        )}

        <View
          style={[
            styles.title,
            {
              flex: 1,
            },
          ]}>
          <TextInput
            value={props.searchText}
            placeholder={'Search'}
            onChangeText={props.onChangeText}
            style={styles.textInput}
            underlineColorAndroid="transparent"
            autoFocus
          />
        </View>
      </View>

      <View style={styles.right}>
        {props.right &&
          props.right.map(btn => {
            return (
              <TouchableOpacity
                onPress={() => btn.onPress()}
                key={props.right.indexOf(btn)}
                style={styles.touchable}
                disabled={props.rightDisabled}>
                {btn.icon()}
              </TouchableOpacity>
            );
          })}
      </View>
    </ElevatedView>
  );
};

export default SearchBar;
