import {StyleSheet,Dimensions} from 'react-native'

const deviceSize = Dimensions.get('window')

export default StyleSheet.create ({

    container : {
        flex : 1,
        padding : 5,
        bottom :5,
        
    },
    image : {
        width : deviceSize.width ,
        height : deviceSize.height/3.5,
        
    },
    inner_container :{
        flex : 1,
        backgroundColor : '#e0e0e0',
        
    },
    title : {
        fontWeight : 'bold',
        fontSize : 30,
        color : '#870000',
        
    },
    style: {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#870000',
        borderBottomWidth : 1,
        borderBottomColor : '#aeaeae',

    },
    desc : {
        
        margin : 2,
        backgroundColor : '#e0e0e0',
                
    },
    text : {
        fontSize : 17,
        color : 'black'
        
    },
    link : {
        margin : 1,
        padding:1,
        top: 2,
        backgroundColor : '#e0e0e0'
        
    },
   
})