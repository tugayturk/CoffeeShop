import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { CoffeeCart } from '@/types/coffee';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { decreaseQuantity, incrementQuantity, removeCart } from '@/store/coffeeSlice';
import AntDesign from '@expo/vector-icons/AntDesign';

const CartScreen = () => {

  const coffeeCart = useSelector((state: RootState) => state.coffee)
  const dispatch = useDispatch();
 
 
  return (
    <SafeAreaView className='mt-10 w-full h-full'>
      <Text className='text-2xl font-bold text-center mb-2'>Cart</Text>
      <FlatList
        data={coffeeCart.coffee}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }: { item: CoffeeCart }) => (
          <View className='rounded-2xl p-4 bg-[#DAAE80] m-4 flex-row items-center justify-between overflow-hidden'>
            <Image source={item.image} className='w-20 h-20 rounded-2xl' />

            <View className='flex-1 ml-3 items-start justify-center min-w-0'>
              <Text className='text-xl font-bold text-white' numberOfLines={1}>{item.name}</Text>
              <Text className='text-white/90 text-sm font-semibold mt-0.5'>
                Size: {item.size.charAt(0).toUpperCase() + item.size.slice(1).toLowerCase()}
              </Text>
              <View className='flex-row items-center gap-1 mt-2'>
                <TouchableOpacity onPress={() => dispatch(decreaseQuantity(item))} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
                  <AntDesign name="minus-circle" size={24} color="white" />
                </TouchableOpacity>
                <Text className='text-black px-3 text-xl font-bold min-w-[28px] text-center'>{item.quantity}</Text>
                <TouchableOpacity onPress={() => dispatch(incrementQuantity(item))} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
                  <AntDesign name="plus-circle" size={24} color="white" />
                </TouchableOpacity>
              </View>
              <Text className='text-white font-bold text-lg mt-1'>
                Total: {item.price * item.quantity} TL
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => dispatch(removeCart(item.id))}
              className='bg-white rounded-full p-2.5 ml-2'
              activeOpacity={0.7}
            >
              <Ionicons name='trash-outline' size={18} color='black' />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})