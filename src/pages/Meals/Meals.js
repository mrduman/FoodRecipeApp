import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Config from 'react-native-config';
import MealsCard from '../../Cards/MealsCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch/useFetch';

export default function Meals({ route, navigation }) {

    const { strCategory } = route.params
    const { data ,loading ,error} = useFetch(`${Config.API_MEALS_URL}=${strCategory}`)

    const selectHandleDetail = (idMeal ) => {navigation.navigate('DetailPage' ,{idMeal}) }

    const renderMeals = ({ item }) => (
        <MealsCard meal={item} onSelect = {() =>selectHandleDetail(item.idMeal )} />
    )

    if(loading) {
        return <Loading/>
    }
    if(error) {
        return <Error/>
    }

    return (

        <FlatList data={data.meals} renderItem={renderMeals} />
    )
}