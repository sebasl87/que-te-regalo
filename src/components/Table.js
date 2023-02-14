import React from "react";
import { StyleSheet, View, Image, Text, TouchableHighlight } from "react-native";
import { Menu } from "react-native-paper";

function Table({ disabled, wishName }) {

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <>
            <View style={styles.generalDiv}>
                <View style={{
                    width: "100%",
                    height: 54,
                    backgroundColor: disabled ? "transparent" : "rgba(255, 255, 255, 0.5)",
                    borderRadius: 6,
                    borderColor: "rgba(0, 0, 0, 0.5)",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderWidth: 1,
                    alignItems: "center",
                    paddingRight: 40,
                }}>
                    <View style={styles.generalText}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: "#000",
                            textDecorationLine: disabled && "line-through",
                            textDecorationStyle: disabled && "solid",
                            textDecorationColor: disabled && "#000"
                        }}>{wishName}</Text>
                    </View>
                    <View style={styles.containerMenu}>
                        <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={
                                <TouchableHighlight onPress={openMenu} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
                                    <Image
                                        source={require('../../assets/tableIcon.png')}
                                        style={{ width: 36, height: 36, tintColor: "rgba(0, 0, 0, 0.8)" }}
                                    />
                                </TouchableHighlight>
                            }
                            statusBarHeight={36}
                            theme={{ roundness: 16 }}
                            style={{ width: 110 }}
                        >
                            <Menu.Item onPress={() => { }} title="Editar" titleStyle={{ color: "rgba(0, 0, 0, 0.8)", fontSize: 16 }} />
                            <Menu.Item onPress={() => { }} title="Eliminar" titleStyle={{ color: "rgba(0, 0, 0, 0.8)", fontSize: 16 }} />
                            <Menu.Item onPress={() => { }} title={disabled ? "Desmarcar" : "Marcar"} titleStyle={{ color: "rgba(0, 0, 0, 0.8)", fontSize: 16 }} />

                        </Menu>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    generalDiv: {
        backgroundColor: "rgba(66, 254, 22, 0.2)",
        width: "100%",
        height: "100%",
        paddingTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    generalText: {
        width: "100%",
        paddingLeft: 16,
    },
    containerMenu: {},
});

export default Table;