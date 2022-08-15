import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homescreen';
import CinemaScreen from '../screens/cinemaScreen';
import {View,Text} from 'react-native'
import {useContext} from 'react'
import { AppContext } from '../context/context';
import CustomHeader from './customHeader'
import { Ionicons } from '@expo/vector-icons';
import Movieplayer from '../screens/movieplayer';
const Stack = createNativeStackNavigator();

function MyStack({}) {

    const {setOnCinema} = useContext(AppContext);

    return (
        <Stack.Navigator >
        <Stack.Screen name="HomeScreen" component={HomeScreen}
            options = {{
                headerShown : false
            }}
        />
        <Stack.Screen
        listeners={{
            beforeRemove : ()=>{
                setOnCinema(false)
                console.log('removed')
            },
            // focus : ()=>{
            //     console.log('focused')
            //     setOnCinema(true)
            // }

        }} 

        name="Cinema" component={CinemaScreen}
        options = {({navigation}) =>(
            {
                headerStyle : {backgroundColor : '#33333380'},
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