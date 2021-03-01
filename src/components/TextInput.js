import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Colors, Fonts} from '../themes/index';
import PropTypes from 'prop-types';

const activeColor = '#FF9F0C';
const errorColor = Colors.red;

class textInput extends PureComponent {
  state = {isFocused: false};

  handleInputFocus = () => this.setState({isFocused: true});

  handleInputBlur = () => this.setState({isFocused: false});
  render() {
    return (
      <View style={[styles.container, {...this.props.containerStyle}]}>
        <View style={styles.labelSection}>
          <Text
            style={[
              styles.label,
              this.state.isFocused && {
                color: activeColor,
              },
              this.props.error && {color: errorColor},
            ]}>
            {this.props.label}
          </Text>
        </View>
        <View
          style={[
            styles.textInputSection,
            this.state.isFocused && {
              borderBottomColor: activeColor,
              borderBottomWidth: 2,
            },
            this.props.error && {
              borderBottomColor: errorColor,
              borderBottomWidth: 2,
            },
          ]}>
          {this.props.pre ? (
            <TextInput
              style={[styles.preText]}
              underlineColorAndroid="transparent"
              onChangeText={(text) => {}}
              defaultValue={this.props.pre}
              editable={false}
            />
          ) : null}
          <TextInput
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            style={[styles.textInput, {...this.props.textInputStyle}]}
            underlineColorAndroid="transparent"
            placeholder={this.props.placeholder}
            placeholderStyle={styles.placeholder}
            onChangeText={this.props.onChangeText}
            value={this.props.value}
            editable={this.props.editable}
            keyboardType={this.props.keyboardType}
            maxLength={this.props.maxLength}
            multiline={this.props.multiline}
            autoCapitalize={this.props.autoCapitalize}
          />
        </View>
        {this.props.error && (
          <View style={styles.errorSection}>
            <Text style={styles.error}>{this.props.errorMsg}</Text>
          </View>
        )}
        {this.props.helperText && !this.props.error ? (
          <View style={styles.helperTextSection}>
            <Text style={styles.helperText}>{this.props.helperText}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 8,
  },
  labelSection: {},
  label: {
    fontSize: 12,
    color: '#808080',
    textShadowRadius: 0,
    fontFamily: 'Roboto-Regular',
  },
  textInput: {
    paddingVertical: 5,
    flex: 1,
    fontFamily: 'Roboto-Regular',
  },
  textInputSection: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    //   flex: 1,
    borderBottomColor: '#808080',
    borderBottomWidth: 1,
  },
  errorSection: {
    marginTop: 1.5,
  },
  error: {
    fontSize: 12,
    color: errorColor,
  },
  preText: {
    paddingVertical: 5,
    fontFamily: 'Roboto-Regular',
    // marginRight: 10
  },
  helperText: {
    fontSize: 12,
    color: '#808080',
    textShadowRadius: 0,
  },
  helperTextSection: {
    marginTop: 1.5,
  },
  placeholder: {
    fontFamily: 'Roboto-Regular',
  },
});

textInput.defaultProps = {
  value: '',
  onChangeText: () => {},
  placeholder: '',
  label: '',
  errorMsg: '',
  error: false,
  textInputStyle: {},
  pre: '',
  editable: true,
  keyboardType: 'default',
  maxLength: 35,
  multiline: false,
  helperText: '',
};
textInput.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  errorMsg: PropTypes.string,
  error: PropTypes.bool,
  textInputStyle: PropTypes.object,
  pre: PropTypes.string,
  editable: PropTypes.bool,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  helperText: PropTypes.string,
  autoCaptitalize: PropTypes.string,
};

export default textInput;
