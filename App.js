import React from "react";
import { StatusBar, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  HomeScreen,
} from "./src/screens";



import theme from "./src/customTheme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <StatusBar />
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} 
          options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={HomeScreen} 
        //   options={{
        //     title: 'Home', //Set Header Title
        //     headerStyle: {
        //       backgroundColor: '#d8d8d8', //Set Header color
        //     },
        //     headerTintColor: 'black', //Set Header text color
        //     headerTitleStyle: {
        //       fontWeight: 'bold', //Set Header text style
        //     },
        //     headerLeft: () => <Image
        //     source={require("./assets/menu.png")}
        //     style={{ width: 34, height: 23 }}
        //   />,
        //   // headerLeft: ()=> null,
        //   headerTitle: () => <Image
        //   source={require("./assets/IsoLogo.png")}
        //   style={{ width: 180, height: 60 }}
        // />,    


        //   }}         
        options={{ headerShown: false }}
          />
          <Stack.Screen name="NewUser" component={RegisterScreen} 
          options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
