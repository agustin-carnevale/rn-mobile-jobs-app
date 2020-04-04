import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'

const SettingsScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text h4>SettingsScreen</Text>
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

export default SettingsScreen