import React, { useState } from "react";
import {
  Image,
  Text,  
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
import { styles } from "./styles";

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
    { text: "Registrarme con Apple", name: "apple", id: 0 },
    {
      text: "Registrarme con Facebook",
      name: "facebook",
      id: 1,
    },
    { text: "Registrarme con Google", name: "google", id: 2 },
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
                <TouchableHighlight onPress={() => navigation.navigate("nidit!")} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
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
              handleOnPress={handleCreateAccount}
              textButton="Registrarme"
            />
            <DividerWithText text="O puedes" />
            <View style={{ marginTop: 8, marginBottom: 24 }}>
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
