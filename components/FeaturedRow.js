import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import tw from 'twrnc'
import RestaurantCard from './RestaurantCard'



const FeaturedRow = ({title, description, color}) => {
  return (
    <View>
        <View style={tw`flex-row mt-4 items-center justify-between px-4`}>
            <Text style={tw`font-bold text-lg`}>{title}</Text>
            <ArrowRightIcon size={20} color={color} />
        </View>
        <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
        <View>
            <ScrollView
                horizontal 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={{ 
                    paddingHorizontal: 15,
                }}
                style={tw`pt-4 bg-gray-200`}>

                <RestaurantCard
                    id={1}
                    color={color} 
                    title={"Judith's Item1"} 
                    rating={5.0} 
                    genre={'Cosmetics'} 
                    address={'1, Admiralty way, Lekki, Lagos.'} 
                    short_description={"These are items for sale at Judith's store"} 
                    dishes={'Amala'} 
                    longitude={200} 
                    latitude={400} 
                />
                <RestaurantCard
                    id={2}
                    color={color} 
                    title={"Judith's Item1"} 
                    rating={5.0} 
                    genre={'Cosmetics'} 
                    address={'1, Admiralty way, Lekki, Lagos.'} 
                    short_description={"These are items for sale at Judith's store"} 
                    dishes={'Amala'} 
                    longitude={200} 
                    latitude={400} 
                />  
                <RestaurantCard
                    id={3}
                    color={color} 
                    title={"Judith's Item1"} 
                    rating={5.0} 
                    genre={'Cosmetics'} 
                    address={'1, Admiralty way, Lekki, Lagos.'} 
                    short_description={"These are items for sale at Judith's store"} 
                    dishes={'Amala'} 
                    longitude={200} 
                    latitude={400} 
                />  
                <RestaurantCard
                    id={4}
                    color={color} 
                    title={"Judith's Item1"} 
                    rating={5.0} 
                    genre={'Cosmetics'} 
                    address={'1, Admiralty way, Lekki, Lagos.'} 
                    short_description={"These are items for sale at Judith's store"} 
                    dishes={'Amala'} 
                    longitude={200} 
                    latitude={400} 
                />  
                <RestaurantCard
                    id={5}
                    color={color} 
                    title={"Judith's Item1"} 
                    rating={5.0} 
                    genre={'Cosmetics'} 
                    address={'1, Admiralty way, Lekki, Lagos.'} 
                    short_description={"These are items for sale at Judith's store"} 
                    dishes={'Amala'} 
                    longitude={200} 
                    latitude={400} 
                />            
            </ScrollView>
        </View>
    </View>
  )
}

export default FeaturedRow