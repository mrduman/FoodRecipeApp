import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Category from "./pages/Category";
import Meals from "./pages/Meals";
import Detail from "./pages/Detail";


export default function Router() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name = 'CategoryPage'
          component = {Category}
           options = {{
             title : 'Categories',
             headerStyle : {backgroundColor : 'white'},
             headerTitleStyle : {fontSize : 25},
             headerTintColor : '#f9a825',
             headerTitleAlign : 'center'
             }}/>
        <Stack.Screen 
        name = 'MealsPage' 
        component ={Meals} 
        options = {{
          title : 'Meals',
          headerStyle : {backgroundColor : 'white'},
          headerTitleStyle : {fontSize : 25},
          headerTintColor : '#f9a825',
          headerTitleAlign : 'center'
          }}/>
        <Stack.Screen name= 'DetailPage' component = {Detail} 
        options = {{
          title : 'Detail',
          headerStyle : {backgroundColor : 'white'},
          headerTitleStyle : {fontSize : 25},
          headerTintColor : '#f9a825',
          headerTitleAlign : 'center'
          }}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}