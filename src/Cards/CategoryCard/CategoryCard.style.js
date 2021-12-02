import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        padding: 5,
        margin: 7,
        backgroundColor: '#fff',
        borderTopRightRadius : 10,
        borderBottomRightRadius : 10,

    },
    image: {
        minHeight: 100,
        width: 110,
        resizeMode: 'contain',
        marginLeft: 10,
        borderRadius : 50
    },
    inner_container: {

        justifyContent: 'center',
    

    },
    text: {
        fontSize: 28,
        textAlign: 'left',
        color : 'black'

    },
})