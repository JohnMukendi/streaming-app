import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homescreen';
import CinemaScreen from '../screens/cinemaScreen';
import {View,Text} from 'react-native'
import {useContext, useState} from 'react'
import { AppContext } from '../context/context';
import CustomHeader from './customHeader'
import { Ionicons } from '@expo/vector-icons';
import Movieplayer from '../screens/movieplayer';
import SearchScreen from '../screens/searchScreen';
import { set } from 'react-native-reanimated';

const Stack = createNativeStackNavigator();

function MyStack({}) {

    const {setOnCinema,colors,darkMode,onHome,setOnHome,setQuery} = useContext(AppContext);

    const [searchInput,setSearchInput] = useState('')
    
    return (
        <Stack.Navigator >
        <Stack.Screen name="HomeScreen" component={HomeScreen}
            options = {{
                headerShown : false
            }}
            listeners = {{
                
                // beforeRemove : ()=>{
                //     console.log('removed home screen');
                //     setOnHome(false)
                // },
                      focus : ()=>{
                    console.log('focused on homescreen');
                    setOnCinema(true)
                    setOnHome(true)
                    setQuery(' ')
                }
                
    
            }}
        

        />
        {/* SEARCH SCREEN */}
        <Stack.Screen 
            name='SearchScreen' component={SearchScreen}
            listeners={{
                 beforeRemove : ()=>{
                    //setOnHome(true)
                    console.log('removed')
                },
                 //focus : ()=>{
                //      console.log('focused')
                //      setOnHome(false)
                //      setOnCinema(true)
                //  }
    
            }}
            options = {({navigation}) =>(
                {
                    headerStyle : {
                        backgroundColor : darkMode ? '#33333380' : colors.lightgray,
                        
                    },
                    headerTransparent : true,
                    headerSearchBarOptions : {
                        inputType : 'text',
                        obscureBackground : true,
                        autoFocus : true,
                        textColor : 'white',
                        
                        onSearchButtonPress : ({nativeEvent})=>{
                            setQuery(nativeEvent.text)
                        }
                    } ,
                    title : '',
                    animation : 'fade',
                    headerLeft : ()=>(
                        <Ionicons  name="arrow-back-outline" size={24} color="white" 
                            onPress={()=>{
                                navigation.navigate('HomeScreen')
                            }}
                        />
                    )
                }
            )}
        />
        {/* CINEMA SCREEN */}
        <Stack.Screen
        listeners={({navigation}) =>({
            beforeRemove : ()=>{
                //setOnHome(true)
                console.log('removed cinema screen');
                
            },
            // focus : ()=>{
            //     console.log('focused')
            //     setOnHome(false)
            //     setOnCinema(true)
            // }
        })} 

        name="Cinema" component={CinemaScreen}
        options = {({navigation}) =>(
            {
                headerStyle : {backgroundColor : darkMode ? '#33333380' : colors.lightgray},
                title : '',
                animation : 'fade',
                headerLeft : ()=>(
                    <Ionicons  name="arrow-back-outline" size={24} color="white" 
                        onPress={()=>{
                            navigation.navigate('HomeScreen')
                        }}
                    />
                )
    
            }
        )}
        />
        
        </Stack.Navigator>
    );  
};

export default MyStack