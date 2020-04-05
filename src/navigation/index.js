import React from 'react'
import {Button} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen'
import AuthScreen from '../screens/AuthScreen'
import MapScreen from '../screens/MapScreen'
import DeckScreen from '../screens/DeckScreen'
import ReviewScreen from '../screens/ReviewScreen'
import SettingsScreen from '../screens/SettingsScreen'

const MainTab = createBottomTabNavigator()
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainFlow = () =>(
    <MainTab.Navigator>
      <MainTab.Screen name="Map" component={MapScreen} />
      <MainTab.Screen name="Deck" component={DeckScreen} />
      <MainTab.Screen name="ReviewFlow" component={ReviewFlow} />
    </MainTab.Navigator>
)

const ReviewFlow = () =>(
  <Stack.Navigator
    //options across all screens
    screenOptions={{
      headerStyle: {}
    }}
  >
    <Stack.Screen 
      name="Review" 
      component={ReviewScreen}
      options={({navigation,route})=>({
        headerTitle: "Review Jobs",
        headerRight: ()=>(
          <Button 
            title="Settings > "
            type="clear"
            onPress={()=>navigation.navigate('Settings')}
          />
        )
      })}
    />
    <Stack.Screen name="Settings" component={SettingsScreen}/>
  </Stack.Navigator>
)

export default () => (
  <NavigationContainer>
    <Tab.Navigator tabBarOptions={{tabBarVisible:false}}>
      <Tab.Screen name="Welcome" component={WelcomeScreen} options={{tabBarVisible: false}} />
      <Tab.Screen name="Auth" component={AuthScreen} options={{tabBarVisible: false}}/>
      <Tab.Screen name="MainFlow" component={MainFlow} options={{tabBarVisible: false}}/>
    </Tab.Navigator>
  </NavigationContainer>
)