import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import UserImage from "./UserImage";

const CustomDrawerHead = props => {
    return (
        <DrawerContentScrollView contentContainerStyle={{ paddingTop: 0 }} {...props}>
            <View style={styles.head}>
                <UserImage />
                <View style={styles.textContainer}>
                    <Text style={styles.hello}>¡Hola!</Text>
                    <Text>exequielsosa@gmail.com</Text>
                </View>
            </View>
            <View>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    )
}

export default CustomDrawerHead;

const styles = StyleSheet.create({
    head: {
        backgroundColor: "#D1EFA7",
        paddingTop: 8,
        paddingBottom: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    textContainer: {
        paddingTop: 0,
        paddingLeft: 16,
    },
hello:{
    fontWeight: "800",
}
});