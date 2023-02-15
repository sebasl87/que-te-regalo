import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableHighlight, ScrollView } from "react-native";
import { Menu, Dialog, Portal, Button } from "react-native-paper";

function RowCard({ wishName, disabled }) {

    const [visible, setVisible] = React.useState(false);
    const [viewDialog, setDialog] = useState(false);
    const handleClick = () => {
        setDialog(true);
        setVisible(false);
    }

    return (
        <>
            <View style={styles.generalDiv}>
                <ScrollView>
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
                    }}
                    >
                        <View style={styles.generalText}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '400',
                                color: "#000",
                                textDecorationLine: disabled ? "line-through" : "none",
                                textDecorationStyle: disabled && "solid",
                                textDecorationColor: disabled && "#000",
                            }}>{wishName}</Text>
                        </View>
                        <View style={styles.containerMenu}>
                            <Menu
                                visible={visible}
                                onDismiss={() => setVisible(false)}
                                anchor={
                                    <TouchableHighlight onPress={() => setVisible(true)} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
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
                                <Menu.Item onPress={handleClick} title="Eliminar" titleStyle={{ color: "rgba(0, 0, 0, 0.8)", fontSize: 16 }} />
                                <Menu.Item onPress={() => { }} title={disabled ? "Desmarcar" : "Marcar"} titleStyle={{ color: "rgba(0, 0, 0, 0.8)", fontSize: 16 }} />
                            </Menu>
                        </View>
                    </View>
                </ScrollView>
                <Portal>
                    <Dialog visible={viewDialog} onDismiss={() => setDialog(false)}>
                        <Dialog.Title>Alert</Dialog.Title>
                        <Dialog.Content>
                            <Text variant="bodyMedium">This is simple dialog</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => setDialog(false)}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    generalDiv: {
        width: "100%",
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

export default RowCard;