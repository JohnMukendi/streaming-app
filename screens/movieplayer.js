import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'
import { AppContext } from '../context/context'

const Movieplayer = ({navigation}) => {

    const {movie} = React.useContext(AppContext);
    
    if (movie.episodes.length == 0){
      const embedUrls = movie.embedUrls
    
    const num = Math.floor(Math.random() * embedUrls.length)
    console.log(num)
    var movieSource = embedUrls[num].url
    console.log(movieSource)
    }else{
      movieSource = movie.episodes.serie
    }
return (
      <WebView 
        // source ={{
        //     html : `<<video width=200 height = 200 controls>
        //     <source src="${movieSource}" type="video/mp4"></video>
        //     iframe src=${movieSource}></iframe><p>p</p>`
        // }}
        source={{html : `<iframe src = ${movieSource}><iframe>`}}
        style = {{height : 200,width:'100%',flex:1,alignSelf: 'stretch',}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        allowFileAccessFromFileURLs={true}
        
       />
  
  )
}

export default Movieplayer

const styles = StyleSheet.create({

})