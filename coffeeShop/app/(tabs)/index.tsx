import { View, Text, ImageBackground, Image, TextInput, useWindowDimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import { coffees } from '../../data/coffees';
import CoffeeCard from '@/components/CoffeeCard';
export default function HomeScreen() {
    const { width, height } = useWindowDimensions();
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    useEffect(() => {
        if (coffees.length > 0) {
            setSelectedCategory(Number(coffees[0].id));
        }
    }, [coffees])

    

    return (
        <SafeAreaView className="flex-1" edges={['bottom', 'left', 'right']}>
            <ImageBackground className="  " source={require('../../assets/images/coffee.jpg')} style={{ width, height: height * 0.2 }} >

                <View className="flex-1">

                    <View className="flex-1 items-center justify-center w-full text-center">
                        <Text className='text-3xl italic font-bold text-white mt-5'>Coffee Shop</Text>
                    </View>

                    <View className="flex-row items-center justify-center gap-2 w-full mb-5">
                        <TextInput className='text-md w-[95%] font-bold text-black border-2 border-gray-300 rounded-md p-2 bg-slate-200 ' placeholder='Search' />
                        <Feather name="search" color='black' size={20} className=' p-1 absolute right-3' />
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
                        <View className={`flex-row items-center justify-between  rounded-full
                            ${selectedCategory === Number(item.id) ? `border-none` : 'border-2 border-gray-200'}`}>
                            <TouchableOpacity onPress={() => setSelectedCategory(Number(item.id))}
                                className={`p-2 ${selectedCategory === Number(item.id) ? 'bg-orange-400 rounded-full' : 'bg-transparent rounded-md '}`}>
                                <Text className={`text-sm ${selectedCategory === Number(item.id) ? 'text-white rounded-full' : 'text-gray-500'}`}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>

            <View className="mt-3 ml-5" style={{ height: height * 0.85, paddingHorizontal: 2 }}>
                <FlatList horizontal data={coffees} keyExtractor={(item) => item.id} showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
                    <CoffeeCard item={item}  />
                )}
                />
            </View>
        </SafeAreaView>
    );
}
