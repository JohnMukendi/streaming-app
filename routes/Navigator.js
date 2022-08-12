import * as React from 'react';
import { Button, View ,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/homescreen';
import CategoriesScreen from '../screens/categories'
import SettingsScreen from '../screens/settingsScreen';
import { AppContext } from '../context/context';
import CustomDrawer from './customDrawer';
import { FontAwesome,Ionicons,AntDesign,Entypo,MaterialIcons } 
from '@expo/vector-icons';
import {useRoute} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export default function App() {

  
  const {colors} = React.useContext(AppContext)
  console.log(colors.fullRed)
  return (
    <NavigationContainer
      theme={{colors:{background:'#343434',text:'white' }}}
      
    >
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent={props => <CustomDrawer {...props} />}
        
        screenOptions={() =>({
          drawerStyle: {
            backgroundColor : '#343434',
            color : 'white',
            marginTop : 80       
          },
          headerShown : true,
          headerTitleStyle : {color : colors.gold},
          drawerLabelStyle : {marginLeft : -20,fontWeight:'500',fontSize:18,letterSpacing:2},
          
          drawerActiveBackgroundColor : colors.gold
        })}
      >
        <Drawer.Screen
         name='Home' component={HomeScreen}
         options ={{
          drawerIcon : ({color}) => <Entypo name='home' color={color} size={18} />,
          
        }}
        
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
        
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
  
}
