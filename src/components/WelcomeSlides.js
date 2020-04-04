import React from 'react'
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native'
import {Text, Button} from 'react-native-elements'

const SCREEN_WIDTH= Dimensions.get('window').width

const WelcomeSlides = ({data,onStart})=>{

    const renderLastSlideButton = (index)=> index === data.length -1 ?
        <Button title="Let's start" raised onPress={onStart}/> : null

    const renderSlides = ()=>(data.map((slide,index) => (
        <View style={[styles.slide, {backgroundColor: slide.color}]} key={slide.text}>
            <Text style={styles.text} h3>{slide.text}</Text>
            {renderLastSlideButton(index)}
        </View>))
    )

    return (
        <ScrollView 
            style={styles.container} 
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
        >
            {renderSlides()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  slide:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: SCREEN_WIDTH,
      padding: 40
  },
  text: {
    color:'white',
    marginBottom: 40
  }
});

export default WelcomeSlides