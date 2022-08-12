import {
   StyleSheet, Text, View,FlatList,
  TouchableOpacity,Button, 
  ImageBackground
} 
from 'react-native'
import React from 'react'
import AppBar from '../comps/appbar'
  
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
  return (
    <ImageBackground style={styles.container}>
      <Text>Categories</Text>
      <FlatList 
        data = {categories}
        renderItem = {({item}) =>(
          <TouchableOpacity style={styles.catConatiner}>
            <Text style={{color : 'white'}}>
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


const styles = StyleSheet.create({
  container : {
    backgroundColor : 'black',
    flex : 1,
  },
  catConatiner : {
    borderColor : 'gray',
    borderStyle : 'dashed',
    borderWidth : 1,
    padding : 20,
    width : '100%',
    alignItems : 'center',
    marginVertical : 10
  }
})

export default Categories