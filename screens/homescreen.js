import {
  View,SafeAreaView,
  Text,Alert,Button,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  Image,Dimensions,ImageBackground
} from "react-native";

import AppBar from "../comps/appbar";
import { AppContext } from "../context/context";
import { useState,useContext,useRef,useEffect } from "react";
import MovieModal from '../comps/movieModal'
const axios = require('axios')
const screenHeight = Dimensions.get('window').height
const numColumns = 2

//component
const HomeScreen = ({navigation}) => {

  //pulling out of context
  const {
    movies,goBack,
    setGoBack,pageNum,
    setPageNum,errMessage,
    err,options,
    movie,setMovie,setOnCinema,
    trailer,setTrailer,darkMode
  } = useContext(AppContext)

///STYLE/////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkMode ? "gray" : 'white',
    padding : 0,
    alignItems : 'center',
    width : '100%',
    justifyContent : 'center'
    
  },
  mainScreen : {
  
    alignItems : 'center',
    justifyContent : 'center',
    paddingTop : 10,
    paddingBottom : 50,
  },
  videoBox: {
    backgroundColor: darkMode ? "#353935" : '#C0C0C0',
    marginVertical : 8,
    marginHorizontal : 8,
    alignItems : 'center',
    justifyContent : 'center',
    
    
  },
  textBox : {
    alignItems : 'center',
    justifyContent : 'center',
    height : 60,

    
  },
  videoBoxText : {
    color : darkMode ? '#eee' : 'black',
    textAlign : 'center',
    flexShrink : 1,
    flexWrap : 'wrap',
    width : 160

  },
  thumbnail : {
    width : '100%',
    height : 245,
    //flex : 2,
    //aspectRatio : ratio,
    position : 'relative'
  },
  ratings : {
      position : 'absolute',
      right : 5,
      bottom : 50,
      padding : 4,
      backgroundColor : '#F0E68C50',
      borderRadius : 4
  },
  ratingText : {
    color : 'white',
    fontSize : 8,
    fontWeight : 'bold'
  }
});

//////STYLE///////

  const scrollRef = useRef(null)

   //function to go back to homescreen
   if (goBack) {
    
    navigation.navigate('Home');
    setGoBack(false)
   }
  
   const [modalVisible, setModalVisible] = useState(false);
   
   

   //##########GETTING TRAILERES######################
  
  const [errMsg,setErrmsg] = useState('');

  const [movieId,setMovieId] = useState(0)  
      
  

  ////////////////////Video Box///////////////////////
  
  const renderItems = ({item}) =>(
    
    <TouchableOpacity activeOpacity={0.6}
    //Show MORE INFO FUNCTION
      delayLongPress = {200}

      onPress = {async() =>{
        setMovie(item)
      
        navigation.navigate('Cinema')
        setOnCinema(true);

        
        //const images = await axios.get(`https://serpapi.com/search.json?q=Peach&tbm=isch&ijn=0`)
        //console.log('IMAGES',images.data.images_results)
      }}
      
      onLongPress={async ()=>{

        
        setMovie(item)
        setModalVisible(true)
        
        setMovieId(item._id)

        //console.log('fetching trailers...')
        //console.log('MOVIE ID:',movieId)
        try {
          const fetchOptions = {
            method : 'GET',
            url: `https://movies-app1.p.rapidapi.com/api/trailers/${item._id}`,
            headers : options.headers
          };
          const response = await axios(fetchOptions);
          console.log(fetchOptions)
          console.log('THE RESPONSE:',response.data.result[0])
          setTrailer(response.data.result[0])
          //console.log('TRAILER:',trailer)
        }  
        
        catch (error) {
          setErrmsg(JSON.stringify(error))
          //console.log('THE ERROR:',error,)
        }

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
        <View style={styles.ratings}>
          <Text style = {styles.ratingText}>{item.rating}</Text>
        </View>
      </View>

    </TouchableOpacity>
  )
  ////////////////////Video Box///////////////////////////
  
  const image = darkMode ? require('../assets/bg-image.jpeg') : require('../assets/bg-image2.jpg')
  
  //fetching more data when end of screen is reached
  function handleEndReach(){
      console.log('end reached')
      setPageNum(pageNum+1);

  }
  
  //MAIN COMPONENT RETURN//
  return (
    
      
      <ImageBackground style={styles.container} source={image} resizeMode='cover'>
        
        <MovieModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          movie = {movie}
          trailer = {trailer}
          setTrailer = {setTrailer}
          errMsg = {errMsg}
        />

        {err ? <Button title={errMessage}/> : null}
      <SafeAreaView style = {styles.mainScreen}>
        <FlatList 
          
          data={movies}
          renderItem = {renderItems}
          numColumns = {numColumns}
          keyExtractor = {movies.id}
          ref={scrollRef}
          showsVerticalScrollIndicator = {true}
          showsHorizontalScrollIndicator = {true}
          onEndReached = {handleEndReach}
          onEndReachedThreshold = {0.9}
          
          indicatorStyle = 'white'
          scrollEnabled = {true}          
        />
      </SafeAreaView>
      
      {/* APPBAR COMPONETN */}
      <AppBar 
        navigation = {navigation}
        scrollRef={scrollRef}
        
       />
      </ImageBackground>
  );
};


export default HomeScreen
 