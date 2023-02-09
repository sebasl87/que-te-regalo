import React from "react";
import { StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

function LoginWithUser({
  handleOnChangeTextEmail,
  handleOnChangeTextPass,
  handleOnPress,
}) {
  return (
    <>
      <TextInput
        label="Usuario"
        mode="outlined"
        style={{ ...styles.inputText, marginTop: 0 }}
        onChangeText={handleOnChangeTextEmail}
      />
      <TextInput
        label="Contraseña"
        mode="outlined"
        style={styles.inputText}
        onChangeText={handleOnChangeTextPass}
      />

      <Button
        onPress={handleOnPress}
        style={{ marginVertical: 8, borderRadius: 4 }}
        mode="contained"
      >
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
