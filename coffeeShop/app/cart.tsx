import { StyleSheet, Text, useWindowDimensions, View} from 'react-native'
import React from 'react'



const CartScreen = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View style={{ width: width * 0.8 }} className='mt-10' >
        <Text>CoffeeCard</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})