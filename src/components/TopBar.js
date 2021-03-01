import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import TransparentBar from './TopBar/TransparentBar';
import SearchBar from './TopBar/SearchBar';
import SearchTitleBar from './TopBar/SearchTitleBar';
import DefaultBar from './TopBar/DefaultBar';
import {Colors, Fonts} from '../themes/index';

class TopBar extends Component {
  /*
   * When navbar is transparent, Content is drawn Under
   * Default Linear Gradient flows Vertically
   */
  onBackPress = () => {
    const {componentId, onBackPress} = this.props;
    if (onBackPress) {
      return onBackPress();
    }
    return Navigation.pop(componentId);
  };

  render() {
    const {search, transparent, searchTitleBar} = this.props;
    //Switch navbar depending on state of the screen
    if (search) {
      return <SearchBar {...this.props} onBackPress={this.onBackPress} />;
    } else if (transparent) {
      return (
        <TransparentBar
          {...this.props}
          onBackPress={this.onBackPress}
          gradient={this.props.gradient}
        />
      );
    } else if (searchTitleBar) {
      return <SearchTitleBar {...this.props} onBackPress={this.onBackPress} />;
    } else {
      return <DefaultBar {...this.props} onBackPress={this.onBackPress} />;
    }
  }
}

TopBar.defaultProps = {
  title: '',
  titleColor: Colors.defaultDarkTextColor,
  subTitle: '',
  right: [],
  left: [],
  style: {},
  dark: false,
  transparent: false,
  transparentStatus: true,
  searchTitleBar: false,
  statusBarHeight: StatusBar.currentHeight,
  back: true,
  cancel: false,
  search: false,
  elevation: 1,
  onPressSearchBar: () => {},
};

TopBar.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  subTitle: PropTypes.string,
  right: PropTypes.array,
  back: PropTypes.bool,
  left: PropTypes.array,
  transparent: PropTypes.bool,
  cancel: PropTypes.bool,
  search: PropTypes.bool,
  onBackPress: PropTypes.func,
};

export default TopBar;
