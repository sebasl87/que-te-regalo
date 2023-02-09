import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";

const SocialMediaButton = ({ text, handleCreateAccount, icono, large }) => {
  return (
    <Button
      mode="contained"
      onPress={() => handleCreateAccount}
      style={large ? styles.buttonLarge : styles.button}
      icon={icono}
      buttonColor="rgba(255, 255, 255, 0.8)"
      textColor="#000"
      labelStyle={{ fontSize: 12 }}
    >
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: "auto",
    borderRadius: 10,
    padding: 0,
    justifyContent: 'flex-start',
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginBottom: 8,
    flexDirection: 'row',
  },
  buttonLarge: {
    width: 220,
    height: "auto",
    borderRadius: 10,
    padding: 0,
    justifyContent: 'flex-start',
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginBottom: 8,
    flexDirection: 'row',
  },
});

export default SocialMediaButton;
