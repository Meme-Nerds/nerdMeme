import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
  NativeRouter, 
  Switch, 
  Route 
} from 'react-router-native';
import colors from './app/config/colors';
import MemeGeneratorScreen from './app/screens/MemeGeneratorScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <NativeRouter>
        <Switch>
          <Route exact path='/' component={WelcomeScreen} />
          <Route exact path='/meme' component={MemeGeneratorScreen} />
        </Switch>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
});
