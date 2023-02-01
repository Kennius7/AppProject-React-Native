import { Text, View, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions(
      {headerShown: false}
    )
  }, [])

  return (
    <SafeAreaView>
      <View style={tw`bg-yellow-500 flex-row`}>
        <View>
          <Image 
            source={require('../assets/images/shosan_acodemia_logo.png')} 
            style={tw`w-15 h-15 p-4 bg-grey-300 rounded-full`} 
          />
        </View>
        <View>
          <Text style={tw`text-white`}>Shosan Acodemia</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

