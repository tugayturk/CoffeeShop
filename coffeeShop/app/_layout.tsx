import 'react-native-reanimated';
import '../global.css';
import CartScreen from './cart';
import HomeScreen from './index';
import DetailScreen from './detail/[id]';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useWindowDimensions, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  const { width, height } = useWindowDimensions();

  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#ddd',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#DAAE80',
          width: '90%',
          height: width * 0.1,
          borderRadius: 150,
          position: 'absolute',
          bottom: 20,
          left: '10%',
          right: '10%',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          marginHorizontal: 20,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
          marginBottom: 10,
        },
        tabBarBackground: () => <View style={{ flex: 1, backgroundColor: 'transparent' }} />,
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          headerShown: false, tabBarIcon: ({ color, size }) =>
            <Feather
              name={'home'}
              size={size}
              color={color}
            />
        }} />
        {/* <Tab.Screen name="Detail" component={DetailScreen} options={{
          headerShown: false, tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="coffee" size={size} color={color} />
        }} /> */}
        <Tab.Screen name="Cart" component={CartScreen} options={{
          headerShown: false, tabBarIcon: ({ color, size }) =>
            <AntDesign name="shopping-cart" size={size} color={color} />
        }} />
      </Tab.Navigator>
   
  );
}
