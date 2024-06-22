import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from '../screens/SplashScreen';
import MainScreen from '../screens/MainScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import RecipeMenuScreen from "../screens/RecipeMenuScreen";
import MyRecipeScreen from '../screens/MyRecipeScreen';
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import CalculatePortionScreen from "../screens/CalculatePortionScreen";
import AllRecipeScreen from "../screens/AllRecipeScreen";


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RecipeMenu" component={RecipeMenuScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MyRecipes" component={MyRecipeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CalculatePortion" component={CalculatePortionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AllRecipes" component={AllRecipeScreen} options={{ headerShown: false }} />
        
        </Stack.Navigator>
    );
};

export default AppNavigator;