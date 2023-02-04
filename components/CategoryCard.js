import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';



const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style={tw`bg-gray-300 relative m-1`}>
        <Image 
        source={require('../assets/images/judywealth1.jpg')} 
        style={tw`w-30 h-25`} 
        />
        <Text style={tw`absolute bottom-1 left-1 text-blue-400 font-bold`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard