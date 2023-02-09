import React, { useState } from "react";
import { Image, Text, StyleSheet, View, ScrollView, Alert, TouchableHighlight } from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

import { LinearGradient } from "expo-linear-gradient";
import ResetPassword from "../components/ResetPassword";

function ForgotPasswordScreen({ navigation }) {
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
            <View style={styles.logoAndBack}>
              <View style={styles.back}>
                <TouchableHighlight onPress={() => navigation.navigate("Login")}>
            <Image
              source={require("../../assets/back.png")}
              style={styles.backButton}
            />
            </TouchableHighlight>
            </View>
            <View style={styles.logo}>
            <Image
              source={require("../../assets/nidit-logo.png")}
              style={styles.logoPicture}
            />
            </View>
            </View>
            <View style={{ top: -10 }}>
              <Text style={styles.registerText}>
              Restablecer contraseña
              </Text>
              <Text style={styles.instructionsText}>
              Te enviaremos un email con las instrucciones para restablecer la contraseña. 
              </Text>
            </View>
            <ResetPassword textButton="Enviar" />                        
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
  logoAndBack: {
    flexDirection: "row",
    width: "100%",
  },
  back: {
   top: 24,
   left: 16,
  },
  logo: {    
    width: "100%",
    alignItems: "center",
    right: 10,
  },
  login: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 336,    
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
  backButton: {
    width: 14,
    height: 25,
    top: 0,
    bottom: 0,
  },
  registerText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },  
  instructionsText: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "left",
    color: "rgba(0, 0, 0, 0.8)",
    marginTop: 16,
    marginBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },  
});

export default ForgotPasswordScreen;
