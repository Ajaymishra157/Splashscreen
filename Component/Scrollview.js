import React, {useState} from 'react';
import {
  ScrollView,
  RefreshControl,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import badshah from '../assets/images/badshah.webp';
import neha from '../assets/images/neha-kakkar.webp';
import sanuda from '../assets/images/sanuda.webp';
import uditnarayan from '../assets/images/uditnarayan.png';
import srk from '../assets/images/6.png';
import landon from '../assets/images/8.png';
import kabir from '../assets/images/4.png';
import kajol from '../assets/images/5.png';

const {width, height} = Dimensions.get('window');

const Scrollview = () => {
  const imageSize = width * 0.2;
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Function that handles the refresh action
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      // Yahan pe aap data fetch ya update karne ka kaam kar sakte ho
    }, 100); // 2 seconds after refresh
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={() => console.log('Scrolling started!')}
        onScrollEndDrag={() => console.log('Scrolling ended!')}>
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
  );
};

export default Scrollview;
