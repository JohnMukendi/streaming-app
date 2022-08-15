import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import React from 'react'

const CustomHeader = ({navigation,options}) => {
  
  return (
    <View style={styles.container}>
      <Ionicons  name="arrow-back-outline" size={24} color="white" />
      <Text>CustomHeader</Text>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  container : {
    height : 70,
    flexDirection : 'row',
    alignItems : 'center',
    
  }
})