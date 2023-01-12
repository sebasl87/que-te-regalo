import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { Button, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export const ItemForm = (props) => (
  <Formik initialValues={{}} onSubmit={(values) => console.log(values)}>
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View width="100%" padding={16}>
        <TextInput
          style={styles.input}
          label="Título"
          variant="standard"
          onChangeText={handleChange("title")}
          onBlur={handleBlur("title")}
          value={values.title}
        />
        <TextInput
          style={styles.input}
          label="Descripción"
          variant="standard"
          onChangeText={handleChange("description")}
          onBlur={handleBlur("description")}
          value={values.description}
        />
        <TextInput
          style={styles.input}
          label="Link"
          variant="standard"
          onChangeText={handleChange("link")}
          onBlur={handleBlur("link")}
          value={values.link}
        />

        <Button
          title="Guardar"
          onPress={handleSubmit}
          trailing={(props) => <Icon name="send" {...props} />}
        />
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  input: {
    margin: "auto",
    marginBottom: 13,
  },
});

export default ItemForm;
