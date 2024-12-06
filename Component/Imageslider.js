import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const ImageSlider = () => {

  const abc = require('../assets/images/person.png');
  console.log("hello",abc)
  const image5 = require('../assets/images/5.png');
  const image8 = require('../assets/images/8.png');
  const image6 = require('../assets/images/6.png');
  const images = [
    { id: 1, source: abc },
    { id: 2, source: image5 },
    { id: 3, source: image8 },
    { id: 4, source: image6 },
  ];
   console.log("images",images);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Image Slider</Text>
      
      <Swiper
        style={styles.wrapper}
        showsPagination={true}
        autoplay={true}
        autoplayTimeout={3} 
        paginationStyle={styles.pagination} 
        dotColor='grey' 
        activeDotColor="blue" 
        onIndexChanged={(index) => setCurrentIndex(index)} 
      >
        {images.map((item) => (
          <View key={item.id} style={styles.slideContainer}>
            <Image source={item.source} style={styles.image} resizeMode="contain" />
          </View>
        ))}
        
      </Swiper>
      

      <Text style={styles.indexText}>Current Slide Index: {currentIndex}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  wrapper: {
    width: '100%',
    height: 250,
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  pagination: {
    bottom: 10,
  },
  indexText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default ImageSlider;
