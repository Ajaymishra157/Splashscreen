import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import React from 'react';
import srk from '../assets/images/6.png';

const {width, height} = Dimensions.get('window');

const ReduxExample = () => {
  const imageSize = width * 0.1;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={srk}
        style={{
          width: imageSize,
          height: imageSize,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: 'black',
        }}
      />
      <View>
        <Text style={{color: 'black', fontSize: 15}}>
          This is the Example of Counter
        </Text>
      </View>
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',

            borderRadius: 5,
            width: width * 0.1,
            height: height * 0.05,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 15}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'lightgrey',

            borderRadius: 5,
            width: width * 0.1,
            height: height * 0.05,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 7,
          }}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'skyblue',
            borderRadius: 5,
            width: width * 0.1,
            height: height * 0.05,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReduxExample;
