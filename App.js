
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from './Screens/HomeScreen.js'
const Stack = createStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
      </Stack.Navigator> 
   </NavigationContainer>
  )
}