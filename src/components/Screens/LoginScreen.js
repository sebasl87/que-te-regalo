import React, { useState } from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebase-config";

import { LinearGradient } from "expo-linear-gradient";
import LoginWithUser from "../LoginWithUser";
import DividerWithText from "../DividerWithText";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        colors={["#FFD194", "#70E1F5"]}
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
          <View style={styles.login}>
            <Image
              source={require("../../../assets/nidit-logo.png")}
              style={styles.logoPicture}
            />
            <View style={{ top: -10 }}>
              <Text style={styles.registerText}>
                ¿Eres nuevo?
                <Text
                  style={styles.linkText}
                  onPress={() => navigation.navigate("NewUser")}
                >
                  {" "}
                  Crear una cuenta
                </Text>
              </Text>
            </View>
            <LoginWithUser />
            <View>
              <Text style={styles.forgotText}>
                Ups! Olvidé mi
                <Text
                  style={styles.linkText}
                  onPress={() => navigation.navigate("ForgotPassword")}
                >
                  {" "}
                  contraseña
                </Text>
              </Text>
            </View>
            <DividerWithText text="O puedes"/>
            <TouchableOpacity
              onPress={handleCreateAccount}
              style={[styles.button, { backgroundColor: "#6792F090" }]}
            >
              <Text style={{ fontSize: 14, fontWeight: "400", color: "white" }}>
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
        </ScrollView>
      </LinearGradient>
    </View>
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
  login: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 336,
    height: 533,
    borderColor: "#000",
    borderWidth: 1.1,
    borderRadius: 16,
    alignItems: "center",
  },
  logoPicture: {
    width: 118,
    height: 160,
    top: 20,
    bottom: 0,
  },
  registerText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
  },
  linkText: {
    color: "#F5B042",
  },
  forgotText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "center",
  },
  inputText: {
    width: 301,
    height: 56,
    borderRadius: 8,
    marginTop: 16,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
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

export default LoginScreen;
