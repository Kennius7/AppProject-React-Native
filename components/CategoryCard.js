import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';




const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity>
        <Image 
        source={require(`${imgUrl}`)} 
        style={tw`w-15 h-15 bg-grey-300`} 
        />
        <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard