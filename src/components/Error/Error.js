import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function Error() {
    
    return (
        <AnimatedLottieView
        source = {require('../../assets/error.json')}
        autoPlay
        />
    )
}