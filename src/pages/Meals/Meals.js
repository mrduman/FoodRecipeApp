import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Config from 'react-native-config';
import MealsCard from '../../Cards/MealsCard';
import useFetch from '../../hooks/useFetch/useFetch';

export default function Meals({ route }) {

    const { strCategory } = route.params
    const { data } = useFetch(`${Config.API_MEALS_URL}=${strCategory}`)

    const renderMeals = ({ item }) => (
        <MealsCard meal={item} />
    )

    console.log(data)

    return (

        <FlatList data={data.meals} renderItem={renderMeals} />
    )
}