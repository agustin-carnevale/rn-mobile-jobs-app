import React from 'react';
import {Platform} from 'react-native';
import {Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './src/screens/WelcomeScreen'
import AuthScreen from './src/screens/AuthScreen'
import MapScreen from './src/screens/MapScreen'
import DeckScreen from './src/screens/DeckScreen'
import ReviewScreen from './src/screens/ReviewScreen'
import SettingsScreen from './src/screens/SettingsScreen'

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

const App = () => (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Welcome" component={WelcomeScreen} options={{tabBarVisible: true}} />
          <Tab.Screen name="Auth" component={AuthScreen} options={{tabBarVisible: true}}/>
          <Tab.Screen name="MainFlow" component={MainFlow} options={{tabBarVisible: true}}/>
        </Tab.Navigator>
      </NavigationContainer>
)

export default () =>(
  <App />
)