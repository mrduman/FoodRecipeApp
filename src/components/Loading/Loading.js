import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function Loading() {
    
    return(
        <AnimatedLottieView 
        source= {require('../../assets/loading.json')} />
    )
}