import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SomaTitle from "./components/SomaTitle";
import LoginPage from "./pages/LoginPage";
import SecurityCode from "./pages/SecurityCode";
import SignIn from "./pages/SignIn";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    WorkSans: require("./assets/fonts/WorkSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (

    <NavigationContainer >
     
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome"  component={SomaTitle} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Code" component={SecurityCode} />
      </Stack.Navigator>
      <StatusBar  style="dark" />
      
    </NavigationContainer>
  
  );
}