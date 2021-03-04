import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Moment from 'react-moment';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

import {Colors} from '../../../themes';
import TopBar from '../../../components/TopBar';
import NoItems from '../../../components/NoItems';
import SlipItem from './SlipItem';
import {SolidIcon} from '../../../components/Icon';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-9918450635846920/1427579197';

const Status = ({status}) => {
  if (status === 'pending') {
    return (
      <Text style={[styles.status, {color: Colors.default}]}>{status}</Text>
    );
  } else if (status === 'won') {
    return (
      <Text style={[styles.status, {color: Colors.success}]}>{status}</Text>
    );
  } else {
    return (
      <Text style={[styles.status, {color: Colors.danger}]}>{status}</Text>
    );
  }
};
class SlipList extends Component {
  renderEmptyView = () => {
    return <NoItems error={false} />;
  };

  _keyExtractor = (item, index) => `${item.id}`;

  renderItem = ({item, index}) => {
    return (
      <SlipItem data={item} index={index} onPressItem={this.onPressItem} />
    );
  };

  render() {
    const {data, componentId} = this.props;
    const {slip_list, created_at, bet_status, slip_category} = data;
    const totalOdds = slip_list
      .reduce((acc, val) => {
        return parseFloat(acc) * parseFloat(val.odd);
      }, 1)
      .toFixed(2);
    const won = slip_list.filter((slip) => slip.game_status === 'won').length;
    const lost = slip_list.filter((slip) => slip.game_status === 'lost').length;
    const total = slip_list.length;
    // console.log('slip list', data);
    return (
      <View style={styles.container}>
        <TopBar
          title={'View Slip'}
          componentId={componentId}
          back={true}
          dark
        />
        <View style={styles.screen}>
          <View style={styles.slipDetails}>
            <View style={styles.row}>
              <Text style={styles.date}>Prediction for </Text>
              <Moment element={Text} style={styles.date} format="D MMMM YYYY">
                {created_at}
              </Moment>
            </View>
            <Text style={styles.slipId}>SLIP ID #{data.id}</Text>
            <View style={styles.row}>
              <Status status={bet_status} />
              <SolidIcon
                name={'circle'}
                size={5}
                color={Colors.defaultTextColor}
                style={styles.dotSeperator}
              />
              <Text style={styles.slipCategory}>
                {(slip_category && slip_category.name) || ''}
              </Text>
            </View>
            <View style={styles.slipProgress}>
              <View>
                <Text style={styles.progTitle}>Total Odds</Text>
                <Text style={styles.prog}>{totalOdds}</Text>
              </View>
              <View>
                <Text style={styles.progTitle}>Won/Lost/Total</Text>
                <Text style={styles.prog}>{`${won}/${lost}/${total}`}</Text>
              </View>
            </View>
          </View>
          <FlatList
            data={slip_list}
            contentContainerStyle={{
              paddingBottom: 0.5,
              borderTopWidth: 0.5,
              borderBottomWidth: 0.5,
              borderColor: '#5B5B5B',
            }}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={this.renderEmptyView}
          />
          <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.FULL_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
      </View>
    );
  }
}

SlipList.defaultProps = {
  data: {
    slip_list: [],
    created_at: new Date(),
    bet_status: '',
    slip_category: '',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.screenColor,
  },
  slipDetails: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  date: {
    color: '#BABABA',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    textTransform: 'capitalize',
    fontSize: 15,
  },
  dotSeperator: {
    marginHorizontal: 7,
  },
  slipId: {
    marginTop: 15,
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    color: Colors.defaultTextColor,
  },
  slipCategory: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: Colors.defaultTextColor,
  },
  slipProgress: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  progTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: Colors.defaultTextColor,
  },
  prog: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: '#54B395',
  },
});

export default SlipList;
