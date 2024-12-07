import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Bottomtab from './Bottomtab';
import account from '../assets/images/user.png';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import pin from '../assets/images/pin.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {ENDPOINTS} from './Constant';

const ProfileScreen = ({navigation}) => {
  const [profileData, setProfileData] = useState(null);
  const [status, setStatus] = useState(null); // Initial state for status is set to false
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  //Capitalized words
  function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }

  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'No',
        style: 'Cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            await AsyncStorage.removeItem('userToken');
            await AsyncStorage.removeItem('staff_id');
            console.log('User logged out successfully');
            navigation.reset({
              index: 0,
              routes: [{name: 'LoginScreen'}],
            });
          } catch (error) {
            console.error('Error removing user data:', error);
          }
        },
      },
    ]);
  };

  // Function to fetch profile data
  const fetchProfileData = async () => {
    const salesmanId = await AsyncStorage.getItem('staff_id'); // Get the salesman ID from AsyncStorage
    if (salesmanId) {
      try {
        const response = await fetch(ENDPOINTS.MY_PROFILE, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            salesman_id: salesmanId,
          }),
        });

        const data = await response.json(); // Parse the JSON from the response
        console.log('details', data);
        if (data.code === 200) {
          setProfileData(data.Payload[0]); // Set the profile data
          setStatus(data.Payload.salesman_status);
        } else {
          // setStatus(false);
          console.error('Error fetching profile data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    }
  };
  // Date format for date
  const formatDate = dateString => {
    const options = {day: '2-digit', month: 'short', year: 'numeric'};
    const date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return null; // Return null or any default value for invalid dates
    }

    return date.toLocaleDateString('en-GB', options).replace(',', ''); // Replace comma for the desired format
  };
  useEffect(() => {
    // if (profileData?.salesman_status === 'Deactive') {
    //   setModalVisible(true);
    // } else {
    //   setModalVisible(false);
    // }
  }, [profileData]);

  useFocusEffect(
    React.useCallback(() => {
      fetchProfileData();
    }, []),
  );

  if (profileData) {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: '#0D6EFD',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{color: 'white', fontSize: 20, fontFamily: 'Roboto-Medium'}}>
            My Profile
          </Text>
        </View>

        {/* <TouchableOpacity  style={{
      opacity: profileData.salesman_status === 'Active' ? 1 : 0,
    }}
    disabled={profileData.salesman_status === 'Active'}> */}
        <View
          style={{
            width: '100%',
            height: 90,
            backgroundColor: '#e3eeff',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={{width: '30%', height: 90, flexDirection: 'row'}}>
            <Image
              source={account}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                backgroundColor: 'white',
                marginTop: 9,
                marginLeft: 10,
              }}
            />
            {/* <TouchableOpacity style={{width:'30%',height:30,position: 'absolute', top: 55, left: 60,borderRadius:50,alignItems:'center',justifyContent:'center' ,backgroundColor:'white'}}>
            <Feather name='edit-2' size={20} color='black'  />
            </TouchableOpacity> */}
          </View>
          <View style={{flex: 1, height: 90, justifyContent: 'flex-start'}}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Roboto-Medium',
                fontSize: 20,
                marginTop: 30,
              }}>
              {capitalizeWords(
                profileData ? profileData.staff_name : 'Loading...',
              )}
            </Text>
          </View>
        </View>

        <View style={{height: 70, width: '100%', flexDirection: 'row'}}>
          <View
            style={{alignItems: 'center', width: 90, justifyContent: 'center'}}>
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#dcdcdc',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="user" size={30} color="black" />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              width: 90,
              flex: 1,
              flexDirection: 'column',
              borderBottomWidth: 1,
              borderColor: '#dcdcdc',
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: 'grey',
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
              }}>
              Name
            </Text>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Roboto-Medium',
                marginTop: 5,
              }}>
              {' '}
              {capitalizeWords(
                profileData ? profileData.staff_name : 'Loading...',
              )}
            </Text>
          </View>
        </View>

        <View style={{height: 70, width: '100%', flexDirection: 'row'}}>
          <View
            style={{alignItems: 'center', width: 90, justifyContent: 'center'}}>
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#dcdcdc',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name="whatsapp" size={30} color="black" />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              width: 90,
              flex: 1,
              flexDirection: 'column',
              borderBottomWidth: 1,
              borderColor: '#dcdcdc',
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: 'grey',
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
              }}>
              Whatsapp Number
            </Text>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Roboto-Medium',
                marginTop: 5,
              }}>
              {' '}
              {profileData ? profileData.whatsapp_number : 'Loading...'}
            </Text>
          </View>
        </View>

        <View style={{height: 70, width: '100%', flexDirection: 'row'}}>
          <View
            style={{alignItems: 'center', width: 90, justifyContent: 'center'}}>
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#dcdcdc',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name="phone" size={30} color="black" />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              width: 90,
              flex: 1,
              flexDirection: 'column',
              borderBottomWidth: 1,
              borderColor: '#dcdcdc',
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: 'grey',
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
              }}>
              Alternate Number
            </Text>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Roboto-Medium',
                marginTop: 5,
              }}>
              {profileData ? profileData.alternative_number : 'Loading...'}
            </Text>
          </View>
        </View>

        <View style={{height: 70, width: '100%', flexDirection: 'row'}}>
          <View
            style={{alignItems: 'center', width: 90, justifyContent: 'center'}}>
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#dcdcdc',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Fontisto name="email" size={20} color="black" />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              width: 90,
              flex: 1,
              flexDirection: 'column',
              borderBottomWidth: 1,
              borderColor: '#dcdcdc',
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: 'grey',
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
              }}>
              Email Address
            </Text>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Roboto-Medium',
                marginTop: 5,
              }}>
              {profileData ? profileData.email : 'Loading...'}
            </Text>
          </View>
        </View>

        <View style={{height: 70, width: '100%', flexDirection: 'row'}}>
          <View
            style={{alignItems: 'center', width: 90, justifyContent: 'center'}}>
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#dcdcdc',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Fontisto name="date" size={20} color="black" />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              width: 90,
              flex: 1,
              flexDirection: 'column',
              borderBottomWidth: 1,
              borderColor: '#dcdcdc',
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: 'grey',
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
              }}>
              Date Of Joining
            </Text>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Roboto-Medium',
                marginTop: 5,
              }}>
              {formatDate(
                profileData ? profileData['Joining Date'] : 'Loading...',
              )}
            </Text>
          </View>
        </View>

        <View style={{height: 70, width: '100%', flexDirection: 'row'}}>
          <View
            style={{alignItems: 'center', width: 90, justifyContent: 'center'}}>
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: '#dcdcdc',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={pin} style={{height: 30, width: 30}} />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              width: 90,
              flex: 1,
              flexDirection: 'column',
              borderBottomWidth: 1,
              borderColor: '#dcdcdc',
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: 'grey',
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
              }}>
              Address
            </Text>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Roboto-Medium',
                marginTop: 5,
              }}>
              {capitalizeWords(
                profileData ? profileData.address : 'Loading...',
              )}
            </Text>
          </View>
        </View>
        <View style={{height: 70, width: '100%', flexDirection: 'row'}}>
          <View
            style={{
              alignItems: 'center',
              width: 90,
              justifyContent: 'center',
            }}></View>
          <View
            style={{
              justifyContent: 'center',
              width: 90,
              flex: 1,
              flexDirection: 'column',
              borderBottomWidth: 1,
              borderColor: '#dcdcdc',
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: 'grey',
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
              }}>
              Status
            </Text>
            <Text
              style={{
                color:
                  profileData?.salesman_status === 'Active' ? 'green' : 'red',
                fontFamily: 'Roboto-Medium',
                marginTop: 5,
              }}>
              {profileData?.salesman_status
                ? capitalizeWords(profileData.salesman_status)
                : 'Loading...'}
            </Text>
          </View>
        </View>

        {/* </TouchableOpacity> */}
        <View
          style={{
            height: 70,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <TouchableOpacity
            onPress={handleLogout}
            style={{
              height: 40,
              backgroundColor: 'white', // Change background color based on status
              borderRadius: 10,
              width: '40%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }} // Disable button when not active
          >
            <MaterialIcons
              name="logout"
              color="black" // Change icon color when not active
              size={24}
              style={{marginRight: 7}}
            />
            <Text
              style={{
                color: 'black', // Change text color when not active
                fontSize: 18,
                fontFamily: 'Roboto-Medium',
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>

        {/* Show modal on initial render if deactivated */}
        {/* {modalVisible === false && setModalVisible(true)} */}

        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={closeModal}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
            }}>
            <View
              style={{
                width: '80%',
                height: 120,
                padding: 20,
                backgroundColor: 'white', // White background for the modal
                borderRadius: 10,
                alignItems: 'center',
                position: 'relative', // Position close icon in the corner
              }}>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 8,
                }}
                onPress={closeModal}>
                <Feather name="x" size={22} color="black" />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'red',
                  fontSize: 22,
                  fontFamily: 'Roboto-Medium',
                  marginTop: 20, // Pushes the text a little lower
                  textAlign: 'center',
                }}>
                Your Account is Deactivated
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
};

export default ProfileScreen;

const styles = StyleSheet.create({});
