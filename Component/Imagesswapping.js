import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';
import kabirsingh from '../assets/images/4.png';
import namsteengland from '../assets/images/5.png';
import srk from '../assets/images/8.png';
import kajol from '../assets/images/6.png';
import Swiper from 'react-native-swiper';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const Imagesswapping = () => {
  const images = [
    { id: 1, source: srk, name: 'Shah Rukh Khan' },
    { id: 2, source: kajol, name: 'Kajol' },
    { id: 3, source: kabirsingh, name: 'Kabir Singh' },
    { id: 4, source: namsteengland, name: 'Namaste England' },
  ];
  
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
        dotColor="grey"
        activeDotColor="blue"
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {images.map((item) => (
          <View key={item.id} style={styles.slideContainer}>
            <Image source={item.source} style={styles.image} resizeMode="contain"  />
            <Text >{item.name}</Text>
          </View>
        ))}
      </Swiper>
      
      <Text style={styles.indexText}>Current Slide Index: {currentIndex}</Text>
    </View>
  );
};

export default Imagesswapping;

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
  imageName: { // Style for names
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
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
