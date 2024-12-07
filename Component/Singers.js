import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  RefreshControl,
} from 'react-native';
import React from 'react';
import badshah from '../assets/images/badshah.webp';
import neha from '../assets/images/neha-kakkar.webp';
import sanuda from '../assets/images/sanuda.webp';
import uditnarayan from '../assets/images/uditnarayan.png';
import srk from '../assets/images/6.png';
import landon from '../assets/images/8.png';
import kabir from '../assets/images/4.png';
import kajol from '../assets/images/5.png';

const {width, height} = Dimensions.get('window');
const Singers = () => {
  const imageSize = width * 0.2;
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
        }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{height: 50}}
          contentContainerStyle={{padding: 10}}
          onScroll={e => console.log(e.nativeEvent.contentOffset)}>
          <Image
            source={badshah}
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: 50,
              margin: 5,
            }}
          />
          <Image
            source={neha}
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: 50,
              margin: 5,
            }}
          />
          <Image
            source={sanuda}
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: 50,
              margin: 5,
            }}
          />
          <Image
            source={uditnarayan}
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: 50,
              margin: 5,
            }}
          />
          <Image
            source={srk}
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: 50,
              margin: 5,
            }}
          />
          <Image
            source={kabir}
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: 50,
              margin: 5,
            }}
          />
          <Image
            source={kajol}
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: 50,
              margin: 5,
            }}
          />
          <Image
            source={landon}
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: 50,
              margin: 5,
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Singers;

const styles = StyleSheet.create({});
