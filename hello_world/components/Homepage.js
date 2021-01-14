import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
import Profile from './Profile';
import ListItem from './ListItem';
import ListData from '../Database';

export default function Homepage({ navigation }) {
  return (
    <SafeAreaView>
      <Button
        title="DEVELOPERS"
        onPress={() => {
          navigation.navigate('Developers', { DevelopersData: ListData });
        }}
      />
    </SafeAreaView>
  );
}
