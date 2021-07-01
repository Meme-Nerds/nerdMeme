import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import AppLoading from'expo-app-loading';
import { useFonts } from 'expo-font';
import colors from '../config/colors';

const WelcomeScreen = () => {
  const history = useHistory();
  let [fontsLoaded] = useFonts({
    'orangejuice': require('../../assets/fonts/orange-juice-2.0.ttf')
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container} >
      <View styles={styles.headlineBox} >
        <Text 
          style={styles.headline} 
        >
          nerdMeme
        </Text>
      </View>
      <TouchableOpacity 
        style={styles.control}
        onPress={() => history.push('/meme')} >
        <Text style={styles.controlText}>Generate Meme!</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.control}
        onPress={() => history.push('/meme/red')} >
        <Text style={styles.controlText}>red theme</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headlineBox: {
    marginBottom: 50,
    alignItems: 'center'
  },
  headline: {
    fontSize: 60,
    fontFamily: 'orangejuice',
    color: colors.lightGreen,
    textShadowColor: colors.red,
    textShadowOffset: { width: 8, height: 8 },
    textShadowRadius: 20,
  
  },
  control: {
    backgroundColor: colors.red,
    height: 40,
    width: 200,
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: colors.lightGreen,
    borderWidth: 3,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  controlText: {
    color: 'white',
    fontWeight: '600'
  }
})

export default WelcomeScreen
