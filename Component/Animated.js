import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import srk from '../assets/images/4.png';

const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity);

const Animated = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5'}}>
      {/* Image with zoom and fade-in animation */}
      <Animatable.Image
        source={srk}
        style={{height: 400, width: '80%', backgroundColor: 'white'}}
        animation={'zoomIn'}
        duration={1400}
        delay={500}  // Delay added to sync with other animations
      />
      
      {/* Animated button with bounce and rotate effect */}
      <AnimatedButton
        style={{
          width: 70,
          height: 70,
          backgroundColor: '#ff6347',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 35,  // Makes the button circular
          marginTop: 30,
        }}
        animation="bounceIn"
        duration={1200}
        iterationCount="infinite"  // Makes the button bounce indefinitely
        direction="alternate"  // Reverses the direction of the bounce
      >
        <Animatable.Text
          animation="pulse"  // Pulse animation on text inside the button
          duration={1500}
          iterationCount="infinite"
          style={{color: 'white', fontWeight: 'bold'}}
        >
          Press Me
        </Animatable.Text>
      </AnimatedButton>

     
      <Animatable.Text
        animation="fadeInUp"  // Fade in and slide up effect
        duration={1200}
        style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}
      >
        Enjoy the animations!
      </Animatable.Text>
    </View>
  );
};

export default Animated;

const styles = StyleSheet.create({});
