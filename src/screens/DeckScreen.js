import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import * as actions from '../store/actions'
import Swipe from '../components/Swipe'
import MapView from 'react-native-maps'
import {Card, Button} from 'react-native-elements'

const DeckScreen = (props)=>{

  const renderCard = (job)=>{
    const initialRegion = {
      longitude: -122, // should come in jobs location
      latitude: 37, // should come in jobs location
      longitudeDelta: 0.02,
      latitudeDelta: 0.045
    }
  
    return(
      <Card title={job.title}>
        <View style={styles.mapWrapper}>
          <MapView 
            scrollEnabled={false}
            style={{flex: 1}}
            cacheEnabled
            initialRegion={initialRegion}
          />
        </View>   
        <View style={styles.detailWrapper}>
            <Text>{job.company}</Text>
            <Text>{job.created_at}</Text>
        </View>
        <Text style={styles.description}>{job.description}</Text>
      </Card>
    )
  }
  
  const renderNoMoreCards = ()=>{
    return (
      <Card title="No More Jobs!!">
        <Button title="Back to Map" icon={{name: 'my-location'}} onPress={()=>props.navigation.navigate('Map')}/>
      </Card>
    )
  }
  

  return (
      <View style={styles.container}>
          <Swipe 
            data={props.jobs}
            renderCard={renderCard}
            renderNoMoreCards={renderNoMoreCards}
            onSwipeRight={job => props.likeJob(job)}
          />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  detailWrapper:{
    flexDirection:'row',
    justifyContent: 'space-around',
    marginVertical:10
  },
  mapWrapper:{
    height:300
  },
  description:{
    height: 160
  }
})

const mapState = ({jobs})=>({
  jobs
})

export default connect(mapState,actions)(DeckScreen)