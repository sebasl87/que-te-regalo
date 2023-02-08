import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";

function LoginWithUser({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

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
    <>
      <TextInput
        label="Usuario"
        mode="outlined"
        style={{ ...styles.inputText, marginTop: 0 }}
      />
      <TextInput label="Contraseña" mode="outlined" style={styles.inputText} />

      <Button style={{ marginVertical: 8, borderRadius: 4 }} mode="contained">
        Ingresar
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  inputText: {
    width: 301,
    height: 56,
    borderRadius: 8,
    marginTop: 12,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});

export default LoginWithUser;
