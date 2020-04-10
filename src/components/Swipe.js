import React, {useRef, useState, useEffect} from 'react'
import {
    View, 
    Animated, 
    PanResponder,
    Dimensions,
    StyleSheet,
    LayoutAnimation,
    UIManager,
    Platform
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SWIPE_THRESHOLD = SCREEN_WIDTH/4
const SWIPE_OUT_DURATION = 250

const Swipe = ({
    data, 
    renderCard, 
    onSwipeLeft=()=>{}, 
    onSwipeRight=()=>{},
    renderNoMoreCards
})=>{
    const [index, setIndex] = useState(0)
    const position =  useRef(new Animated.ValueXY()).current

    //Smoother animation of the cards stack when swiping the card on top  
    useEffect(()=>{
        //for Android
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
        LayoutAnimation.spring()
    },[index])

    //reseting index when getting a new list of cards (data)
    useEffect(()=>{
      setIndex(0)
    },[data])

    const resetPosition = ()=>{
        Animated.spring(position, {
            toValue: {x:0, y:0}
        }).start()
    }
    const forceSwipe = (direction)=>{
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH
        Animated.timing(position, {
            toValue: {x, y: 0},
            duration: SWIPE_OUT_DURATION
        }).start(()=>onSwipeComplete(direction))
    }

    const onSwipeComplete = (direction)=>{
        const resolve = direction === 'right' ? onSwipeRight : onSwipeLeft
        const item = data[index]
        resolve(item)
        position.setValue({x:0,y:0})
        setIndex(index+1)
    }

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: ()=>{
            return true
        },
        onPanResponderMove: (event, gesture)=>{
            position.setValue({x: gesture.dx, y: 0})
        },
        onPanResponderRelease: (event, gesture)=>{
            if (gesture.dx > SWIPE_THRESHOLD){
                forceSwipe('right')
            }else if (gesture.dx < -SWIPE_THRESHOLD){
                forceSwipe('left')
            }else{
                resetPosition()
            }
        }
    })

    const getCardStyle = ()=>{
        const rotate = position.x.interpolate({
            inputRange:[-SCREEN_WIDTH,0, SCREEN_WIDTH] ,
            outputRange: ['-90deg', '0deg', '90deg']
        })
        return {
            ...position.getLayout(),
            transform: [{rotate}]
        }
    }

    const renderCards = () => {
        if(index >= data.length){
            return renderNoMoreCards()
        }
      
       const deck = data.map((item,i) => {
            if(i < index){
                return null
            } else if( i === index){
                return (
                    <Animated.View
                        style={[getCardStyle(),styles.cardStyle]} 
                        {...panResponder.panHandlers}
                        key={item.id}
                    >
                        {renderCard(item)}
                    </Animated.View>  
                )
            }
            return (
                <Animated.View  
                    key={item.id} 
                    style={[styles.cardStyle, {top: 5 * (i-index), zIndex: -i}]}
                >
                    {renderCard(item)}
                </Animated.View>
            )
        })
        return Platform.OS === 'android' ? deck : deck.reverse()
    } 

    return <View style={styles.container}>{renderCards()}</View>  
}

const styles = StyleSheet.create({
   cardStyle:{
       position: 'absolute',
       width: SCREEN_WIDTH,
    },
    container:{
        marginTop: 50
    }
})

export default Swipe