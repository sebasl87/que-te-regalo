import React, { useState, useMemo, useEffect } from "react";
import Constants from "expo-constants";
import * as Google from "expo-auth-session/providers/google";

import Firebase from "./Firebase";

import { StatusBar } from "react-native";

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
  sendPasswordResetEmail,
} from "firebase/auth";

import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  HomeScreen,
} from "./src/screens";
import theme from "./src/customTheme";

const Stack = createNativeStackNavigator();

export default function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: Constants.manifest.extra.EXPO_KEY, //From app.json
    iosClientId: Constants.manifest.extra.IOS_KEY, //From app.json
    androidClientId: Constants.manifest.extra.ANDROID_KEY, //From app.json
  });

  const auth = getAuth(Firebase);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserProfile(user);
      } else {
        setUserProfile(null);
      }
    });
  }, []);

  useEffect(() => {
    response && response.authentication && setUserProfile(response);
  }, [response]);

  const doLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const doSignup = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUserProfile(userCredential);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const doLogout = () => {
    signOut(auth)
      .then(() => {
        setUserProfile(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const doReset = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleLogin = () => {
    try {
      promptAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const mainC = useMemo(
    () => ({
      userProfile: { userProfile },
      signOutUser: () => doLogout(),
      handleLogin: (email, password) => {
        doLogin(email, password);
      },
      handleSignup: (email, password) => {
        doSignup(email, password);
      },
      handleResetPassword: (email) => {
        doReset(email);
      },
      handleGLogin: () => googleLogin(),
    }),
    []
  );

  return (
    <mainContext.Provider value={mainC}>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <StatusBar />
          <Stack.Navigator initialRouteName="Login">
            {userProfile ? (
              <Stack.Screen name="Home" component={HomeScreen} />
            ) : (
              <>
                <Stack.Screen name="Login" component={LoginScreen} />

                <Stack.Screen
                  name="ForgotPassword"
                  component={ForgotPasswordScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="NewUser" component={RegisterScreen} />
              </>
            )}
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </mainContext.Provider>
  );
}
