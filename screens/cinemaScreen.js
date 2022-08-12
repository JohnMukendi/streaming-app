import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppContext } from '../context/context'
import {useContext,useEffect} from 'react'
import { useNavigationState } from '@react-navigation/native';

const CinemaScreen = () => {

  const {movie} = useContext(AppContext)

  const screenState = useNavigationState(state => state.routeNames[state.index]);
  
  return (
    <View>
      <Text>{movie.title}</Text>
      <Text>{screenState}</Text>
    </View>
  )
}

export default CinemaScreen

const styles = StyleSheet.create({})