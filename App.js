import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

import { LoginScreen, RegisterScreen } from "./src/screens";
import theme from "./customTheme";

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

function ForgotPasswordScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Forgot Pssword Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="Home" component={NewUserScreen} />
          <Stack.Screen name="NewUser" component={RegisterScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
