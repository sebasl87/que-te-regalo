import React from "react";
import { Button } from "react-native-paper";
import { Image, StyleSheet } from "react-native";

const SocialMediaButton = ({ text, handleCreateAccount, icono }) => {
  return (
    <Button
      mode="contained"
      onPress={() => handleCreateAccount}
      style={styles.button}
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
    alignItems: "left",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginBottom: 8,
  },
});

export default SocialMediaButton;
