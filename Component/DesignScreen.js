import { Image, Text, View, Dimensions, StatusBar, Platform } from 'react-native';
import React,{ useState, useEffect } from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import kabirsingh from '../assets/images/4.png';
import namsteengland from '../assets/images/5.png';
import srk from '../assets/images/8.png';
import kajol from '../assets/images/6.png';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const DesignScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate network delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);  // Simulate 3 seconds loading
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={Platform.android !== 'OS'}/>
      <View
        style={{
          borderWidth: 1,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: 22, color: 'blue' }}>
          Find your perfect Movies to enjoy
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 15, color: 'black' }}>Most Popular Movies</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}
          >
            {/* Movie 1: Kabir Singh */}
            <View
              style={{
                width: width * 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ShimmerPlaceHolder
                visible={!isLoading}
                style={{
                  height: height * 0.25,
                  width: '80%',
                  borderRadius: 10,
                }}
              >
                <Image
                  source={kabirsingh}
                  style={{
                    height: height * 0.25,
                    width: '80%',
                    borderRadius: 10,
                  }}
                />
              </ShimmerPlaceHolder>
              <Text style={{ color: 'black', marginTop: 5 }}>Kabir Singh</Text>
            </View>

            {/* Movie 2: Namaste England */}
            <View
              style={{
                width: width * 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ShimmerPlaceHolder
                visible={!isLoading}
                style={{
                  height: height * 0.25,
                  width: '80%',
                  borderRadius: 10,
                }}
              >
                <Image
                  source={namsteengland}
                  style={{
                    height: height * 0.25,
                    width: '80%',
                    borderRadius: 10,
                  }}
                />
              </ShimmerPlaceHolder>
              <Text style={{ color: 'black', marginTop: 5 }}>Namaste England</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}
          >
            {/* Movie 3: Duplicate */}
            <View
              style={{
                width: width * 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ShimmerPlaceHolder
                visible={!isLoading}
                style={{
                  height: height * 0.25,
                  width: '80%',
                  borderRadius: 10,
                }}
              >
                <Image
                  source={srk}
                  style={{
                    height: height * 0.25,
                    width: '80%',
                    borderRadius: 10,
                  }}
                />
              </ShimmerPlaceHolder>
              <Text style={{ color: 'black', marginTop: 5 }}>Duplicate</Text>
            </View>

            {/* Movie 4: Ra-one */}
            <View
              style={{
                width: width * 0.45,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ShimmerPlaceHolder
                visible={!isLoading}
                style={{
                  height: height * 0.25,
                  width: '80%',
                  borderRadius: 10,
                }}
              >
                <Image
                  source={kajol}
                  style={{
                    height: height * 0.25,
                    width: '80%',
                    borderRadius: 10,
                  }}
                />
              </ShimmerPlaceHolder>
              <Text style={{ color: 'black', marginTop: 5 }}>Ra-one</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DesignScreen;
