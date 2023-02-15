import React, { useContext } from "react";

import { Text, View } from "react-native";
import { Button } from "react-native-paper";

import mainContext from "../context/mainContext";

function HomeScreen() {
  const { signOutUser } = useContext(mainContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>New User Screen</Text>
      <Button mode="contained" onPress={() => signOutUser()}>
        logout
      </Button>
    </View>
  );
}

export default HomeScreen;
