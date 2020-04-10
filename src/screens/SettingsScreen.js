import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import {connect} from 'react-redux'
import * as actions from '../store/actions'

const SettingsScreen = (props)=>{
    return (
        <View style={styles.container}>
            <Button 
              title="Reset Liked Jobs"
              icon={{name: 'delete-forever'}}
              onPress={props.clearLikedJobs}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: 50
  },
});

export default connect(null,actions)(SettingsScreen)