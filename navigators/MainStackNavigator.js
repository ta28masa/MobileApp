import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen   from '../pages/LoginScreen'
import MenuDrawer    from '../navigators/MenuDrawerNavigator'
import APITestScreen from '../pages/APITestScreen'

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerBackTitleVisible: false }}>
            <Stack.Screen name="Login"       component={LoginScreen}    options={{headerShown: false}} />
            <Stack.Screen name="Home"        component={MenuDrawer}     options={{headerShown: false}} />
            <Stack.Screen name="API"         component={APITestScreen}  options={{headerShown: true}} />
        </Stack.Navigator>
    );
}

export default MainStackNavigator;