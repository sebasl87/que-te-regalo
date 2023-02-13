import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";


function AddButton() {

    return (
        <>
            <View style={styles.divMaster}>
                <View style={styles.image}>
                    <TouchableHighlight onPress={() => navigation.navigate("Login")} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
                        <Image
                            source={require("../../assets/addButton.png")}
                            style={{ width: 56, height: 56, marginTop: 16 }}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    divMaster: {
        width: "100%",
        alignItems: "flex-end",                
        backgroundColor: "rgba(66, 254, 22, 0.2)",
    },
    image: {        
        marginRight: 16,
    },
});

export default AddButton;