import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TopBar from '../../../components/TopBar';
import {Colors} from '../../../themes/index';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {componentId} = this.props;
    return (
      <View style={styles.container}>
        <TopBar title={'About'} componentId={componentId} back={true} dark />
        <View style={styles.screen}>
          {/* <Image
            source={require('../../../assets/icons/arc-logo.png')}
            style={styles.logo}
          /> */}
          <View style={styles.title}>
            <Text style={styles.true}>True</Text>
            <Text style={styles.odds}>Odds</Text>
          </View>
          <Text style={styles.versionInfo}>Version 1.1</Text>
          <Text style={styles.copyright}> {'\u00A9'} 2021 trueodds.co </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.screenColor,
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 5,
    marginBottom: 20,
  },

  title: {flexDirection: 'row'},
  true: {
    fontSize: 23,
    color: Colors.white,
    fontFamily: 'ProductSans-Black',
    marginRight: 2,
  },
  odds: {
    fontSize: 23,
    color: Colors.secondaryColor,
    fontFamily: 'ProductSans-Black',
  },

  versionInfo: {
    color: Colors.defaultTextColor,
    marginBottom: 5,
  },
  copyright: {
    color: Colors.defaultTextColor,
  },
});

export default About;
