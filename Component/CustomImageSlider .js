import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import kabirsingh from '../assets/images/3.jpeg';
import namsteengland from '../assets/images/5.png';
import srk from '../assets/images/8.png';
import kajol from '../assets/images/6.png';

const { width } = Dimensions.get('window');

const images = [
    { id: 1, source: kabirsingh },
    { id: 2, source: namsteengland },
    { id: 3, source: srk },
    { id: 4, source: kajol },
  ];

const CustomImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Function to handle autoplay effect
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Change image every 2 seconds
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.source} style={styles.image} resizeMode="cover" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Custom Image Slider</Text>
      
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const contentOffsetX = e.nativeEvent.contentOffset.x;
          const currentIndex = Math.floor(contentOffsetX / width);
          setActiveIndex(currentIndex);
        }}
        scrollEventThrottle={16} // For smooth performance
        contentContainerStyle={styles.flatListContent}
      />

      <View style={styles.pagination}>
        {images.map((_, index) => (
          <Text
            key={index}
            style={[
              styles.dot,
              activeIndex === index && styles.activeDot, // Change active dot style
            ]}
          >
            ●
          </Text>
        ))}
      </View>

      {/* Optional: Play/Pause button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setAutoplay(!autoplay)}
      >
        <Text style={styles.buttonText}>{autoplay ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flatListContent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: width * 0.8, // Make image 80% of the screen width
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    fontSize: 30,
    color: 'rgba(0, 0, 0, 0.3)',
    margin: 5,
  },
  activeDot: {
    color: '#000',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomImageSlider;
