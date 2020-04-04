import React from 'react'
import Slides from '../components/WelcomeSlides'

SLIDES_DATA = [
    {text: "WELCOME to Jobs App!", color: '#03A9F4'},
    {text: "Set your Location, then swipe away..", color: '#009688'},
    {text: "Job Finder will help you get a local job", color: '#03A9F4'}
]

const WelcomeScreen = ({navigation})=>{
    const startAuthFlow = ()=> navigation.navigate('Auth')
    
    return <Slides data={SLIDES_DATA} onStart={startAuthFlow}/>
}

export default WelcomeScreen