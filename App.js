
import React, { useState,useEffect } from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Redirect from './Component/Redirect';
import DesignScreen from './Component/DesignScreen';


const { width, height } = Dimensions.get('window');

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    
    <DesignScreen/>


  )
}

export default App

const styles = StyleSheet.create({})