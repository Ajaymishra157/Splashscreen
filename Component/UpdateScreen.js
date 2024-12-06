import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';

const UpdateScreen = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [updateError, setUpdateError] = useState('');

//   // Handle Update
//   const handleUpdate = async () => {
//     // Validate input (you can improve validation as per your requirement)
//     if (!newUsername || !newPassword) {
//       setUpdateError('Username and password are required!');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost/newapk/update.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username: newUsername,
//           password: newPassword,
//         }),
//       });

//       const data = await response.json();

//       // Handle the response from the server
//       if (data.Message === 'User updated successfully') {
//         Alert.alert('Success', 'Your details have been updated successfully!');
//       } else {
//         setUpdateError(data.Message);
//       }
//     } catch (error) {
//       setUpdateError('An error occurred. Please try again.');
//       console.error('Error:', error);
//     }
//   };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <View>
        <Text style={{ fontSize: 50, fontFamily: 'Roboto-Bold', color: 'black' }}>Update</Text>
      </View>

      {/* New Username Container */}
      <View style={{ width: '100%', marginTop: 30 }}>
        <Text style={{ fontSize: 16, fontFamily: 'Roboto-Black', paddingLeft: 10, marginBottom: 10, color: '#000000' }}>
          New Username
        </Text>
        <TextInput
          placeholder="Enter Your New Username"
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
          onChangeText={(text) => setNewUsername(text)}
          placeholderTextColor="black"
        />
      </View>

      {/* New Password Container */}
      <View style={{ width: '100%', marginTop: 22 }}>
        <Text style={{ fontSize: 16, fontFamily: 'Roboto-Black', paddingLeft: 10, marginBottom: 10, color: '#000000' }}>
          New Password
        </Text>
        <TextInput
          placeholder="Enter Your New Password"
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
          secureTextEntry={true} // Password field should be hidden
          onChangeText={(text) => setNewPassword(text)}
          placeholderTextColor="black"
        />
      </View>

      {/* Update Button */}
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
        //   onPress={handleUpdate}
        >
          <Text style={{ color: 'white', fontFamily: 'Roboto-Black', fontSize: 20 }}>Update</Text>
        </TouchableOpacity>
      </View>

      {/* Error Message */}
      {updateError ? (
        <Text
          style={{
            color: 'red',
            fontSize: 14,
            marginTop: 5,
            paddingLeft: 10,
            fontFamily: 'Roboto-Regular',
          }}
        >
          {updateError}
        </Text>
      ) : null}
    </View>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({});
