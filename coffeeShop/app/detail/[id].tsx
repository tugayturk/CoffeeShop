import { View, Text, Image, TextInput, useWindowDimensions, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Coffee, coffees } from '../../data/coffees';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CoffeeCart } from '../../types/coffee';
import type { RootState } from "../../store/store.ts"
import { useSelector, useDispatch } from "react-redux"
import { addToCart as addToCartAction } from "../../store/coffeeSlice"
import AntDesign from '@expo/vector-icons/AntDesign';

const sizes = ['small', 'medium', 'large'];

const Detail = () => {

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const { width } = useWindowDimensions();
  const route = useRoute<any>();
  const { id } = route.params || {};
  const coffee = coffees.find((coffee) => coffee.id === id);
  const navigation = useNavigation<any>();
  const dispatch = useDispatch()

  const coffeeCart = useSelector((state: RootState) => state.coffee)

  const handleAddToCart = (coffee: Coffee | undefined) => {
    if (!coffee || !selectedSize) {
      return;
    }

    const coffeeData: CoffeeCart = {
      id: coffee.id,
      name: coffee.name,
      description: coffee.description,
      price: coffee.price,
      image: coffee.image,
      size: selectedSize,
      quantity: quantity || 1
    };

    dispatch(addToCartAction(coffeeData));
  }

  const handleQuantity = (calc: number) => {
    setQuantity(prev => {
      const next = prev + calc;
      if (next < 1) return prev;
      return next;
    });
  }


  return (
    <View className='flex-1 bg-white'>
      <StatusBar hidden={true} />
      <Image className="rounded-2xl opacity-90" source={require('../../assets/images/detail.webp')} style={{ width: width, height: 200 }} />

      <Ionicons color="white" className="absolute top-10 left-5 border-2 border-white rounded-full p-2" name="arrow-back" size={24} onPress={() => navigation.goBack()} />

      <SafeAreaView className='flex-1 items-center justify-between bg-white mt-4'>
        <View className='items-center'>
          <Image className='absolute -top-20' source={coffee?.image} style={{ width: 400, height: 400 }} />

        </View>
        <View className='items-center h-[40%] w-full'>
          <Text className='text-2xl font-bold'>{coffee?.name}</Text>
          <Text className='text-sm text-gray-500'>{coffee?.description}</Text>
          <Text className='text-xl font-bold'>{coffee?.price}TL</Text>

          <FlatList
            className='w-full h-[50px] mt-4'
            horizontal
            data={sizes}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 20 }}
            renderItem={({ item }) => (
              <View className={`${selectedSize === item ? 'bg-orange-400 border-none text-white' : 'bg-transparent border-2 border-gray-200 text-gray-500'}
               flex-row items-center justify-center  rounded-full w-[100px] h-[40px] ml-3`}>
                <TouchableOpacity onPress={() => setSelectedSize(item)}
                  className={`rounded-md p-2 `}>
                  <Text className={`${selectedSize === item ? ' text-white' : ' text-gray-500'}`}>{item}</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <TouchableOpacity className='rounded-xl flex-row items-center justify-between w-full' >
            <View className='flex-row flex-1 items-center ml-4'>
              <AntDesign style={{ color: "#d8aa96" }} onPress={() => handleQuantity(- 1)} name="minus-circle" size={36} color="black" />
              <Text className='text-black p-2 m-2 text-2xl font-bold'>{quantity}</Text>
              <AntDesign style={{ color: "#d8aa96" }} onPress={() => handleQuantity(+ 1)} name="plus-circle" size={36} />
            </View>

            <TouchableOpacity className='rounded-xl ml-4 flex-1 flex-row items-center justify-center' onPress={() => handleAddToCart(coffee)}>
              <Text className='text-black'>Add to Cart</Text>
            </TouchableOpacity>
          </TouchableOpacity>


        </View>
      </SafeAreaView>
    </View>
  )
}

export default Detail