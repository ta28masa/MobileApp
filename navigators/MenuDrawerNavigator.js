import React from "react";
import {TouchableOpacity} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '../pages/HomeScreen';
import New from '../pages/NewScreen';
import Logout from '../pages/LogoutScreen';

const Drawer = createDrawerNavigator();

const MenuDrawerNavigator = () => {
    return (
      <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions = {({navigation}) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft:() => {
                return(
                    <TouchableOpacity
                      style={{paddingLeft: 10}}
                      onPress={() => navigation.openDrawer()}>
                        <Icon name="folder" size={24} />
                    </TouchableOpacity>
                )
            },
            headerRight:() => {
                return(
                    <TouchableOpacity
                      style={{paddingRight: 10}}>
                        <Icon name="bell" size={24} />
                    </TouchableOpacity>
                )
            }
        })}
        >
        <Drawer.Screen name="ホーム"    component={Home} />
        <Drawer.Screen name="新規"      component={New} />
        <Drawer.Screen name="ログアウト" component={Logout} options={{headerShown: false}}/>
      </Drawer.Navigator>
    );
}

export default MenuDrawerNavigator;