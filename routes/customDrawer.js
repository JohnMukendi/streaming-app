import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
  return (
    <View style = {styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.imageView}>
          <Image 
            source={require('../assets/header-image-2.jpg')}
            resizeMode = 'cover'
            style = {styles.image}
          />
          <View style={styles.overlay}>
            <Text style={styles.title}>Jean Streamer</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  container : {
    flex : 1
  },
  imageView : {
    marginLeft : 0,
    borderRadius : 50,
    marginBottom : 16
  },
  image : {
    width : '100%',
    height : 200,
    //borderRadius : 50,
    //borderTopLeftRadius : 20,
    //borderBottomLeftRadius : 20
  },
  overlay:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor : 'rgba(10,10,10,0.85)',
    height : 20,
    marginTop : '67%'
  },
  title : {
    color : 'gray',
    textAlign : 'center'
  }
})