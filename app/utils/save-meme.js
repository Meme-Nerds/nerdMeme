import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';

export const saveMeme = async(viewRef) => {
  await MediaLibrary.requestPermissionsAsync()
  const mediaYes = await MediaLibrary.getPermissionsAsync()
  
  if(mediaYes.status != 'granted') return

  try {
    const uri = await captureRef(viewRef, {
      format: 'png',
      quality: 0.7
    })
    const album = await MediaLibrary.getAlbumAsync('nerdMeme');
    console.log(album, 'wut')
    
    if(!album) { 
      const asset = await MediaLibrary.createAssetAsync(uri)
      return await MediaLibrary.createAlbumAsync('nerdMeme', asset, false)
    };
    const asset = await MediaLibrary.createAssetAsync(uri)
    await MediaLibrary.addAssetsToAlbumAsync([asset], '2026658521', false);
    

  } catch (error) {
   console.log(error) 
  }

};

export  const shareMeme = async(viewRef) => {
  try {
    const uri = await captureRef(viewRef, {
      format: 'png',
      quality: 0.7
    })

    await Sharing.shareAsync(uri)

  } catch (error) {
    console.log(error)
  }
};
