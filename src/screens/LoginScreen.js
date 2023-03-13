import React, { useState, useContext } from "react";
import { Image, Text, View, ScrollView } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import {
  LoginWithUser,
  DividerWithText,
  SocialMediaButton,
} from "../components";

import { styles } from "./styles";
import mainContext from "../context/mainContext";

function LoginScreen({ navigation }) {
  const { handleALogin, handleGLogin, handleLogin, handleFBLogin } =
    useContext(mainContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              handleOnPress={() => handleLogin(email, password)}
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
              <SocialMediaButton
                text="Ingresar con Apple"
                handleCreateAccount={() => handleALogin()}
                icono={() => (
                  <Image
                    source={require("../../assets/appleI.png")}
                    style={{ width: 30, height: 30 }}
                  />
                )}
              />
              <SocialMediaButton
                text="Ingresar con Facebook"
                handleCreateAccount={() => handleFBLogin()}
                icono={() => (
                  <Image
                    source={require("../../assets/facebookI.png")}
                    style={{ width: 30, height: 30 }}
                  />
                )}
              />
              <SocialMediaButton
                text="Ingresar con Google"
                handleCreateAccount={() => handleGLogin()}
                icono={() => (
                  <Image
                    source={require("../../assets/googleI.png")}
                    style={{ width: 30, height: 30 }}
                  />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

export default LoginScreen;
