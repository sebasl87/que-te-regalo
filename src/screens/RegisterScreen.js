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
import { BOTONES_SOCIALES_REGISTER } from "../constants";

import mainContext from "../context/mainContext";

function RegisterScreen({ navigation }) {
  const { handleSignup } = useContext(mainContext);

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
                  hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                >
                  <Image
                    source={require("../../assets/back.png")}
                    style={styles.backButton}
                  />
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
              {BOTONES_SOCIALES_REGISTER.map((b) => {
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
                    handleCreateAccount={() => console.log("Crear cuenta")}
                    icono={() => (
                      <Image
                        source={iconToDisplay}
                        style={{ width: 30, height: 30 }}
                      />
                    )}
                    large
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

export default RegisterScreen;
