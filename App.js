import React, {useEffect} from 'react'
import {Provider} from 'react-redux'
import store from './src/store'
import MainNavigation from './src/navigation'
import registerForNotifications from './src/services/push_notifications'
import { Notifications } from 'expo'
import {Alert} from 'react-native'

const App = () => {

  useEffect(()=>{
    registerForNotifications()
    Notifications.addListener((notification)=>{
      const {data: {text}, origin} = notification

      if (origin === 'received' && text){
        Alert.alert(
          'New Push Notification',
          text,
          [{text:'Ok'}]
        )
      }
    })
  },[])

  return(
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  )
}

export default App