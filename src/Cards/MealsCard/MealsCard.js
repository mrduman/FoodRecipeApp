import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from './MealsCard.style'

export default function MealsCard({ meal, onSelect }) {



    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
                    <Text style={styles.text} >{meal.strMeal}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
