import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'
import { AppContext } from '../context/context'

const Movieplayer = ({navigation}) => {

    const {movie} = React.useContext(AppContext);
    
    // const embedUrls = movie.embedUrls
    // const movieSource = embedUrls[0].url
    // console.log(movieSource)
return (
    <View>
      {/* <WebView 
        source ={{
            html : `
            <video width=200 height = 200 controls>
                <source src="${movieSource}" type="video/mp4">
            </video>
            <iframe src=${movieSource}></iframe> 
            `
        }}
        style = {{height : 200,width:'100%',flex:1,alignSelf: 'stretch',}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        allowFileAccessFromFileURLs={true}
        
       /> */}
    </View>
  )
}

export default Movieplayer

const styles = StyleSheet.create({

})