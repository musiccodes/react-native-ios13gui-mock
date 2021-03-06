import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';

import Application from '../../components/Application';

const { width, height } = Dimensions.get('window');

let apps = [
  {
    name: 'Calculator',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Calculator.png'),
  },
  {
    name: 'News',
    icon: require('../../assets/images/dark/Graphics/AppIcons/News.png'),
    number: 1,
  },
  {
    name: 'iTunes Store',
    icon: require('../../assets/images/dark/Graphics/AppIcons/iTunes.png'),
  },
  {
    name: 'App Store',
    icon: require('../../assets/images/dark/Graphics/AppIcons/AppStore.png'),
    number: 4,
  },
  {
    name: 'iBooks',
    icon: require('../../assets/images/dark/Graphics/AppIcons/iBooks.png'),
  },
  {
    name: 'TV',
    icon: require('../../assets/images/dark/Graphics/AppIcons/TV.png'),
  },
  {
    name: 'Home',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Home.png'),
  },
  {
    name: 'Health',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Health.png'),
  },
  {
    name: 'Settings',
    icon: require('../../assets/images/dark/Graphics/AppIcons/Settings.png'),
  },
];

export default class HomeSlide1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" hidden={false} />
        <View style={styles.apps}>
          {apps.map((app, i) => {
            return <Application app={app} key={i} />;
          })}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  apps: {
    width: 329,
    height: 485,
    marginTop: 28,
    marginLeft: 22,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: '#FFF',
  },
  app: {
    width: 74,
    height: 80,
    // marginLeft: 6,
    marginRight: 8,
    marginBottom: 23,
    // backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appIcon: {
    width: 60,
    height: 60,
  },
  appText: {
    fontFamily: 'SFProText-Regular',
    fontSize: 12,
    color: '#FFFFFF',
    letterSpacing: 0,
  },
  dock: {
    marginLeft: 10,
    position: 'absolute',
    bottom: 10,
    width: 355,
    height: 94,
    borderRadius: 31,
    backgroundColor: 'rgba(255,255,255,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
