import React, { useState, useContext } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import {
  LoginWithUser,
  DividerWithText,
  SocialMediaButton,
} from "../components";

import { styles } from "./styles";

import mainContext from "../context/mainContext";

function RegisterScreen({ navigation }) {
  const { handleALogin, handleGLogin, handleSignup, handleFBLogin } =
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
            <View style={styles.logoAndBack}>
              <View style={styles.back}>
                <TouchableHighlight
                  onPress={() => navigation.navigate("Login")}
                  hitSlop={{ top: 20, bottom: 20, left: 60, right: 60 }}
                  activeOpacity={1}
                  underlayColor="transparent"
                >
                  <View>
                    <Image
                      source={require("../../assets/back.png")}
                      style={styles.backButton}
                    />
                  </View>
                </TouchableHighlight>
              </View>
              <View style={styles.logoWithBack}>
                <Image
                  source={require("../../assets/nidit-logo.png")}
                  style={styles.logoPicture}
                />
              </View>
            </View>
            <View style={{ top: -10 }}>
              <Text style={styles.registerTextHight}>
                Regístrate con tu mail
              </Text>
            </View>
            <LoginWithUser
              handleOnChangeTextPass={(text) => setPassword(text)}
              handleOnChangeTextEmail={(text) => setEmail(text)}
              handleOnPress={() => handleSignup(email, password)}
              textButton="Registrarme"
            />
            <DividerWithText text="O puedes" />
            <View style={{ marginTop: 8, marginBottom: 24 }}>
              <SocialMediaButton
                text="Registrarme con Apple"
                handleCreateAccount={() => handleALogin()}
                icono={() => (
                  <Image
                    source={require("../../assets/appleI.png")}
                    style={{ width: 30, height: 30 }}
                  />
                )}
              />
              <SocialMediaButton
                text="Registrarme con Facebook"
                handleCreateAccount={() => handleFBLogin()}
                icono={() => (
                  <Image
                    source={require("../../assets/facebookI.png")}
                    style={{ width: 30, height: 30 }}
                  />
                )}
              />
              <SocialMediaButton
                text="Registrarme con Google"
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

export default RegisterScreen;
