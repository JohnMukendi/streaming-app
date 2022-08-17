import { StyleSheet,TouchableOpacity,Image, Text, TextInput, View,FlatList } from 'react-native'
import React, { useCallback, useContext, useState } from 'react'
import { AppContext } from '../context/context'
import { useFocusEffect } from '@react-navigation/native';


const SearchScreen = ({navigation}) => {

    const {darkMode,colors,movies,setMovie,setOnHome,setQuery,daarkMode} = useContext(AppContext);

    //###############################################
    const styles = StyleSheet.create({
        container : {
            flex : 1,
            marginTop : 80
        },
        searchbar : {
            borderWidth : 1,
            marginVertical : 12,
            marginHorizontal : 8,
            color : 'white',
            paddingVertical : 4,
            paddingHorizontal : 8
        },
        videoBox: {
        backgroundColor: darkMode ? "#353935" : '#C0C0C0',
        marginVertical : 8,
        marginHorizontal : 8,
        alignItems : 'center',
        justifyContent : 'space-between',
        flexDirection : 'row'
         
      },
      thumbnail : {
        width : '30%',
        height : 75,
        //flex : 2,
        //aspectRatio : ratio,
        position : 'relative'
      },
      textBox : {
        alignItems : 'center'
      },
      videoBoxText:{
        color : darkMode ? '#eee' : 'black',
        marginRight : 85,
        flexShrink : 1,
        flexWrap : 'wrap',
        width : 160

      }
    })
    //################################################

    const [searchInput,setSearchInput] = useState('')
 
    const handleChange = (val)=>{
        
        setSearchInput(val)
        if (searchInput == ''){

        }
    };

    const handleSearch = ()=>{
        console.log('submited and searching ...')
        setQuery(searchInput)
    }
    //////Video BOX/////
    const RenderItem = ({item})=>{
        return (
            <TouchableOpacity activeOpacity={0.6}
    //Show MORE INFO FUNCTION
      delayLongPress = {200}

      onPress = {async() =>{
        setMovie(item)
        console.log(item)
        navigation.navigate('Cinema')
        setOnHome(false);

        }}
      
     >

      <View style = {styles.videoBox}>
        <Image
          source={{uri : item.image}}
          resizeMode='cover'
          resizeMethod="scale"
          defaultSource={require('../assets/bg-image.jpeg')}
          style = {styles.thumbnail}
        />
        <View style={styles.textBox} >
          <Text style = {styles.videoBoxText} numberOfLines={1}>
            {item.titleOriginal}
          </Text>
          <Text style = {styles.videoBoxText}>
            {item.year}
          </Text>
        </View>
      </View>

    </TouchableOpacity>
 
        )
        
    };
    ////////////

    return (
    <View style={styles.container}>
        {/* <TextInput 
            focusable
            style={styles.searchbar}
            placeholder = 'search movies or series ... e.g Titanic,Regular Show'
            placeholderTextColor= 'gray'
            onChangeText={handleChange}   
            autoFocus = {true}
            keyboardType='web-search'
            onSubmitEditing={handleSearch}

        /> */}
        
        <FlatList 
          
          data={movies}
          renderItem = {RenderItem}
          //numColumns = {numColumns}
          keyExtractor = {movies.id}
          
          showsVerticalScrollIndicator = {true}
          showsHorizontalScrollIndicator = {true}
          
          onEndReachedThreshold = {0.9}
          
          indicatorStyle = 'white'
          scrollEnabled = {true}          
        />
        
        {/* {
        movies.map((item,index)=>{
            return (
                <Text key={index}>{item.title}</Text>
            )
        })
        } */}
    </View>
  )
}

export default SearchScreen

