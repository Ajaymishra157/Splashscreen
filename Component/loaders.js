import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import kajol from '../assets/images/6.png';

const Loaders = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or any async action
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);  // Simulate 3 seconds loading
  }, []);

  return (
    <View style={{  flex: 1,justifyContent: 'center',alignItems: 'center'}}>
        <Image source={kajol} color='black' style={{borderRadius:3000}}/>
      <ShimmerPlaceHolder
        visible={!isLoading}
        style={{width: 200,height: 50,borderRadius: 10,marginBottom: 20}}
      >
        {/* Content that will be shown after loading */}
        <Text style={{ fontSize: 18,color: '#000',}}>Hello, this is my content!</Text>
        
      </ShimmerPlaceHolder>

      {/* Optionally, you can display another element when not loading */}
      {isLoading && (
        <View style={styles.shimmerPlaceholderContainer}>
          <ShimmerPlaceHolder style={{width: 200,height: 50,borderRadius: 10,marginBottom: 20,}} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  
  shimmer: {
    
  },
  shimmerPlaceholderContainer: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  text: {
   
  },
});

export default Loaders;
