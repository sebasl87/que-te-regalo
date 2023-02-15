import React, { useContext, useState } from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { ResetPassword } from "../components";
import mainContext from "../context/mainContext";
import { styles } from "./styles";

function ForgotPasswordScreen({ navigation }) {
  const { handleResetPassword } = useContext(mainContext);

  const [email, setEmail] = useState("");

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
                Restablecer contraseña
              </Text>
              <Text style={styles.instructionsText}>
                Te enviaremos un email con las instrucciones para restablecer la
                contraseña.
              </Text>
            </View>
            <ResetPassword
              textButton="Enviar"
              handleOnPress={() => handleResetPassword(email)}
              handleOnChangeTextEmail={setEmail}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

export default ForgotPasswordScreen;
