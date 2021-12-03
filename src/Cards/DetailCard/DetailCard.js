import React from "react";
import { View, Text, Image, Button, Linking } from "react-native";
import styles from './DetailCard.style'

export default function DetailCard({ details }) {

    return (

        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: details.strMealThumb }} />
            <View style={styles.inner_container} >
                <Text style={styles.title}>{details.strMeal}</Text>
                <Text style={styles.style}>{details.strArea}</Text>
            </View>
            <View style={styles.desc}>
                <Text style={styles.text}>{details.strInstructions}</Text>
            </View>
            <View style = {styles.link}>

                <Button 
                title = 'Watch on Youtube'
                color = 'red'
                onPress = {() => {
                    Linking.openURL(details.strYoutube)
                }}
                
                />

            </View>
        </View>

    )
}
