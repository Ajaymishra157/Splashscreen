import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import kabirsingh from '../assets/images/4.png';
import namsteengland from '../assets/images/5.png';
import srk from '../assets/images/8.png';
import kajol from '../assets/images/6.png';

const data = [
  { id: '1', title: 'Item 1', image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Item 2', image: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Item 3', image: 'https://via.placeholder.com/150' },
  { id: '4', title: 'Item 4', image: 'https://via.placeholder.com/150' },
  { id: '5', title: 'Item 5', image: 'https://via.placeholder.com/150' },
  { id: '6', title: 'Item 6', image: 'https://via.placeholder.com/150' },
];

const GridView = () => {
  const renderItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2} // Specifies the number of columns
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default GridView;
