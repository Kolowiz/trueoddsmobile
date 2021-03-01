import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import {Colors, Fonts} from '../../themes/index';
import PropTypes from 'prop-types';
import styles from './styles';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from '../Icon';

const DefaultBar = (props) => {
  return (
    <ElevatedView
      style={[
        styles.navGradient,
        {backgroundColor: Colors.primaryColor},
        {...props.style},
      ]}
      elevation={props.elevation}>
      <View style={styles.left}>
        {props.back && !props.cancel && (
          <TouchableOpacity
            onPress={props.onBackPress}
            style={styles.touchable}>
            <Icon
              size={28}
              color={props.dark ? Colors.white : Colors.defaultDarkTextColor}
              name="long-arrow-left"
            />
          </TouchableOpacity>
        )}
        {props.cancel && (
          <TouchableOpacity
            onPress={props.onBackPress}
            style={styles.touchable}>
            <Icon
              size={28}
              color={props.dark ? Colors.white : Colors.defaultDarkTextColor}
              name="times"
            />
          </TouchableOpacity>
        )}
        <View style={[styles.title]}>
          <Text
            numberOfLines={1}
            style={[
              styles.titleText,
              {
                fontSize: props.subTitle ? 18 : 20,
                marginBottom: props.subTitle ? -5 : 0,
                marginLeft: 10,
                color: props.dark ? Colors.white : props.titleColor,
              },
            ]}>
            {props.title}
          </Text>
          {props.subTitle ? (
            <Text style={styles.subTitleText}>{props.subTitle}</Text>
          ) : null}
        </View>
      </View>

      <View style={styles.right}>
        {props.right &&
          props.right.map((btn) => {
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
        {props.popup && (
          <Menu style={{marginTop: 2, marginRight: 2}}>
            <MenuTrigger
              customStyles={{
                marginTop: -2,
                marginRight: -2,
              }}>
              <View style={styles.touchable}>
                <Icon
                  size={27}
                  color={Colors.defaultDarkTextColor}
                  name="ellipsis-v"
                />
              </View>
            </MenuTrigger>
            <MenuOptions>
              {props.popup.map((option) => {
                return (
                  <MenuOption
                    key={props.popup.indexOf(option)}
                    value={option.label}
                    onSelect={option.onPress}>
                    <Text style={styles.menuText}> {option.label}</Text>
                  </MenuOption>
                );
              })}
            </MenuOptions>
          </Menu>
        )}
      </View>
    </ElevatedView>
  );
};

export default DefaultBar;
