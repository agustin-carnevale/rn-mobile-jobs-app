import _ from 'lodash'
import React,{useState, useEffect} from 'react'
import {AsyncStorage} from 'react-native'
import Slides from '../components/WelcomeSlides'
import {AppLoading} from 'expo'

SLIDES_DATA = [
    {text: "WELCOME to Jobs App!", color: '#03A9F4'},
    {text: "Set your Location, then swipe away..", color: '#009688'},
    {text: "Job Finder will help you get a local job", color: '#03A9F4'}
]

const WelcomeScreen = ({navigation})=>{
    const [token, setToken] = useState(null)

    useEffect(()=>{
        const checkIfTokenAlreadyExists = async ()=> {
            const token = await AsyncStorage.getItem('fb_token')
            if(token){
                navigation.navigate('MainFlow')
                setToken(token)
            }else{
                setToken(false)
            }
        }
        checkIfTokenAlreadyExists()
    },[])

    const startAuthFlow = ()=> navigation.navigate('Auth')

    return (
        _.isNull(token) ?  
        <AppLoading /> :
        <Slides data={SLIDES_DATA} onStart={startAuthFlow}/>
    )
}

export default WelcomeScreen