import {
    StyleSheet,
    Text,
    View,Modal,
    Pressable,Alert,
    Image,ImageBackground,
    Button
  }
from 'react-native'
import {WebView} from 'react-native-webview'
import React from 'react'
import{useState,useContext,useEffect,useCallback,useRef} from 'react'
import YoutubePlayer from "react-native-youtube-iframe";

import {AppContext} from '../context/context'
const axios = require('axios')

const MovieModal = ({movie,modalVisible,setModalVisible,trailer,errMsg,setTrailer}) => {
    
  const {colors,options} = useContext(AppContext)
    
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
    

  return (
    <View style={styles.centeredView}>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        hardwareAccelerated={true}
        
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
            
            {/* <WebView 
              source ={{html : `<iframe src=${trailer.embed}></iframe>`}}
              style = {{width:200,flex:1,alignSelf: 'stretch',}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              startInLoadingState={true}
              scalesPageToFit={true}
            /> */}
            <YoutubePlayer
            
            //webViewStyle = {{height:400}}
            webViewProps={{style : {aspectRatio:1/1}}}
              height={300}
              width={'100%'}
              play={playing}
              videoId={trailer.videoId}
              onChangeState={onStateChange}
            />
             <Pressable 
              style={[{backgroundColor:colors.gold,marginBottom:20,...styles.button}]}
              onPress={togglePlaying}
              
              >
                <Text style={{...styles.textStyle}}>{playing ? "PAUSE" : "PLAY"}</Text>
              </Pressable>

            
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