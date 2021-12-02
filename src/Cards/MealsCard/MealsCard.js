import React from "react";
import { View , Text, Image} from "react-native";
import styles from './MealsCard.style'

export default function MealsCard({meal}) {

    
    
    return(
        <View style = {styles.container}>
            <Image style = {styles.image} source = {{uri : meal.strMealThumb}} />
            <View style = {styles.inner_container}>
            <Text style = {styles.text} >{meal.strMeal}</Text>
        </View>
        </View>
    )
}