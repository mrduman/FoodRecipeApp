import { StyleSheet ,Dimensions} from "react-native";

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({

    container : {
        flex :1,
        padding : 5,
        backgroundColor:"#ffa000"
    },
    image : {
        width:deviceSize.width*0.955,
        height:deviceSize.height*0.23,
        borderRadius:15,
        
    },
    inner_container : {
        flex : 1,
        margin : 7,
        alignItems : 'center'
    },
    text : {
        fontWeight : 'bold',
        fontSize : 25
    },
})