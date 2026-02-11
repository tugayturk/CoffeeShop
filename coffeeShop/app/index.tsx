import { View, Text, ImageBackground, Image, TextInput, useWindowDimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import { coffees } from '../data/coffees';
export default function HomeScreen() {
    const { width, height } = useWindowDimensions();
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    useEffect(() => {
        if(coffees.length > 0) {
            setSelectedCategory(Number(coffees[0].id));
        }
    }, [coffees])
    
    return (
        <SafeAreaView className="flex-1" edges={['bottom', 'left', 'right']}>
            <ImageBackground className="  " source={require('../assets/images/coffee.jpg')} style={{ width, height: height * 0.2 }} >

                <View className="flex-1">

                    <View className="flex-1 items-center justify-center w-full text-center">
                        <Text className='text-2xl font-bold text-white mt-5'>Welcome to Coffee Shop</Text>
                    </View>

                    <View className="flex-row items-center justify-center gap-2 w-full mb-5">
                        <TextInput className='text-md w-[60%] font-bold text-black border-2 border-gray-300 rounded-md p-1 bg-slate-200' placeholder='Search' />
                        <Feather name="search" size={24} className='text-white bg-orange-400 rounded-full p-1' />
                    </View>

                </View>
            </ImageBackground>
       
            <View className='mt-3 ml-5 flex-row items-center justify-between'>
                <FlatList
                horizontal
                 data={coffees}
                 keyExtractor={(item) => item.id}
                 showsHorizontalScrollIndicator={false}
                 contentContainerStyle={{ gap: 5 }}
                 renderItem={({ item }) => (
                    <View className='flex-row items-center justify-between border-2 border-gray-200 rounded-full'>
                        <TouchableOpacity onPress={() => setSelectedCategory(Number(item.id))} 
                        className={ `rounded-md p-2 ${selectedCategory === Number(item.id) ? 'bg-orange-400' : 'bg-transparent'}`}>
                            <Text className={`text-sm ${selectedCategory === Number(item.id) ? 'text-white' : 'text-gray-500'}`}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                 )}
                />
            </View>

          
            <View className="mt-3 ml-5" style={{ height: height * 0.85, paddingHorizontal: 2 }}>
                <FlatList horizontal data={coffees} keyExtractor={(item) => item.id} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (

                    <View style={{ width: width * 0.8}} className='mt-10' >

                        <View className='flex items-center justify-between  bg-[#DAAE80] p-4 rounded-2xl w-[90%] '>
                            <View className='flex-row items-center justify-between '>
                            <Image source={item.image} style={{ width: 300, height: 300 }}  />
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
                    </View>

                )}
                />
            </View>
        </SafeAreaView>
    );
}
