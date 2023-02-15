import React from "react";
import {
    StyleSheet,
    View,    
    Text,    
} from "react-native";
import { Button, TextInput, } from "react-native-paper";

function AddNewWish({ closeAddWishDialog }) {    

    return (
        <>
            <View>
                <Text style={styles.dialogText}>
                    Introduce los datos del producto que deseas
                </Text>
                <View style={styles.inputsContainer}>
                    <TextInput
                        label="Producto"
                        mode="outlined"
                        style={{ ...styles.inputText, marginTop: 0 }}
                        onChangeText={() => console.log('agregar tarea')}
                        theme={{ roundness: 8 }}
                        defaultValue="Nombre de lo que deseas"
                    />
                    <TextInput
                        multiline
                        mode="outlined"
                        numberOfLines={4}
                        theme={{ roundness: 8 }}
                        label="Descripción"
                        onChangeText={() => console.log('descripcion baby')}
                        style={{ ...styles.inputText, marginTop: 16 }}
                        defaultValue="Descripción del producto"
                    />
                    <TextInput
                        label="Link"
                        mode="outlined"
                        style={{ ...styles.inputText, marginTop: 16 }}
                        onChangeText={() => console.log('agregar link')}
                        theme={{ roundness: 8 }}
                        defaultValue="Link a tu producto"
                    />
                </View>
                <View style={styles.dialogButtonContainer}>
                    <Button
                        buttonColor="rgba(245, 176, 66, 1)"
                        onPress={closeAddWishDialog}
                        textColor="#fff"
                        style={[styles.dialogButton, styles.dialogFirstButton]}
                    >
                        Cancelar
                    </Button>
                    <Button
                        buttonColor="rgba(245, 176, 66, 1)"
                        onPress={() => console.log("acepto la guardada")}
                        textColor="#fff"
                        style={styles.dialogButton}
                    >
                        Guardar
                    </Button>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    dialogText: {
        width: "100%",
        fontSize: 18,
        textAlign: "left",
        fontWeight: "400",
        lineHeight: 21,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 32,
    },
    dialogButton: {
        maxWidth: 105,
        borderRadius: 8,
    },
    dialogButtonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-end",
        marginTop: 24,
        marginBottom: 24,
        paddingRight: 16,
    },
    dialogFirstButton: {
        marginRight: 8,
    },
    inputsContainer: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        width: "100%",
    },
});

export default AddNewWish;
