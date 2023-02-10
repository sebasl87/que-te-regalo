import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

function ResetPassword({
  handleOnChangeTextEmail,
  handleOnPress,
  textButton,
}) {
  return (
    <>    
      <TextInput
        label="Email"
        mode="outlined"
        style={{ ...styles.inputText, marginTop: 0 }}
        onChangeText={handleOnChangeTextEmail}
      />
      <View style={{marginTop: 16, marginBottom: 24}}>
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
    borderRadius: 8,
    marginTop: 12,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});

export default ResetPassword;
