import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Splash from "./screen/Splash";
import Transit from "./screen/Transit";
import Index from "./screen/Index";
import Home from "./screen/Home";
import Vote from "./screen/Vote";
import Token from "./screen/Token";
import About from "./screen/About";
import Scan from "./screen/Scan";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="transit" component={Transit} />
        <Stack.Screen name="index" component={Index} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="vote" component={Vote} />
        <Stack.Screen name="token" component={Token} />
        <Stack.Screen name="about" component={About} />
        <Stack.Screen name="scan" component={Scan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
