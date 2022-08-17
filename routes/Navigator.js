import * as React from 'react';
import { Button, View ,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/homescreen';
import CategoriesScreen from '../screens/categories'
import CinemaScreen from '../screens/cinemaScreen'
import SettingsScreen from '../screens/settingsScreen';
import { AppContext } from '../context/context';
import CustomDrawer from './customDrawer';
import { FontAwesome,Ionicons,AntDesign,Entypo,MaterialIcons } 
from '@expo/vector-icons';
import MyStack from './stacks';
import { useNavigationState } from '@react-navigation/native';
import Movieplayer from '../screens/movieplayer';


const Drawer = createDrawerNavigator();

export default function App() {

  
  const {colors,onCinema,darkMode} = React.useContext(AppContext)
  
  return (
    <NavigationContainer
      theme={{colors:{background:darkMode ? '#343434' : 'D3D3D3',text:darkMode ? 'white' : 'black' }}}
      
    >
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent={props => <CustomDrawer {...props} />}
        
        screenOptions={() =>({
          drawerStyle: {
            backgroundColor : darkMode ? '#343434' : '#D3D3D3',
            color : 'white',
                   
          },
          headerStyle : {backgroundColor : darkMode ? '#343434' : '#D3D3D3'},
          headerTitleStyle : {color : darkMode ? colors.gold : colors.darkgold},
          drawerLabelStyle : {marginLeft : -20,fontWeight:'500',fontSize:18,letterSpacing:2},
          
          drawerActiveBackgroundColor : colors.gold
        })}
      >
        <Drawer.Screen
         name='Home' component={MyStack}
         options ={{
          drawerIcon : ({color}) => <Entypo name='home' color={color} size={18} />,
          headerShown : !onCinema,
          swipeEnabled : !onCinema
          }
           
        }
        
        />
        <Drawer.Screen
         name="Categories" component={CategoriesScreen}
         options ={{
          drawerIcon : ({color}) => <MaterialIcons name='category' color={color} size={18} />,
        }}
          />
        <Drawer.Screen name = 'Settings' component = {SettingsScreen}
        options ={{
          drawerIcon : ({color}) => <FontAwesome name='gears' color={color} size={18} />,
        }}
        />

        <Drawer.Screen name='MovieScreen' component={Movieplayer}
            options = {({navigation}) =>(
                {
                    headerStyle : {backgroundColor : '#33333380'},
                    title : '',
                    animation : 'fade',
                    headerLeft : ()=>(
                        <Ionicons  name="arrow-back-outline" size={24} color="white" 
                            onPress={()=>{
                                navigation.navigate('Home')
                            }}
                        />
                    ),
                    
                    drawerItemStyle : {height : 0}
                    
                }
            )}
        />
        {/* <Drawer.Screen
         name = 'Cinema' component={CinemaScreen}
         options = {{
          headerShown :false,
          drawerItemStyle : {height : 0}
         }}

        /> */}
         
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
  
}
