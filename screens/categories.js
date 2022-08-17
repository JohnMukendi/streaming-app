import {
   StyleSheet, Text, View,FlatList,
  TouchableOpacity,Button, 
  ImageBackground
} 
from 'react-native'
import React, { useContext } from 'react'
import AppBar from '../comps/appbar'
import { AppContext } from '../context/context';
import {categories} from '../assets/data/categoriesData'
const axios = require('axios');

// const categories = [
//   {name : 'Actions'},
//   {name : 'Animations'},
//   {name : 'Animation'},
//   {name : 'Comedy'},
//   {name : 'Crime'},
//   {name : 'Documentary'},
//   {name : 'Drama'},
//   {name : 'Romance'}
// ];
//const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://movies-app1.p.rapidapi.com/api/genres',
  headers: {
    'X-RapidAPI-Key': '87975b5ec4mshfdea01c7a3813a4p1efd29jsn85bfd1982b5a',
    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
  }
};

const Categories = ({navigation}) => {

  const {darkMode,colors,genre,setGenre} = useContext(AppContext);

  const styles = StyleSheet.create({
    container : {
      backgroundColor : darkMode ? 'black' : colors.darkgray,
      
      paddingHorizontal : 0,
      justifyContent : 'center',
      alignItems : 'center',
      
    },
    catConatiner : {
      borderColor : darkMode ? 'gray' : '#eee',
      borderStyle : 'dashed',
      borderWidth : 1,
      padding : 20,
      width : '100%',
      
      alignItems : 'center',
      marginVertical : 10,
      flexDirection : 'row',
      justifyContent : 'space-around'
      
    },
    text : {
      color : darkMode ? 'white' : '#eee',  
      textAlign : 'center',
    },
    icon : {
      //position : 'relative',
      //right : '100%',
      alignSelf:'flex-end'
    },
    icon2 : {
      //position : 'relative',
      //left : 25,
      alignSelf:'flex-end'
    }
  })
  
  const handleClick = (e,item)=>{
    console.log('item:',item)
  }

  return (
    <ImageBackground style={styles.container}>
      
      <FlatList 
        data = {categories}
        style = {{marginBottom : 48,paddingHorizontal:40,marginRight:25}}
        renderItem = {({item}) =>(
          <TouchableOpacity style={styles.catConatiner} item = {item} 
          onPress={()=> {
            setGenre(item.uuid)
            console.log(genre)
            navigation.navigate('HomeScreen')
          }}>

            <View style={styles.icon}>
              {item.icon}
            </View>
            <Text style={styles.text}>
              {item.name}
            </Text>
            <View style={styles.icon2}>
              {item.icon}
            </View>
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