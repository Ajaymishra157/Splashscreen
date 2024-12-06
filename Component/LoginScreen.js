import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'react-native-axios'

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async () => {
    console.log("Login button clicked");
  
    // Validate input
    if (!email || !password) {
      setLoginError('email and password are required!');
      return;
    }
  
    try {
      const response = await axios.post('http://10.0.2.2:80/Webmasters/insert.php', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email:email,
          password:password
        })
      }, {
        
      });

      const data = await response.json();
      // Check if the message is 'User inserted successfully'
      if (data.Message === 'User inserted successfully') {
        Alert.alert('Success', 'You have successfully logged in!');
      } else {
        setLoginError(data.Message || 'Login failed');
      }
    } catch (error) {
      setLoginError('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <View>
        <Text style={{ fontSize: 50, fontFamily: 'Roboto-Bold', color: 'black' }}>Login</Text>
      </View>

      {/* email (or email) Container */}
      <View style={{ width: '100%', marginTop: 30 }}>
        <Text style={{ fontSize: 16, fontFamily: 'Roboto-Black', paddingLeft: 10, marginBottom: 10, color: '#000000' }}>
          Email
        </Text>
        <View>
          <TextInput
            placeholder="Enter Your email"
            style={{
              fontFamily: 'Roboto-Light',
              fontSize: 14,
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 20,
              backgroundColor: '#F3F2F2',
              height: 43,
              color: 'black',
            }}
            onChangeText={(text) => setemail(text)}
            placeholderTextColor="black"
          />
        </View>
      </View>

      {/* Password Container */}
      <View style={{ width: '100%', marginTop: 22 }}>
        <Text style={{ fontSize: 16, fontFamily: 'Roboto-Black', paddingLeft: 10, marginBottom: 10, color: '#000000' }}>
          Password
        </Text>
        <View>
          <TextInput
            placeholder="Enter Your Password"
            style={{
              fontFamily: 'Roboto-Light',
              fontSize: 14,
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 20,
              backgroundColor: '#F3F2F2',
              height: 43,
              color: 'black',
            }}
            secureTextEntry={passwordVisible}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="black"
          />
          <TouchableOpacity
            style={{ position: 'absolute', right: 10, top: 8 }}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            {/* Eye Icon for password visibility can be added */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Login Button */}
      <View style={{ width: '100%' }}>
        <TouchableOpacity
          style={{
            marginTop: 50,
            backgroundColor: '#0D6EFD',
            borderRadius: 10,
            alignItems: 'center',
            height: 50,
            justifyContent: 'center',
            width: '100%',
          }}
          onPress={handleLogin}
        >
          <Text style={{ color: 'white', fontFamily: 'Roboto-Black', fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Error Message */}
      {loginError ? (
        <Text
          style={{
            color: 'red',
            fontSize: 14,
            marginTop: 5,
            paddingLeft: 10,
            fontFamily: 'Roboto-Regular',
          }}
        >
          {loginError}
        </Text>
      ) : null}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
