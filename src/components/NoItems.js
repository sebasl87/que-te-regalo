import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function NoItems() {

    return (
        <>
            <View style={styles.divMaster}>
                <View style={styles.generalContainer}>
                    <Image
                        source={require("../../assets/emptySpace.png")}
                        style={{ width: 90, height: 86, marginTop: 12 }}
                    />
                    <View style={styles.containerText}>
                        <Text style={styles.texto}>Todavía no tienes ningún deseo en tu lista.</Text>
                        <Text style={styles.texto}>¿Qué esperas?</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    divMaster: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(66, 254, 22, 0.2)",
    },
    generalContainer: {
        width: "100%",
        alignItems: "center",
    },
    containerText: {
        width: "100%",
        alignItems: "center",
        marginTop: 16,
    },
    texto: {
        width: "100%",
        fontWeight: "500",
        fontSize: 16,
        alignItems: "center",
        textAlign: "center",
    },

});

export default NoItems;