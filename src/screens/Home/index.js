import React, {useEffect, useCallback, useState} from 'react';
import {View, StyleSheet, SectionList, Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import axios from '../../services/axios';
import LoadingView from '../../components/LoadingView';
import NoItems from '../../components/NoItems';
import PredictionItem from './PredictionItem';
import SectionTitle from './SectionTitle';
import {Colors, Metrics} from '../../themes';
import TopBar from './TopBar';
import Nav from '../../components/Nav';
import snackbar from '../../lib/snackbar';
import {groupBy} from '../../lib/helpers';

const groupByDate = groupBy('date');
const formatListData = (data) => {
  const result = [];
  Object.keys(data).map((key) => {
    result.push({
      title: `${key}`,
      data: data[key],
    });
  });
  return result;
};
const Home = ({navigateTo, componentId}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      const {notification} = remoteMessage;
      const {title} = notification;
      snackbar({
        message: `${title}`,
      });
    });
    const subscribeToPredictions = async () => {
      await messaging()
        .subscribeToTopic('predictions')
        .then(() => {});
    };
    subscribeToPredictions();
    return unsubscribe;
  }, []);

  useEffect(() => {
    fetchData(page);
  }, [page, fetchData]);

  const fetchData = useCallback(async (pg) => {
    const limit = 20;
    const start = (pg - 1) * limit;
    try {
      const response = await axios.get(
        `/slips?_start=${start}&_limit=${limit}&_sort=date:DESC`,
      );
      if (!response) {
        setLoading(false);
        setLoadingMore(false);
        setRefreshing(false);
        return;
      }

      const {data: responseData} = response;
      const groupedData = formatListData(groupByDate(responseData));
      setLoading(false);
      setLoadingMore(false);
      setRefreshing(false);
      console.log('Grouped', groupedData);
      setData((d) => [...d, ...groupedData]);
    } catch (err) {
      setData([]);
      setLoading(false);
      setLoadingMore(false);
      setRefreshing(false);
    }
  }, []);

  const onPressItem = (dt) => {
    navigateTo({
      screenName: 'SlipListScreen',
      componentId,
      passProps: {
        data: dt,
      },
      options: {
        statusBar: {
          backgroundColor: Colors.primaryColor,
          style: 'light',
        },
      },
    });
  };

  const renderItem = ({item, index}) => {
    return (
      <PredictionItem data={item} index={index} onPressItem={onPressItem} />
    );
  };

  const renderSectionHeader = ({section: {title}}) => {
    return <SectionTitle title={title} />;
  };

  const _keyExtractor = (item, index) => `${item.id}`;

  const renderEmptyView = () => {
    if (refreshing) {
      return (
        <View style={styles.refreshingView}>
          <Text style={styles.refreshingText}>Refreshing...</Text>
        </View>
      );
    }
    return <NoItems noRefreshText error={false} />;
  };

  const renderPaginationWaitingView = () => {
    if (loadingMore) {
      return (
        <LoadingView
          customLayout={{
            height: 100,
          }}
          size={Metrics.aIWaitingViewSize}
        />
      );
    } else {
      return null;
    }
  };
  const onRefresh = () => {
    setRefreshing(true);
    setLoading(false);
    setData([]);
    if (page === 1) {
      fetchData(1);
    } else {
      setPage(1);
    }
  };

  const onLoadMore = () => {
    setLoadingMore(true);
    setPage((p) => p + 1);
  };

  const itemSeparatorComponent = () => {
    return <View style={styles.divider} />;
  };

  return (
    <View style={styles.container}>
      <TopBar onRefresh={onRefresh} />

      <View style={styles.screen}>
        {loading ? (
          <LoadingView size={Metrics.aIWaitingViewSize} />
        ) : (
          <SectionList
            sections={data}
            // extraData={flatlist}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            keyExtractor={_keyExtractor}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            numColumns={1}
            onRefresh={onRefresh}
            refreshing={refreshing}
            onEndReached={onLoadMore}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={renderPaginationWaitingView}
            ListEmptyComponent={renderEmptyView}
            ItemSeparatorComponent={itemSeparatorComponent}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  screen: {
    flex: 1,
    backgroundColor: Colors.screenColor,
  },
  emptyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {},
  refreshingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  refreshingText: {
    color: Colors.defaultTextColor,
    fontFamily: 'Roboto-Medium',
  },
});

export default Nav(Home);
