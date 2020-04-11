import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';
import axios from 'axios'

const PUSH_ENDPOINT = 'https://exp.host/--/api/v2/push/send'

export default async ()=>{
    let previousToken = await AsyncStorage.getItem('pushtoken')
    console.log('token',previousToken)
    if(previousToken){
        return
    }else{
        let {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
        
        if(status !== "granted"){
            return
        }
        try {
            let token = await Notifications.getExpoPushTokenAsync()
            console.log(token)
            //await axios.post(PUSH_ENDPOINT,{token: {token}})
            AsyncStorage.setItem('pushtoken', token)
            
        } catch (error) {
            console.error(error)
        }   
    }
}