import React, { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  SafeAreaView,  
  Image, 
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AppLoading from'expo-app-loading';
import { useHistory, useParams } from 'react-router-native';
import { getMeme } from '../utils/nerdmeme-api';
import { saveMeme, shareMeme } from '../utils/save-meme';
import colors from '../config/colors';

  const MemeGeneratorScreen = () => {
  const history = useHistory();
  const { theme } = useParams() || null;
  console.log(theme)
  const viewRef = useRef();
  const [loading, setLoading] = useState(true);
  const [meme, setMeme] = useState();
  const [showSaveConfirm, setShowSaveConfirm] = useState(false);

  useEffect(() => {
    getMeme()
    .then(fetchedMeme => setMeme(fetchedMeme))
    .then(() => setLoading(false))
  }, [])

   const handlePress = () => {
    getMeme()
    .then(fetchedMeme => setMeme(fetchedMeme))
    .then(() => setLoading(false))
  }

  const handleShare = () => {
    shareMeme(viewRef)
  }

  const handleSave = () => {
    saveMeme(viewRef)
    setShowSaveConfirm(false)
  }
  
  if(loading) return (
    <AppLoading />
  )

  if(meme.error) return (
    <View>
      <Text style={styles.controlText}>{meme.error}</Text>
        <TouchableOpacity 
          activeOpacity={.5} 
          onPress={handlePress}
          style={styles.control}>
            <Text
              style={styles.controlText}
            >try again!</Text>
        </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView >
      <ScrollView contentContainerStyle={styles.scrollView} >
      <View ref={viewRef} style={styles.container}>
        <Text 
          style={(meme.setting.length < 20) 
            ? styles.setting
            : styles.longSetting} 
        >
          {meme.setting}
        </Text>
        <Image
          style={styles.memePic}
          source={{uri: meme.image}}
        />
        <Text 
          style={[(meme.quote.length < 30) 
            ? styles.quote
            : styles.longQuote,
          (theme === 'red') ? styles.redQuote : null]} 
        >
          {`"${meme.quote}"`}
        </Text>
        <Text style={styles.author} >{`-${meme.author}`}</Text>
      </View>
      <View style={styles.controlBox}>
        <View style={styles.controlboxInner}>
          <TouchableOpacity 
            activeOpacity={.5} 
            onPress={() => history.push('/')}
            style={styles.control}>
            <Text 
              style={styles.controlText} 
            >back home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            activeOpacity={.5} 
            onPress={handlePress}
            style={styles.control}>
            <Text
              style={styles.controlText}
            >get another one!
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.controlBoxInner}>
          <TouchableOpacity 
            activeOpacity={.5} 
            onPress={handleShare}
            style={styles.control}>
            <Text
              style={styles.controlText}
            >share meme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            activeOpacity={.5} 
            onPress={() => setShowSaveConfirm(true)}
            style={styles.control}>
            <Text
              style={styles.controlText}
            >save meme
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      {showSaveConfirm &&
      <View style={styles.saveConfirm} >
        <Text style={styles.controlText}>
          save meme to device gallery?
        </Text>
        <View>
          <TouchableOpacity 
            onPress={handleSave} 
            style={styles.control}
          >
            <Text style={styles.controlText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setShowSaveConfirm(false)}
            style={styles.control}
          >
            <Text style={styles.controlText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  memePic: {
    height: 300,
    width: 300
  },
  container: {
    backgroundColor: 'black',
    width: 450, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 5
  },
  setting: {
    color: 'white',
    fontSize: 22,
    margin: 5,
    width: 300
  },
  longSetting: {
    color: 'white',
    fontSize: 18,
    margin: 5,
    width: 300
  },
  quote: {
    color: 'white',
    fontSize: 30,
    margin: 5,
    width: 300,
    textAlign: 'center'
  },
  redQuote: {
    color: colors.red
  },
  longQuote: {
    color: 'white',
    fontSize: 22,
    margin: 5,
    width: 300,
    textAlign: 'center'
  },
  author: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 75
  },
  controlBox: {
    marginTop: 20,
    padding: 10,
    width: 500,
    backgroundColor: '#1a936f',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  controlBoxInner: {

  },
  control: {
    width: 150,
    height: 30,
    margin: 10,
    backgroundColor: '#d13065',
    borderColor: '#16f7ac',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 50,
    elevation: 10,
    justifyContent: 'center',
  },
  controlText: {
    color: 'white',
    fontWeight: '600',
    textShadowColor: 'black',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 2,
    fontSize: 14,
    alignSelf: 'center'
  },
  scrollView: {
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  saveConfirm: {
    position: 'absolute',
    top: 200,
    alignSelf: 'center',
    height: 150,
    backgroundColor: colors.green,
    borderStyle: 'solid',
    borderColor: colors.lightGreen,
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 15,
  }
})

export default MemeGeneratorScreen
