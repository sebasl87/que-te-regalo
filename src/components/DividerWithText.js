import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const DividerWithText = ({ text }) => {
  const theme = useTheme();

  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 8 }}
    >
      <View style={{ ...styles.line, backgroundColor: theme.colors.primary }} />
      <View>
        <Text style={{ textAlign: "center", fontSize: 12 }}>{text}</Text>
      </View>
      <View style={{ ...styles.line, backgroundColor: theme.colors.primary }} />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
    marginHorizontal: 16,
  },
});
export default DividerWithText;
