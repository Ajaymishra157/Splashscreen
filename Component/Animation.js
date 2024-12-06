import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';

const Animation = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity is 0

  const fadeIn = () => {
    // Animation to fade in
    Animated.timing(fadeAnim, {
      toValue: 1, // Final opacity is 1
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };

  const fadeOut = () => {
    // Animation to fade out
    Animated.timing(fadeAnim, {
      toValue: 0, // Final opacity is 0
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { opacity: fadeAnim }]}>
        <Text style={styles.text}>Hello, Animation!</Text>
      </Animated.View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={fadeIn}>
          <Text style={styles.buttonText}>Fade In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={fadeOut}>
          <Text style={styles.buttonText}>Fade Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Animation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  box: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200EE',
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
