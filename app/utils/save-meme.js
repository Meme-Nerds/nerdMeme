import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
// import * as Permissions from 'expo-permissions';

// export const saveMeme = async(viewRef) => {
//   const { status } = Permissions.askAsync(Permissions.CAMERA_ROLL)
// }

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
    
    if(album.title != 'nerdMeme') { 
      const asset = await MediaLibrary.createAssetAsync(uri)
      await MediaLibrary.createAlbumAsync('nerdMeme', asset)
    };
    const asset = await MediaLibrary.createAssetAsync(uri)
    // return await MediaLibrary.addAssetsToAlbumAsync([uri], '2026658521');
    return asset

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
