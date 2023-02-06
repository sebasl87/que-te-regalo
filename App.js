import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const uri = "https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg";
const profilePicture = "https://randomuser.me/api/portraits/men/100.jpg";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account created!");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in!");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#70E1F5", "#FFD194"]}
        style={styles.background}
        start={[0, 1]}
        end={[0.75, 1]}
      >
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BlurView intensity={100}>
            <View style={styles.login}>
              <Image
                source={{ uri: profilePicture }}
                style={styles.profilePicture}
              />
              <View>
                <Text
                  style={{ fontSize: 17, fontWeight: "400", color: "white" }}
                >
                  E-mail
                </Text>
                <TextInput
                  onChangeText={(text) => setEmail(text)}
                  style={styles.input}
                  placeholder="betomoedano@outlook.com"
                />
              </View>
              <View>
                <Text
                  style={{ fontSize: 17, fontWeight: "400", color: "white" }}
                >
                  Password
                </Text>
                <TextInput
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                  placeholder="password"
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity
                onPress={handleSignIn}
                style={[styles.button, { backgroundColor: "#00CFEB90" }]}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: "400", color: "white" }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCreateAccount}
                style={[styles.button, { backgroundColor: "#6792F090" }]}
              >
                <Text
                  style={{ fontSize: 14, fontWeight: "400", color: "white" }}
                >
                  Create Account
                </Text>
              </TouchableOpacity>
              <View flexDirection="row">
                <TouchableOpacity
                  onPress={handleSignIn}
                  style={[
                    styles.button,
                    styles.social,
                    { backgroundColor: "#00CFEB90" },
                  ]}
                >
                  <Text
                    style={{ fontSize: 14, fontWeight: "400", color: "white" }}
                  >
                    G+
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSignIn}
                  style={[
                    styles.button,
                    styles.social,
                    { backgroundColor: "#00CFEB90" },
                  ]}
                >
                  <Text
                    style={{ fontSize: 14, fontWeight: "400", color: "white" }}
                  >
                    Apple
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSignIn}
                  style={[
                    styles.button,
                    styles.social,
                    { backgroundColor: "#00CFEB90" },
                  ]}
                >
                  <Text
                    style={{ fontSize: 14, fontWeight: "400", color: "white" }}
                  >
                    Fb
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  login: {
    width: 350,
    height: 500,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 1,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
    backgroundColor: "#ffffff90",
    marginBottom: 20,
  },
  button: {
    width: 250,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 6,
    borderColor: "#fff",
    borderWidth: 1,
  },
  social: {
    width: 50,
    marginHorizontal: 6,
  },
});
