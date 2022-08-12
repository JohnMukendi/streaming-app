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

  const options = {
    method: 'GET',
    url: 'https://movies-app1.p.rapidapi.com/api/movies',
    params : {page : pageNum},    
    headers: {
      'X-RapidAPI-Key': '451fc34789msh0cf52e758202bc7p17f1c7jsn111b8b6b2ee3',
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    },
  };
  
  

    useEffect(() =>{

      async function fetchData (){
        try {

          console.log('fetching data ...')
          const res = await axios(options)
          const data = await res.data
          console.log('DATA SUCCESSFULLY FETCHED !!!')
          setMovies((prev) =>{
            
              return prev.concat(data.results)
          })
          //const allMovies = 
        
          //console.log('THE MOVIES:',movies)
          
          setLoaded(true)
          //console.log(movies)
        } catch (error) {
          console.log('FETCH ERROR :',error)
          setErrMessage(error.message)
          setErr(true)
        }
      }
      fetchData()
      
    },[pageNum])
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
      fullGold : '#FFD700'
    },
    goBack,setGoBack,
    pageNum,setPageNum,
    moviesData,setMoviesData,
    options,errMessage,
    err
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
