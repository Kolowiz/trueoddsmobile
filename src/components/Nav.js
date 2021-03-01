import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Colors} from '../themes/index';

function preventDuplicateNavigation(Component) {
  return class PreventDuplicateNavigation extends React.Component {
    componentDidMount = () => {
      this.navigationEventListener = Navigation.events().bindComponent(this);
    };
    componentDidDisappear = () => {
      this._navigated = null;
    };

    _navigated = null;

    navigateTo = ({screenName, componentId, passProps, options}) => {
      if (!this._navigated) {
        Navigation.push(componentId, {
          component: {
            name: screenName,
            passProps: passProps,
            options: {
              ...options,
              bottomTabs: {
                visible: false,
                animate: false,
                drawBehind: true,
              },
            },
          },
        });
      }

      this._navigated = true;
    };

    render() {
      return <Component {...this.props} navigateTo={this.navigateTo} />;
    }
  };
}

export default preventDuplicateNavigation;
