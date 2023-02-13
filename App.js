import React, { useState, useMemo, useEffect } from "react";
import Constants from "expo-constants";
import * as Google from "expo-auth-session/providers/google";
// import firebase from "firebase";
import Firebase from "./Firebase";

import { Text, View, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import mainContext from "./src/context/mainContext";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";

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
  const [userLogged, setUserLogged] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const auth = getAuth(Firebase);

  useEffect(() => {
    const user = auth.currentUser;
    user && (setUserLogged(user ? true : false), setUserProfile(user));

    // const authListener = onAuthStateChanged((auth, (user)) => {
    //   setUserLogged(user ? true : false);
    //   setIsLoading(false);
    //   setUserProfile(user);
    // });
    // return authListener;
  }, []);

  const doLogin = async (email, password) => {
    setIsLoading(true);
    //console.log('login' + JSON.stringify(userProfile));
    signInWithEmailAndPassword(email, password).catch((error) =>
      console.log(error)
    );
  };

  const doSignup = async (email, password) => {
    setIsLoading(true);
    //console.log('login' + JSON.stringify(userProfile));
    createUserWithEmailAndPassword(email, password).catch((error) =>
      console.log(error)
    );
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
    }
  }, [response]);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: Constants.manifest.extra.EXPO_KEY, //From app.json
    iosClientId: Constants.manifest.extra.IOS_KEY, //From app.json
    androidClientId: Constants.manifest.extra.ANDROID_KEY, //From app.json
  });
  
  // const Glogin = () => {
    // try {
    //   //await GoogleSignIn.askForPlayServicesAsync();
    //   const result = await Google.logInAsync({
    //     //return an object with result token and user
    //     iosClientId: Constants.manifest.extra.IOS_KEY, //From app.json
    //     androidClientId: Constants.manifest.extra.ANDROID_KEY, //From app.json
    //   });
    //   if (result.type === "success") {
    //     console.log(result);
    //     setIsLoading(true);
    //     const credential = GoogleAuthProvider.credential(
    //       //Set the tokens to Firebase
    //       result.idToken,
    //       result.accessToken
    //     );
    //     signInWithCredential(credential) //Login to Firebase
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   } else {
    //     //CANCEL
    //     console.log("CANCEL")
    //   }
    // } catch ({ message }) {
    //   alert("login: Error:" + message);
    // }
  // };

  const mainC = useMemo(
    () => ({
      userProfile: { userProfile },
      signOutUser: () => signOut(),
      handleLogin: (email, password) => {
        doLogin(email, password);
      },
      handleSignup: (email, password) => {
        doSignup(email, password);
      },
      handleGLogin: () => {
        //The new login with google handler available to context
        promptAsync();
      },
    }),
    []
  );

  return (
    <mainContext.Provider value={mainC}>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <StatusBar />
          <Stack.Navigator initialRouteName="nidit!">
            <Stack.Screen name="Login" component={LoginScreen} />
            {/* <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen name="Home" component={NewUserScreen} />
            {/* <Stack.Screen name="NewUser" component={RegisterScreen} /> */}
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </mainContext.Provider>
  );
}
