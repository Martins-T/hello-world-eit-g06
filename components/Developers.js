import React, {useState} from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, } from 'react-native';
import Constants from 'expo-constants';
import Profile from './Profile';
import ListItem from './ListItem';


export default Developers = ({route, navigation})=>{

  const {DevelopersData} = route.params;
  
   // using react state
const [selectedId, setSelectedId] = useState(null);

const renderItem = ({ item }) => {
    const backgroundColor = item.name === selectedId ? "orange" : "green";

    return (
      <ListItem
        item={item}
        onPress={() => setSelectedId(item.name)}
        style={{ backgroundColor }}
      />
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.paragraph} > Hello World from Group 6 </Text>
      <FlatList
        data={DevelopersData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        extraData={selectedId}
      />
    </SafeAreaView>
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


