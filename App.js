import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Singers from './Component/Singers';
import Scrollview from './Component/Scrollview';

const {width, height} = Dimensions.get('window');

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Scrollview />;
};

export default App;

const styles = StyleSheet.create({});
