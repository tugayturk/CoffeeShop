import { View, Text, ImageBackground, TextInput, useWindowDimensions, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
export default function HomeScreen() {
    const  { width, height } = useWindowDimensions();
    return (
        <SafeAreaView className="flex-1" edges={['bottom', 'left', 'right']}>
            <ImageBackground className="  " source={require('../assets/images/coffee.jpg')} style={{ width, height:height * 0.2 }} >

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

            <View className=" flex-row items-center justify-center gap-2 mt-3 border-2 border-red-500" style={{ height: height * 0.35, width: width * 0.7 }}>
                <Text className='text-md font-bold text-black'>Categories</Text>
            </View>
        </SafeAreaView>
    );
}
