import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from '../screens/SplashScreen';
import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';
import RecipeMenuScreen from "../screens/RecipeMenuScreen";
import MyRecipeScreen from '../screens/MyRecipeScreen';
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import CalculatePortionScreen from "../screens/CalculatePortionScreen";
import AllRecipeScreen from "../screens/AllRecipeScreen";
import NewRecipeScreen from "../screens/NewRecipeScreen";
import IngredientesScreen from "../screens/Ingredienttable";
import RecipeMenuCScreen from "../screens/RecipeMenuCScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import IngredientsRecipeScreen from "../screens/IngredientsRecipeScreen";
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
        <Stack.Screen name="NewRecipe" component={NewRecipeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="IngredientSearch" component={IngredientesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Eyes" component={RecipeMenuCScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Ingredients" component={IngredientsRecipeScreen} options={{ headerShown: false }} />

        
        
        
        </Stack.Navigator>
    );
};

export default AppNavigator;