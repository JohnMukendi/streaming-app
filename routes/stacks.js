import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homescreen';
import CinemaScreen from '../screens/cinemaScreen';
import {View} from 'react-native'
import {useContext} from 'react'
import { AppContext } from '../context/context';

const Stack = createNativeStackNavigator();

function MyStack() {

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
                console.log('removed')
                setOnCinema(false)
            },
            focus : ()=>{
                console.log('focused')
                setOnCinema(true)
            }

        }} 
        name="Cinema" component={CinemaScreen}
        options = {{
            headerStyle : {backgroundColor : '#33333380'},
            title : ''
        }}
        />
        </Stack.Navigator>
    );  
};

export default MyStack