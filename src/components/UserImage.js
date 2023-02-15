import React from "react";
import { StyleSheet, View, Image } from "react-native";


function UserImage() {
    return (
        <>
            <View style={styles.circle}>
                <Image
                    source={require("../../assets/emptySpace.png")}
                    style={{ width: '50%', height: '50%'}}
                />
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    circle: {
        width: 66,
        height: 66,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#F5B042",
        borderWidth: 1,        
        marginLeft: 16,
        marginTop: 8,
    },
});

export default UserImage;
