import React, {useState, useEffect} from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import MapView from 'react-native-maps'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import {Button} from 'react-native-elements'
 
const MapScreen = (props)=>{
  const [region, setRegion] = useState({
    longitude: -122,
    latitude: 37,
    longitudeDelta: 0.04,
    latitudeDelta: 0.09
  })
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(()=>{
    setMapLoaded(true)
  },[])

  if(!mapLoaded){
    return (
      <View style={{flex: 1, justifyContent:'center'}}>
        <ActivityIndicator />
      </View>
    )
  }
  return (
      <View style={styles.container}>
          <MapView 
            style={styles.map}
            region={region}
            onRegionChangeComplete={setRegion}
          />
          <View style={styles.buttonContainer}>
            <Button 
              buttonStyle={styles.button}
              title="Search this location"
              icon={{name: 'search'}}
              onPress={()=>props.fetchJobs(region, ()=>{
                props.navigation.navigate('Deck')
              })}
            />
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map:{
    flex: 1
  },
  button:{
    height: 60,
    backgroundColor:"#009688"
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    left: 15,
    right: 15
  }
});

export default connect(null,actions)(MapScreen)