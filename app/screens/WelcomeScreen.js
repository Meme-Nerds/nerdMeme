import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import colors from '../config/colors';

const WelcomeScreen = () => {
  const history = useHistory();
  const [showThemeBox, setShowThemeBox] = useState(false);
  let [fontsLoaded] = useFonts({
    'orangejuice': require('../../assets/fonts/orange-juice-2.0.ttf'),
    'seagram': require('../../assets/fonts/Seagram.ttf'),
    'space-ranger': require('../../assets/fonts/spacerangerital.ttf'),
    'black-list': require('../../assets/fonts/The-Blacklist.ttf'),
    'arcade': require('../../assets/fonts/Arcade-Classic.ttf')
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
      {showThemeBox &&
      <View style={styles.themeBox}>
        <TouchableOpacity 
          onPress={() => setShowThemeBox(false)}>
          <Text style={styles.x}>X</Text>
      </TouchableOpacity>
        <TouchableOpacity 
          style={styles.control}
          onPress={() => history.push('/meme/olde')} >
          <Text 
            style={[styles.controlText, styles.oldeText]} 
            >Olde
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.control}
          onPress={() => history.push('/meme/spacey')} >
          <Text 
            style={[styles.controlText, styles.spaceyText]} 
            >Spacey
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.control}
          onPress={() => history.push('/meme/fancy')} >
          <Text 
            style={[styles.controlText, styles.fancyText]}
          >
            Fancy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.control}
          onPress={() => history.push('/meme/arcade')} >
          <Text 
            style={[styles.controlText, styles.arcadeText]}
          >
            arcade
          </Text>
        </TouchableOpacity>
      </View>
      }
      <View style={styles.controlBox}>
      <TouchableOpacity 
        style={styles.control}
        onPress={() => history.push('/meme')} >
        <Text style={styles.controlText}>Generate Meme!</Text>
      </TouchableOpacity>
      <Text 
        style={[styles.controlText, styles.or]}
      >
        -or-
      </Text>
      <TouchableOpacity
        style={styles.control}
        onPress={() => setShowThemeBox(true)}>
          <Text 
            style={styles.controlText}
          >
            Try a Meme Theme!
          </Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center'
  },
  headline: {
    fontSize: 60,
    fontFamily: 'orangejuice',
    color: colors.lightGreen,
    textShadowColor: colors.red,
    textShadowOffset: { width: 8, height: 8 },
    textShadowRadius: 20,
    marginBottom: 60
  },
  controlBox : {
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  control: {
    backgroundColor: colors.red,
    height: 40,
    width: 200,
    margin: 15,
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: colors.lightGreen,
    borderWidth: 3,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  controlText: {
    color: 'white',
    fontWeight: '600'
  },
  themeBox: {
    borderColor: colors.lightGreen,
    borderStyle: 'solid',
    borderWidth: 5,
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: colors.blue,
    padding: 20,
    top: 170,
    zIndex: 10,
    elevation: 10
  },
  x: {
    color: 'white',
    fontSize: 18
  },
  oldeText: {
    fontFamily: 'seagram',
    fontSize: 20
  },
  spaceyText: {
    fontFamily: 'space-ranger',
    fontSize: 20
  },
  fancyText: {
    fontFamily: 'black-list',
    fontSize: 25
  },
  arcadeText: {
    fontFamily: 'arcade',
    fontSize: 22
  }

})

export default WelcomeScreen
