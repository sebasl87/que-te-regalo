import React from "react";
import { StyleSheet, View, Text, Image, Dimensions, TouchableHighlight } from "react-native";
import { TextInput, Button, Menu, Divider } from "react-native-paper";
import UserImage from "./UserImage";

function MenuTop() {

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <>
            <View style={styles.divMaster}>
                <View style={styles.generalContainer}>
                    <View style={styles.menuContainer}>
                        <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={
                                <TouchableHighlight onPress={openMenu} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
                                    <Image
                                        source={require("../../assets/menu.png")}
                                        style={{ width: 34, height: 23, marginTop: 12 }}
                                    />
                                </TouchableHighlight>

                            }
                            statusBarHeight={50}
                            theme={{ roundness: 16 }}                            
                        >
                            <UserImage />
                            <Menu.Item onPress={() => { }} title="exequielsosa@gmail.com" titleStyle={{ color: "rgba(0, 0, 0, 0.7)" }}>
                            </Menu.Item>
                            <Divider />
                            <Menu.Item onPress={() => { }} title="Cerrar sesión" titleStyle={{ fontWeightIdx: 'bold', color: "#F49037" }} />
                        </Menu>

                    </View>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require("../../assets/IsoLogo.png")}
                            style={{ width: 180, height: 60 }}
                        />
                    </View>
                </View>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    divMaster: {
        width: "100%",
        height: 72,
        marginTop: 0,
        backgroundColor: "rgba(245, 176, 66, 0.2)",
    },
    generalContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    menuContainer: {
        paddingLeft: 16,
        paddingRight: 16,

    },
    logoContainer: {
        width: Dimensions.get('window').width - 100,
        justifyContent: "center",
        flexDirection: "row",
    },
});

export default MenuTop;