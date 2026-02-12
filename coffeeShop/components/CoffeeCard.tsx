import { StyleSheet, Text, useWindowDimensions, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { coffees } from '../data/coffees';
import { router } from 'expo-router';


const CoffeeCard = ({ item}: { item: typeof coffees[0] }) => {

  const { width, height } = useWindowDimensions();


  return (
    <TouchableOpacity activeOpacity={0.8} style={{ width: width * 0.8 }} className='mt-10'
     onPress={() => router.push(`/detail/${item.id}`)} >

      <View className='flex items-center justify-between  bg-[#DAAE80] p-4 rounded-2xl w-[90%] '>
        <View className='flex-row items-center justify-between '>
          <Image source={item.image} style={{ width: 300, height: 300 }} />
        </View>
        <View className='flex-column items-start justify-end gap-2 w-full'>

          <Text className='text-2xl font-bold text-white'>{item.name}
          </Text>
          <Text className='text-md text-white'>{item.description}
          </Text>
          <TouchableOpacity className='bg-orange-400 rounded-md p-2'>
            <Text className='text-md font-bold text-white'>{item.price}TL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CoffeeCard

const styles = StyleSheet.create({})