import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor : '#ff9800'

    },
    inner_container: {

        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        overflow: 'hidden',
        height: 200,
        flex: 1,
        margin: 10,

    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover',



    },

    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        position: 'absolute',
        padding: 5,
        backgroundColor: '#000000c0',
        opacity: 0.9,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '100%',
        textAlign : 'right'
        


    },
})