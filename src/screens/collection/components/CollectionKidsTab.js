import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';

export default CollectionKidsTab = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>kids tab content</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width:'100%',
    height: '100%'
  },
})