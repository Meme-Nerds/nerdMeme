import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Button, Image, StyleSheet } from 'react-native';
import { getMeme } from '../utils/nerdmeme-api';

const MemeGeneratorScreen = () => {
  const [loading, setLoading] = useState(true);
  const [meme, setMeme] = useState();

  
  const handlePress = () => {  
   getMeme()
   .then(fetchedMeme => setMeme(fetchedMeme))
   .then(() => setLoading(false))
  }
  
  

  if(loading) return (
    <View>
      <Button 
        title='hit-it' 
        onPress={handlePress}>
      </Button>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.setting} >{meme.setting}</Text>
      <Image
      style={styles.memePic}
        source={{uri: meme.image}}
      />
      <Text style={styles.quote} >{meme.quote}</Text>
      <Text style={styles.author} >{meme.author}</Text>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  memePic: {
    height: 350,
    width: 350
  },
  container: {
    backgroundColor: 'black'
  },
  setting: {
    color: 'white',
    margin: 5,
  },
  quote: {
    color: 'white',
    margin: 5
  },
  author: {
    color: 'white'
  }
})

export default MemeGeneratorScreen
