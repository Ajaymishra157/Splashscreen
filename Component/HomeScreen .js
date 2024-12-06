import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    require('../assets/images/5.jpeg'),
    require('../assets/images/4.jpeg'),
    require('../assets/images/5.jpeg'),
    require('../assets/images/6.jpeg'),
  
  ];

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselContainer}>
        {/* Displaying the current image */}
        <View style={styles.imageContainer}>
          <Image source={images[currentIndex]} style={styles.image} />
        </View>

        {/* Navigation buttons */}
        <View style={styles.navigationButtons}>
          <TouchableOpacity onPress={prevSlide} style={styles.button}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={nextSlide} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: width,
    height: height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'cover',
  },
  navigationButtons: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
