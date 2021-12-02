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
        <Stack.Screen name = 'CategoryPage' component = {Category} />
        <Stack.Screen name = 'MealsPage' component ={Meals} />
        <Stack.Screen name= 'DetailPage' component = {Detail} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}