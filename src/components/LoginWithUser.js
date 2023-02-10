import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

function LoginWithUser({
  handleOnChangeTextEmail,
  handleOnChangeTextPass,
  handleOnPress,
  textButton,
}) {
  return (
    <>
      <TextInput
        label="Usuario"
        mode="outlined"
        style={{ ...styles.inputText, marginTop: 0 }}
        onChangeText={handleOnChangeTextEmail}
        theme={{ roundness: 8 }}
      />
      <TextInput
        label="Contraseña"
        mode="outlined"
        style={styles.inputText}
        onChangeText={handleOnChangeTextPass}
        theme={{ roundness: 8 }}
      />
      <View style={{ marginTop: 8, marginBottom: 8 }}>
        <Button
          onPress={handleOnPress}
          style={{ marginVertical: 8, borderRadius: 4 }}
          mode="contained"
        >
          {textButton}
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputText: {
    width: 301,
    height: 56,
    marginTop: 12,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});

export default LoginWithUser;
