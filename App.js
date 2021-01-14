import React, {useState} from 'react';
import { Text, View,SafeAreaView, StyleSheet, Image,FlatList,TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import Profile from './components/Profile';
import ListItem from './components/ListItem';
import Developers from './components/Developers';
import Homepage from './components/Homepage';
import ListData from './Database';
const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Developers" component={Developers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
