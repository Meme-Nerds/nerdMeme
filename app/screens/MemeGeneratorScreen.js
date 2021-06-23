import React, { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  Button, 
  Image, 
  StyleSheet, 
} from 'react-native';
// import { captureRef } from 'react-native-view-shot';
// import * as Sharing from 'expo-sharing';
import { getMeme } from '../utils/nerdmeme-api';
import { saveMeme, shareMeme } from '../utils/save-meme';


const MemeGeneratorScreen = () => {
  const viewRef = useRef();
  const [loading, setLoading] = useState(true);
  const [meme, setMeme] = useState();

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
  }
  
  if(loading) return (
    <View>
      <Button 
        title='hit-it' 
        onPress={handlePress}
      />
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View ref={viewRef} style={styles.container}>
        <Text style={styles.setting} >{meme.setting}</Text>
        <Image
          style={styles.memePic}
          source={{uri: meme.image}}
        />
        <Text 
          style={(meme.quote.length < 50) ? styles.quote
            : styles.longQuote} 
        >
          {`"${meme.quote}"`}
        </Text>
        <Text style={styles.author} >{`-${meme.author}`}</Text>
      </View>
      <View style={styles.controlBox}>
        <View style={styles.control}>
          <Text 
            style={styles.controlText} 
            onPress={() => setLoading(true)}
          >back home</Text>
        </View>
        <View style={styles.control}>
          <Text
            style={styles.controlText}
            onPress={handlePress}
          >get another one!</Text>
        </View>
        <View style={styles.control}>
          <Text
            style={styles.controlText}
            onPress={handleShare}
          >share meme</Text>
        </View>
        <View style={styles.control}>
          <Text
            style={styles.controlText}
            onPress={handleSave}
          >save meme</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  memePic: {
    height: 350,
    width: 350
  },
  container: {
    backgroundColor: 'black',
    marginTop: 5, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  setting: {
    color: 'white',
    fontSize: 22,
    margin: 5,
  },
  quote: {
    color: 'white',
    fontSize: 30,
    margin: 5
  },
  longQuote: {
    color: 'white',
    fontSize: 25,
    margin: 5
  },
  author: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'flex-start',
    marginLeft: 80
  },
  controlBox: {
    marginTop: 30,
    padding: 10,
    width: 500,
    backgroundColor: '#1a936f',
    alignItems: 'center',
    
  },
  control: {
    width: 250,
    height: 30,
    margin: 10,
    backgroundColor: '#d13065',
    borderColor: '#16f7ac',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 50,
    elevation: 10
  },
  controlText: {
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 2,
    fontSize: 18,
    alignSelf: 'center'
  }
})

export default MemeGeneratorScreen
