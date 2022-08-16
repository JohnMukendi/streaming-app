import {
   StyleSheet, Text, View,FlatList,
  TouchableOpacity,Button, 
  ImageBackground
} 
from 'react-native'
import React, { useContext } from 'react'
import AppBar from '../comps/appbar'
import { AppContext } from '../context/context';

const categories = [
  {name : 'Actions'},
  {name : 'Animations'},
  {name : 'Animation'},
  {name : 'Comedy'},
  {name : 'Crime'},
  {name : 'Documentary'},
  {name : 'Drama'},
  {name : 'Romance'}
];

const Categories = ({navigation}) => {

  const {darkMode,colors} = useContext(AppContext);

  const styles = StyleSheet.create({
    container : {
      backgroundColor : darkMode ? 'black' : colors.darkgray,
      flex : 1,
      paddingHorizontal : 12,
      alignItems : 'center'
    },
    catConatiner : {
      borderColor : darkMode ? 'gray' : '#eee',
      borderStyle : 'dashed',
      borderWidth : 1,
      padding : 20,
      width : '100%',
      alignItems : 'center',
      marginVertical : 10
    }
  })
  
  return (
    <ImageBackground style={styles.container}>
      
      <FlatList 
        data = {categories}
        renderItem = {({item}) =>(
          <TouchableOpacity style={styles.catConatiner}>
            <Text style={{color : darkMode ? 'white' : '#eee'}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}    
      />
      {/* <Button onPress={() => navigation.goBack()} title="Go back home" />
       */}
      <AppBar navigation={navigation}/>
    </ImageBackground>
  )
}



export default Categories