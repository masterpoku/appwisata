import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading process
    const splashTimeout = setTimeout(() => {
      // Navigate to your main app screen after the splash time is over
      navigation.replace('Login'); // Replace 'MainApp' with the name of your main app screen
    }, 8000); // Adjust the duration as needed (8000 milliseconds = 8 seconds)

    // Clear the timeout if the component is unmounted before the timeout is reached
    return () => clearTimeout(splashTimeout);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/splash.png')} // Replace with the actual path to your image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Splash Screen</Text>
      </View>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width, // Set width to the width of the screen
    height: height, // Set height to the height of the screen
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Splash;
