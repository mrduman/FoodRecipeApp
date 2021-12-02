import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from './CategoryCard.style'

export default function CategoryCard({ category, onSelect }) {

    

    return (

        <TouchableWithoutFeedback  onPress={onSelect}>
            <View style = {styles.container} >
                <Image style = {styles.image} source = {{uri : category.strCategoryThumb}} />
                <View style = {styles.inner_container}>
                    <Text style = {styles.text}>{category.strCategory}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

}