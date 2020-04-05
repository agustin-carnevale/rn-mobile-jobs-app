import { AsyncStorage } from 'react-native'
import * as Facebook from 'expo-facebook'
import {
    FB_LOGIN_SUCCESS,
    FB_LOGIN_FAIL
} from './types'

export const facebookLogin = () => async dispatch => {
    const token = await AsyncStorage.getItem('fb_token')
    if (token) {
        console.log('already have a token: ',token)
        dispatch({type: FB_LOGIN_SUCCESS, payload: token})
    }else {
        doFacebookLogin(dispatch)
    }   
}

const doFacebookLogin = async dispatch => {
    try {
        await Facebook.initializeAsync('256827058811138','rn-jobs-app')
        const {type, token} = await Facebook.logInWithReadPermissionsAsync('256827058811138',{
            permissions: ['public_profile']
        })
    
        if (type==='cancel'){
            return dispatch({type: FB_LOGIN_FAIL})
        }
        await AsyncStorage.setItem('fb_token', token)
        console.log(token)
        dispatch({type: FB_LOGIN_SUCCESS, payload: token})

    } catch (error) {
        console.log(error)
    }
}