import {
    StyleSheet,
    Text,
    View,Modal,
    Pressable,Alert,
    Image,ImageBackground,
  }
from 'react-native'
import {WebView} from 'react-native-webview'
import React from 'react'
import{useState,useContext,useEffect} from 'react'

import {AppContext} from '../context/context'
const axios = require('axios')

const MovieModal = ({movie,modalVisible,setModalVisible,trailer,errMsg,setTrailer}) => {
    
    const {colors,options} = useContext(AppContext)
    
        
    

  return (
    <View style={styles.centeredView}>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        
        onRequestClose={() => {
          
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <ImageBackground
            style={styles.modalView}
            source={{uri : movie.image}}
            resizeMode='cover'
          >
            <View style={styles.overlay}></View>
            <Text style={styles.modalText}>{trailer.title}</Text>
            <Text style={{color:'white'}}>{errMsg}</Text>
            
            <WebView
              onLoad={console.log('webview loaded')}
              originWhitelist = {['*']}
              style={{backgroundColor:'blue'}}
              source={{uri:'https://github.com/react-native-webview/react-native-webview'}}
                //source = {{html : `<iframe width='100%' height='300px' src=${trailer.embed}`}}
            />
            
            <Pressable
              style={[{backgroundColor:colors.gold,...styles.button}, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible)
                setTrailer({})
              }}
            >
              <Text style={{...styles.textStyle}}>CLOSE</Text>
            </Pressable>
          </ImageBackground>
        </View>
      </Modal>
    </View>
  )
}

export default MovieModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor : '#00000090'
      },
      modalView: {
        margin: 20,
        backgroundColor: "black",
        borderRadius: 20,
        padding: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height : 500,
        width : 300
      },
      overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor : 'rgba(0,0,0,0.85)'
      },
      modalText : {
        fontWeight : 'bold',
        fontSize : 18,
        color:'white'
      },
      movieCover : {
        height : 100,
        width : 100,
        aspectRatio : 16/9
      },
      button : {
        padding : 20,
        width : '100%',
        alignItems : 'center'
      },
      textStyle : {

      }
})