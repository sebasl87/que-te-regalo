import React, { useState } from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Alert,
  TouchableHighlight,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

import { LinearGradient } from "expo-linear-gradient";
import LoginWithUser from "../components/LoginWithUser";
import DividerWithText from "../components/DividerWithText";
import SocialMediaButton from "../components/SocialMediaButton";

function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const BOTONES_SOCIALES = [
    { text: "Ingresar con Apple", name: "apple", id: 0 },
    {
      text: "Ingresar con Facebook",
      name: "facebook",
      id: 1,
    },
    { text: "Ingresar con Google", name: "google", id: 2 },
  ];
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
                <TouchableHighlight
                  onPress={() => navigation.navigate("Login")}
                >
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
              <Text style={styles.registerText}>Regístrate con tu mail</Text>
            </View>
            <LoginWithUser
              handleOnChangeTextPass={(text) => setPassword(text)}
              handleOnChangeTextEmail={(text) => setEmail(text)}
              handleOnPress={handleCreateAccount}
              textButton="Registrarme"
            />
            <DividerWithText text="O puedes" />
            {BOTONES_SOCIALES.map((b) => {
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
                  handleCreateAccount={handleCreateAccount}
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
    // height: 533,
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
    width: 200,
    height: "auto",
    borderRadius: 10,
    fontSize: 12,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  social: {
    width: 50,
    marginHorizontal: 6,
  },
});

export default RegisterScreen;
