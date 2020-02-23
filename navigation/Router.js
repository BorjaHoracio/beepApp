import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import WelcomeScreen from 'beep/app/screens/WelcomeScreen';
import SignInScreen from 'beep/app/screens/SignInScreen';
import HomeScreen from 'beep/app/screens/HomeScreen';

const Stack = createStackNavigator();
const ScreenOptions = {
    headerShown: false
};
export default function Navigation(){
    const containerRef = useRef(null);
    
    return(
        <NavigationContainer>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={ScreenOptions}/>
                <Stack.Screen name="SignInScreen" component={SignInScreen} options={ScreenOptions}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={ScreenOptions}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}