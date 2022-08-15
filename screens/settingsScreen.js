import { StyleSheet, Text, View, Switch,TouchableOpacity} from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'
import { AppContext } from '../context/context'
import { useContext } from 'react'

const SettingsScreen = () => {

  const {darkMode,setDarkMode} = useContext(AppContext);

  const handlePress = ()=>{
    setDarkMode(!darkMode)
  }
  const styles = StyleSheet.create({
    setting : {
      paddingVertical : 20,
      backgroundColor : darkMode ? 'grey' : '#E5E4E2',
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-between'
    },
    switch : {
      marginRight : 20
    },
    settingText : {
      color : darkMode ? 'white' : 'black'
    }
})
  return (
    <View style={{flex:1}}>

      <TouchableOpacity onPress={handlePress} style={styles.setting}>
         <Text style={styles.settingText}>{darkMode ? 'Change to light mode' : 'Change to darkmode'}</Text>
              
      </TouchableOpacity>
    </View>
      
  )
}

export default SettingsScreen



// return<WebView 
//         source ={{uri : 'https://edition.cnn.com/'}}
//         style = {{height : 200,width:200,flex:1,alignSelf: 'stretch',}}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         startInLoadingState={true}
//         scalesPageToFit={true}
//        /> */} */}