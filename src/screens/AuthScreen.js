import React, {useEffect} from 'react'
import {View, AsyncStorage} from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

const AuthScreen = (props)=>{

    useEffect(()=>{
        props.facebookLogin()
        //onAuthComplete()
        //AsyncStorage.removeItem('fb_token')
    },[])

    const onAuthComplete = ()=>{
        if (props.token){
            props.navigation.navigate('MainFlow')
        }
    }
    useEffect(()=>{
        onAuthComplete()
    },[props.token])

    return <View />
}

const mapState = ({auth})=>({
    token: auth.token
})
export default connect(mapState,actions)(AuthScreen)