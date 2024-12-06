import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import google from '../assets/images/google.png';
import instagram from '../assets/images/instagram.png';
import whatsapp from '../assets/images/whatsapp.png';
import youtube from '../assets/images/youtube.png';

const Redirect = () => {

  // Function to handle redirection
  const handleRedirect = (platform) => {
    let url = '';

    switch (platform) {
      case 'whatsapp':
        url = 'https://wa.me/'; // WhatsApp link (to open WhatsApp chat)
        break;
      case 'instagram':
        url = 'https://www.instagram.com/'; // Instagram link
        break;
      case 'youtube':
        url = 'https://www.youtube.com/'; // YouTube link
        break;
      case 'google':
        url = 'https://www.google.com/'; // Google link
        break;
      default:
        break;
    }

    Linking.openURL(url)
      .catch(err => console.error("Failed to open URL:", err));  // Error handling
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Redirect to Platform</Text>

      <View style={styles.imageContainer}>
        {/* WhatsApp */}
        <TouchableOpacity onPress={() => handleRedirect('whatsapp')}>
          <Image source={whatsapp} style={styles.image} />
        </TouchableOpacity>

        {/* Instagram */}
        <TouchableOpacity onPress={() => handleRedirect('instagram')}>
          <Image source={instagram} style={styles.image} />
        </TouchableOpacity>

        {/* YouTube */}
        <TouchableOpacity onPress={() => handleRedirect('youtube')}>
          <Image source={youtube} style={styles.image} />
        </TouchableOpacity>

        {/* Google */}
        <TouchableOpacity onPress={() => handleRedirect('google')}>
          <Image source={google} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Redirect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  image: {
    width: 60,
    height: 60,
    margin: 10,
  },
});
