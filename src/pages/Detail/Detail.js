import React from 'react';
import { FlatList } from 'react-native';
import Config from 'react-native-config';
import DetailCard from '../../Cards/DetailCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch';

export default function Detail({route}) {

    const {idMeal } = route.params;
    const{data ,error, loading} = useFetch(`${Config.API_DETAIL_URL}=${idMeal}`)
     console.log(data)


    const renderDetails = ({item}) =>  <DetailCard details = {item}  /> 

    if(loading) {
        return <Loading/>
    }
    if(error) {
        return <Error/>
    }
   
    return(
        <FlatList 
        data = {data.meals}
         renderItem = {renderDetails}  
          keyExtractor={(item) => item.idMeal} 
          />
    )
}