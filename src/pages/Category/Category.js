import React from 'react';
import { FlatList, View } from 'react-native';
import Config from 'react-native-config';
import CategoryCard from '../../Cards/CategoryCard/CategoryCard';
import useFetch from '../../hooks/useFetch';

export default function Category({ navigation }) {

    const { data } = useFetch(Config.API_URL)

    const selectHandleCategory = (strCategory) => { navigation.navigate('MealsPage', { strCategory }) }

    const renderProduct = ({ item }) => (
        <CategoryCard
            category={item}
            onSelect={() => selectHandleCategory(item.strCategory)}
        />

    )

    return (

        <View style={{ backgroundColor: '#ff9800' }}>
            <FlatList data={data.categories} renderItem={renderProduct} />
        </View>

    )
}