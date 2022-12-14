import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/Navigator'
import Settingscreen from './screens/settingsScreen'
import { AppContext } from './context/context';
import { useEffect,useState } from 'react';
const axios = require("axios");

export default function App() {

  const [loaded,setLoaded] = useState(false);

  //GETTING DATA FROM API
  
  const [movies,setMovies] = useState([]);
  const [moviesData,setMoviesData] = useState([])
  const [err,setErr] = useState(false)
  const [errMessage,setErrMessage] = useState('');
  const [pageNum,setPageNum] = useState(1);

  const [movie,setMovie] = useState({})
  const [trailer,setTrailer] = useState({})
  const [onCinema,setOnCinema] = useState(false);
  const [onHome,setOnHome] = useState(false);

  const [genre,setGenre] = useState('');
  const [query,setQuery] = useState('')
  const options = {
    method: 'GET',
    url: 'https://movies-app1.p.rapidapi.com/api/movies',
    params : {page : pageNum ,sort : 'year', genres : genre, query : query},    
    headers: {
      'X-RapidAPI-Key': 'c0aab84c29msh8d03cd7985125d0p1a9842jsn3706edee89da',
    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    },
  };
  
  async function fetchData (changeGenre){
    try {

      setLoaded(false)
      console.log('fetching data ...')
      const res = await axios(options)
      const data = await res.data
      console.log('DATA SUCCESSFULLY FETCHED !!!')
      
      if (!changeGenre){
        setMovies((prev) =>{
          console.log('set new movies')
          return prev.concat(data.results)
      })
      }else{
        setMovies(data.results)
      }
      //const allMovies = 
    
      //console.log('THE MOVIES:',movies)
      
      setLoaded(true)
      //console.log(movies)
      //#####################################
       
    } catch (error) {
      console.log('FETCH ERROR :',error)
      setErrMessage(error.message)
      setErr(true)
    }
  }

    useEffect(() =>{

      fetchData(false)
      
    },[pageNum]);

    useEffect(()=>{
      console.log('use effect ran');
      if (genre.length !==0 || query.length !==0){
        fetchData(true)
      }else{
        console.log('fetch data wasnt called for genres or quries')
      }
      
    },[genre,query]);
  //#########################//

  //GLOBAL STATES
  const [darkMode,setDarkMode] = useState(true);
  const [goBack,setGoBack] = useState(false)

  const globals = {
    movies : movies,
    
    colors : {
      red : '#88080840',
      fullRed : '#880808',
      gold : '#FFD70080',
      fullGold : '#FFD700',
      lightgray : '#D3D3D3',
      darkgray : '#343434',
      darkgold : '#b8860b'
    },
    goBack,setGoBack,
    pageNum,setPageNum,
    moviesData,setMoviesData,
    options,errMessage,
    err,movie,setMovie,
    trailer,setTrailer,
    onCinema,setOnCinema,
    darkMode,setDarkMode,
    genre,setGenre,
    onHome,setOnHome,
    query,setQuery,loaded
  }

  //show loader if data isnt fetched otherwise show screens
  if (loaded){
    return (
      <AppContext.Provider value={globals}>
        <Navigator style = {styles.container} />
      </AppContext.Provider>
    );
  }else{
    
    return (
      <AppContext.Provider value={globals}>
        <Navigator style = {styles.container} />
      </AppContext.Provider>
      // <View style={styles.loader}>
      //   <Text>LOADING ....</Text>
      //   <Text>{err.message}</Text>
      // </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical : 0
  },
  loader : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
});
