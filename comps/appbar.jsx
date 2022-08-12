import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome,Ionicons,AntDesign,Entypo,MaterialIcons } from '@expo/vector-icons';
import { useState,useContext,useRef } from 'react';
import { AppContext } from '../context/context';
import { useNavigationState } from '@react-navigation/native';


const AppBar = ({scrollRef,navigation}) => {
    
    

    //the state of the screen
    const screenState = useNavigationState(state => state.routeNames[state.index]);

    const homeRef = useRef(null)
    const {colors,setGoBack} = useContext(AppContext)

    const iconColor = '#e4d00a'
    const initColor = colors.gold
    const [homeIconColor,setHomeIconColor] = useState(colors.gold);
    const [searchIconColor,setSearchIconColor] = useState(colors.gold);
    const [catIconColor,setCatIconColor] = useState(colors.gold);
    const [filterIconColor,setFilterIconColor] = useState(colors.gold);
    
    //home button
    function handleHomePress(){

        

        setHomeIconColor(iconColor)
        console.log(screenState)
        if (screenState === 'Home'){
            scrollRef.current.scrollToOffset({offset : 0,animated : true})
        }else if (screenState === 'Categories'){
            //when this is called,the navigation.goback function will be called
            navigation.navigate('Home')
        }
        
        
    }
    return ( 
        <View style={styles.container}>
            <TouchableOpacity
                
                onPressIn={handleHomePress} 
                onPressOut ={() =>setHomeIconColor(initColor)}
                style={styles.navtab}
                activeOpacity={0.5}
                
            >
                <Entypo name="home" size={24} color={homeIconColor} />
                <Text style = {styles.text}>
                    Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPressIn={() => setSearchIconColor(iconColor)} 
                onPressOut ={() =>setSearchIconColor(initColor)}
                style={styles.navtab}
                activeOpacity={0.5}
                
            >
                <FontAwesome name="search" size={24} color={searchIconColor}/>    
                <Text style = {styles.text}>
                    Search
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPressIn={() => setCatIconColor(iconColor)} 
                onPressOut ={() =>setCatIconColor(initColor)}
                activeOpacity={0.5}
                style={styles.navtab}
            >
                
                <MaterialIcons name="category" size={24} color={catIconColor} />
                <Text style = {styles.text}>
                    Categories
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPressIn={() => setFilterIconColor(iconColor)} 
                onPressOut ={() =>setFilterIconColor(initColor)}
                style={styles.navtab}
                activeOpacity={0.5}
            >
                <FontAwesome name="filter" size={24} color={filterIconColor} />    
                <Text style = {styles.text}>
                    Filter
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        backgroundColor : '#343434',
        width : '100%',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        position : 'absolute',
        top : '93.5%',
        flex : 1,
        height : 50,
        shadowColor : 'white',
        shadowOffset : 20,
        shadowRadius : 20,
        borderTopRightRadius : 40,
        borderTopLeftRadius : 40        
    },
    navtab : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        
    },
    text : {
        color : '#E2DFD2'
    }
});
export default AppBar;