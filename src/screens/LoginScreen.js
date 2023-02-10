import React, { useState } from "react";
import { Image, Text, View, ScrollView, Alert } from "react-native";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

import { LinearGradient } from "expo-linear-gradient";
import LoginWithUser from "../components/LoginWithUser";
import DividerWithText from "../components/DividerWithText";
import SocialMediaButton from "../components/SocialMediaButton";
import { BOTONES_SOCIALES_LOGIN } from "../constants";
import { styles } from "./styles";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
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
              source={require("../../assets/nidit-logo.png")}
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
            <LoginWithUser
              handleOnChangeTextPass={(text) => setPassword(text)}
              handleOnChangeTextEmail={(text) => setEmail(text)}
              handleOnPress={handleSignIn}
              textButton="Ingresar"
            />
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
            <DividerWithText text="O puedes" />
            <View style={{ marginTop: 8, marginBottom: 24 }}>
              {BOTONES_SOCIALES_LOGIN.map((b) => {
                const iconToDisplay =
                  b.name === "apple"
                    ? require("../../assets/appleI.png")
                    : b.name === "facebook"
                      ? require("../../assets/facebookI.png")
                      : require("../../assets/googleI.png");
                return (
                  <SocialMediaButton
                    key={b.id}
                    text={b.text}
                    handleCreateAccount={()=>console.log('prueba')}
                    icono={() => (
                      <Image
                        source={iconToDisplay}
                        style={{ width: 30, height: 30 }}
                      />
                    )}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

export default LoginScreen;
