import { TouchableOpacity, Text, Image, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid'



const RestaurantCard = ({id, title, color, rating, genre, address, short_description, dishes, longitude, latitude}) => {
  return (
    <TouchableOpacity style={tw`bg-white mr-3 shadow`}>
        <Image source={require('../assets/images/judywealth1.jpg')} style={tw`w-64 h-36 rounded-sm`} />
        <View style={tw`px-2 pb-4`}>
            <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
            <View style={tw`flex-row items-center`}>
                <StarIcon color={color} opacity={0.5} size={22} />
                <Text style={tw`text-sm text-gray-500`}>
                    <Text style={tw`text-blue-500 font-bold text-lg`}>{rating}</Text> . {genre}
                </Text>
            </View>
            <View style={tw`flex-row items-center`}>
                <MapPinIcon color={color} opacity={0.4} size={22} />
                <Text>{address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard