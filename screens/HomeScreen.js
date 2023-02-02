import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/solid'
import Categories from '../components/Categories';





export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions(
      {headerShown: false}
    )
  }, [])

  return (
    <SafeAreaView>
      {/* Header Section */}
      <View style={tw`bg-yellow-500 flex-row pb-1 items-center space-x-2 px-3`}>
        <View>
          <Image 
            source={require('../assets/images/shosan_acodemia_logo.png')} 
            style={tw`w-15 h-15 p-4 bg-grey-300 rounded-full`} 
          />
        </View>
        <View style={tw`ml-2 flex-1`}>
          <Text style={tw`text-white italic font-bold mt-1`}>Shosan Acodemia</Text>
          <Text style={tw`font-bold text-gray-600 text-xx`}>Deliver Now</Text>
          <Text style={tw`font-bold text-black text-l`}>
            Current Location
            <ChevronDownIcon size={20} color={'#007AFF'} />
          </Text>
        </View>
        <UserIcon size={35} color={'#007AFF'} />
      </View>

      {/* Search Section */}
      <View style={tw`flex-row flex-1 space-x-2 px-1`}>
        <View style={tw`flex-row flex-1 bg-gray-200 items-center space-x-2`}>
          <MagnifyingGlassIcon size={30} color={'#007AFF'} />
          <TextInput placeholder={'Search here...'} keyboardType={'default'} />
        </View>
        <AdjustmentsHorizontalIcon color={'#007AFF'} />
      </View>
      
      {/* Body Section */}
      <View>
        <ScrollView style={tw`bg-blue-100`}>
          {/* Categories */}
          <Categories />
        




          {/* Featured1 */}
          {/* Featured2 */}
          {/* Featured3 */}
        </ScrollView>      
      </View>


    </SafeAreaView>
  )
}

