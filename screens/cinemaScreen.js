import { 
  StyleSheet, Text,
  View,ImageBackground,Image,
  ScrollView, 
  Button
  } 
from 'react-native';

import React from 'react'
import { AppContext } from '../context/context'
import {useContext,useEffect} from 'react'
import { useNavigationState } from '@react-navigation/native';
import { FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons'; 
import MoviePlayer from './movieplayer'

const CinemaScreen = ({navigation}) => {

  const {movie,trailer,colors} = useContext(AppContext)

  const screenState = useNavigationState(state => state.routeNames[state.index]);
  
  return (
    <ImageBackground source={{uri : movie.image}} style={styles.container}>
      <View style={styles.overlay}></View>
      <ScrollView>
        
      
        <Text style={styles.title}>{movie.titleOriginal}</Text>
        <View style={styles.bannerView}>
          <Image 
            source={{uri : movie.image}}
            style={styles.banner}
            resizeMode='center'
          />
        </View>
        <View style={styles.infoView}>
            <View style = {styles.info}>
              <FontAwesome name="calendar" size={17} color={colors.fullGold} />
              <Text style = {styles.infoText}>{movie.year}</Text>
            </View>
            <View style = {styles.info}>
              <FontAwesome name="star-o" size={18} color={colors.fullGold} />
              <Text style = {styles.infoText}>{movie.rating}</Text>
            </View>
            <View style = {styles.info}>
              <MaterialCommunityIcons name="calendar-month" size={18} color={colors.fullGold} />
              <Text style = {styles.infoText}>{movie.release}</Text>
            </View>
            
        </View>
        {/* MOVIE PLAYER */}
          <Button title='Watch' onPress={() =>{
            
              navigation.navigate('MovieScreen')
            }} />
        {/*MOVIE PLAYER */}
        <Text style={styles.description}>{movie.description}</Text>
      </ScrollView>
    </ImageBackground>
  )
}

export default CinemaScreen

const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingHorizontal : 12
  },
  overlay:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor : 'rgba(10,10,10,0.85)'
  },
  title : {
    textAlign : 'center',
    color : 'white',
    fontWeight : 'bold',
    fontSize : 24,
    paddingVertical : 12
  },
  bannerView : {
    
  },
  banner : {
    height : 180,
  },
  description : {
    color : 'white',
    lineHeight : 20,
    textAlign : 'center',
    fontSize : 14,
    marginVertical : 12

  },
  infoView : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    marginVertical : 18,
    paddingVertical : 12,
    borderWidth : 0.3,
    borderTopColor : 'gold',
    borderLeftColor : '#33333300',
    borderRightColor : '#33333300',
    borderBottomColor : 'gold'
  },
  info : {
    flexDirection : 'row',
    alignItems : 'center'
  },
  infoText : {
    color : 'white',
    marginLeft : 6
  }
})