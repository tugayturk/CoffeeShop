import { View, Text, Image, ImageBackground, useWindowDimensions, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { coffees } from '../../data/coffees';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const sizes = ['small', 'medium', 'large'];

const Detail = () => {

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const { width, height } = useWindowDimensions();
  const route = useRoute<any>();
  const { id } = route.params || {};
  const coffee = coffees.find((coffee) => coffee.id === id);
  const navigation = useNavigation<any>();
  
  return (
    <View className='flex-1 bg-white'>
      <StatusBar hidden={true} />
      <Image className="rounded-2xl opacity-90" source={require('../../assets/images/detail.webp')} style={{ width: width, height: 200 }} />

      <Ionicons color="white" className="absolute top-10 left-5 border-2 border-white rounded-full p-2" name="arrow-back" size={24} onPress={() => navigation.goBack()} />


      <SafeAreaView className='flex-1 items-center justify-between bg-white '>
        <View className='items-center justify-between'>
          <Image className='absolute -top-20' source={coffee?.image} style={{ width: 400, height: 400 }} />

        </View>
        <View className='items-center justify-between h-[50%] w-full '>
          <Text className='text-2xl font-bold'>{coffee?.name}</Text>
          <Text className='text-sm text-gray-500'>{coffee?.description}</Text>
          <Text className='text-xl font-bold'>{coffee?.price}TL</Text>

          <FlatList
            className='w-full h-[50px] mt-2'
            horizontal
            data={sizes}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 20 }}
            renderItem={({ item }) => (
              <View className={`${selectedSize === item ? 'bg-orange-400 border-none text-white' : 'bg-transparent border-2 border-gray-200 text-gray-500'}
               flex-row items-center justify-center  rounded-full w-[100px] h-[50px] ml-3`}>
                <TouchableOpacity onPress={() => setSelectedSize(item)}
                  className={`rounded-md p-2 `}>
                  <Text className={`${selectedSize === item ? ' text-white' : ' text-gray-500'}`}>{item}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Detail