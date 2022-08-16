import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome,Ionicons,AntDesign,Entypo,MaterialIcons } from '@expo/vector-icons';
import { useState,useContext,useRef } from 'react';
import { AppContext } from '../context/context';
import { useNavigationState } from '@react-navigation/native';


const AppBar = ({scrollRef,navigation}) => {
    
    

    //the state of the screen
    const screenState = useNavigationState(state => state.routeNames[state.index]);

    const homeRef = useRef(null)
    const {colors,setGoBack,darkMode} = useContext(AppContext)

    const iconCurrentMode = darkMode ? colors.gold : colors.darkgold;

    const iconColor = '#e4d00a' 
    const initColor = darkMode ? colors.gold : colors.darkgold 
    const [homeIconColor,setHomeIconColor] = darkMode ? useState(colors.gold) : useState(colors.darkgold)
    const [searchIconColor,setSearchIconColor] = darkMode ? useState(colors.gold) : useState(colors.darkgold)
    const [catIconColor,setCatIconColor] = darkMode ? useState(colors.gold) : useState(colors.darkgold)
    const [filterIconColor,setFilterIconColor] = darkMode ? useState(colors.gold) : useState(colors.darkgold)
    
    const styles = StyleSheet.create({
        container : {
            flexDirection : 'row',
            backgroundColor : darkMode ? '#343434' : colors.lightgray,
            width : '100%',
            justifyContent : 'space-evenly',
            alignItems : 'center',
            position : 'absolute',
            top : '93.5%',
            flex : 1,
            height : 50,
            shadowColor : 'black',
            shadowOffset : 20,
            shadowRadius : 20,
            borderTopRightRadius : 40,
            borderTopLeftRadius : 40,
            elevation : 15,
                    
        },
        navtab : {
            flex : 1,
            alignItems : 'center',
            justifyContent : 'center',
            
        },
        text : {
            color : darkMode ? '#E2DFD2' : colors.darkgray
        }
    });
    
    //home button
    function handleHomePress(){

        

        
        console.log(screenState)
        if (screenState === 'HomeScreen'){
            scrollRef.current.scrollToOffset({offset : 0,animated : true})
        }else if (screenState === 'Categories'){
            //when this is called,the navigation.goback function will be called
            navigation.navigate('Home')
        }
        
        
    }
    return ( 
        <View  style={styles.container}>
            <TouchableOpacity
                onPressIn={handleHomePress}
                style={styles.navtab}
                activeOpacity={0.5}
                
            >
                <Entypo name="home" size={24} color={iconCurrentMode} />
                <Text style = {styles.text}>
                    Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.navtab}
                activeOpacity={0.5}
                
            >
                <FontAwesome name="search" size={24} color={iconCurrentMode}/>    
                <Text style = {styles.text}>
                    Search
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.navtab}
            >
                
                <MaterialIcons name="category" size={24} color={iconCurrentMode} />
                <Text style = {styles.text}>
                    Categories
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navtab}
                activeOpacity={0.5}
            >
                <FontAwesome name="filter" size={24} color={iconCurrentMode} />    
                <Text style = {styles.text}>
                    Filter
                </Text>
            </TouchableOpacity>
        </View>
    );
};


export default AppBar;