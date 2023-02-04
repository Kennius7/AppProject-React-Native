import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/solid'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import FeaturedRowDummy from '../components/FeaturedRowDummy';





export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions(
      {headerShown: false}
    )
  }, [])

  const brandColor1 = '#007AFF';

  return (
    <SafeAreaView>
      {/* Header Section */}
      <View style={tw`bg-yellow-500 flex-row items-center px-3 mb-4`}>
        <View>
          <Image 
            source={require('../assets/images/shosan_acodemia_logo.png')} 
            style={tw`w-15 h-15 p-4 bg-gray-300 rounded-full`} 
          />
        </View>
        <View style={tw`ml-2 flex-1`}>
          <Text style={tw`text-white italic font-bold mt-1`}>Shosan Acodemia</Text>
          <Text style={tw`font-bold text-gray-600`}>Deliver Now</Text>
          <Text style={tw`font-bold text-black`}>
            Current Location
            <ChevronDownIcon size={15} color={brandColor1} />
          </Text>
        </View>
        <UserIcon size={25} color={brandColor1} />
      </View>

      {/* Search Section */}
      <View style={tw`flex-row flex-1 mb-4`}>
        <View style={tw`flex-row flex-1 bg-gray-200 items-center justify-center`}>
          <MagnifyingGlassIcon size={25} color={brandColor1} />
          <TextInput style={tw`border-2 w-4/5 h-8 rounded ml-1 pl-2 text-blue-400`} placeholder={'Search here...'} keyboardType={'default'} />
          <AdjustmentsHorizontalIcon style={tw`ml-1`} color={brandColor1} />
        </View>
      </View>
      
      {/* Body Section */}
        <ScrollView 
          contentContainerStyle={{ 
            paddingVertical: 15,
            marginBottom: 15,
          }} 
          style={tw`bg-blue-100`}>

          <Categories />

          <FeaturedRow
            id={1}
            title={'Featured'}
            description={'Paid placement from our partners'}
            color={brandColor1} />
          <FeaturedRow
            id={2} 
            title={'Latest Products'}
            description={'Most recent products in store'}
            color={brandColor1} />
          <FeaturedRow
            id={3} 
            title={'Most Popular'}
            description={'Most popular picks from our customers'}
            color={brandColor1} />
          <FeaturedRow
            id={4} 
            title={'Our cheapest deals'}
            description={'Affordable and easy to buy'}
            color={brandColor1} />
          <FeaturedRowDummy />
        </ScrollView>      
    </SafeAreaView>
  )
}

