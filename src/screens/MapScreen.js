import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'

const MapScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text h4>MapScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MapScreen