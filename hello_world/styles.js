import { Platform, StatusBar, StyleSheet } from "react-native"; 

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#13535c',
    padding: 8,
    alignItems: 'center',
    ...Platform.select({
      ios: { paddingTop: 20 }, 
      android:{paddingTop:StatusBar.currentHeight} 
    })
  },
  image: {
    height: 170,
    width: 220,
  }
  
});