import React from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import {Text, Card, Button} from 'react-native-elements'
import {connect} from 'react-redux'
import {Linking} from 'expo'
import MapView from 'react-native-maps'

const ReviewScreen = ({likedJobs})=>{
  
  const renderLikedJobs = ()=>{
    if(likedJobs.length === 0)
      return <Text style={styles.emptyListMessage} h4>- No liked jobs yet -</Text>

    return likedJobs.map(job =>{
      const initialRegion = {
        longitude: -122, // should come in job.location
        latitude: 37, // should come in job.location
        longitudeDelta: 0.02,
        latitudeDelta: 0.045
      }

      return (
        <Card title={job.title} key={job.id}>
          <View style={{height:300}}>
            <MapView 
              scrollEnabled={false}
              style={{flex: 1}}
              cacheEnabled
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text>{job.company}</Text>
              <Text>{job.created_at}</Text>
            </View>
            <Button 
              title="Apply now" 
              onPress={()=>Linking.openURL(job.company_url)}
            />
          </View>
        </Card>
      )
    })
  }

  return (
      <View style={styles.container}>
          <ScrollView>
            {renderLikedJobs()}
          </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  detailWrapper:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginVertical:10,
    fontStyle: 'italic'
  },
  emptyListMessage:{
    margin: 30,
    marginTop: 60
  }
});

const mapState = ({likedJobs}) =>({
  likedJobs
})

export default connect(mapState)(ReviewScreen)