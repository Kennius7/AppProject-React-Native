import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';



const Categories = () => {
  return (
    <View>
        <ScrollView
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{ 
                paddingHorizontal: 15,
            }} >
            <CategoryCard title='Items 1'/>
            <CategoryCard title='Items 2'/>
            <CategoryCard title='Items 3'/>
            <CategoryCard title='Items 4'/>
            <CategoryCard title='Items 5'/>
            <CategoryCard title='Items 6'/>
            <CategoryCard title='Items 7'/>
            <CategoryCard title='Items 8'/>
        </ScrollView>
    </View>
  )
}

export default Categories




// <CategoryCard imgUrl={'https://avatars.mds.yandex.net/i?id=0e9630fabe4f6df12118b5a54d08326c5c9933f8-5238052-images-thumbs&n=13'} title='Items 1' />
// <CategoryCard imgUrl={'https://avatars.mds.yandex.net/i?id=24c8841c429e5ff3d0a141e1fcd3de4404ec72dd-8232950-images-thumbs&n=13'} title='Items 2' />
// <CategoryCard imgUrl={'https://avatars.mds.yandex.net/i?id=49989da33dedfbfa9c70edc4d39d8ab41f6a7c95-8306996-images-thumbs&n=13'} title='Items 3' />
// <CategoryCard imgUrl={'https://avatars.mds.yandex.net/i?id=ab82559194257529873165c52bccffa8e5c198d9-8526247-images-thumbs&n=13'} title='Items 4' />
