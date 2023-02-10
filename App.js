import React from "react";
import { Text, View, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from "./src/screens";
import theme from "./src/customTheme";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function NewUserScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>New User Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <StatusBar />
        <Stack.Navigator initialRouteName="nidit!">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={NewUserScreen} />
          <Stack.Screen name="NewUser" component={RegisterScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
