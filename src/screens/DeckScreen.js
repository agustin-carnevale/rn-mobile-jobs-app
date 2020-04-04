import React from 'react'
import {View,  StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'

const DeckScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text h4>DeckScreen</Text>
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

export default DeckScreen