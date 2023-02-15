import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { Menu, Dialog, Portal, Button } from "react-native-paper";

function RowCard({ wishName, disabled }) {
  const [visible, setVisible] = React.useState(false);
  const [viewDialog, setDialog] = useState(false);
  const handleClick = () => {
    setDialog(true);
    setVisible(false);
  };

  return (
    <>
      <View style={styles.generalDiv}>
        <ScrollView>
          <View
            style={{
              width: "100%",
              height: 54,
              backgroundColor: disabled
                ? "transparent"
                : "rgba(255, 255, 255, 0.5)",
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
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: "#000",
                  textDecorationLine: disabled ? "line-through" : "none",
                  textDecorationColor: disabled && "#000",
                }}
              >
                {wishName}
              </Text>
            </View>
            <View style={styles.containerMenu}>
              <Menu
                visible={visible}
                onDismiss={() => setVisible(false)}
                anchor={
                  <TouchableHighlight
                    onPress={() => setVisible(true)}
                    hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                  >
                    <Image
                      source={require("../../assets/tableIcon.png")}
                      style={{
                        width: 36,
                        height: 36,
                        tintColor: "rgba(0, 0, 0, 0.8)",
                      }}
                    />
                  </TouchableHighlight>
                }
                statusBarHeight={36}
                theme={{ roundness: 16 }}
                style={{ width: 110 }}
              >
                <Menu.Item
                  onPress={() => {}}
                  title="Editar"
                  titleStyle={{ color: "rgba(0, 0, 0, 0.8)", fontSize: 16 }}
                />
                <Menu.Item
                  onPress={handleClick}
                  title="Eliminar"
                  titleStyle={{ color: "rgba(0, 0, 0, 0.8)", fontSize: 16 }}
                />
                <Menu.Item
                  onPress={() => {}}
                  title={disabled ? "Desmarcar" : "Marcar"}
                  titleStyle={{ color: "rgba(0, 0, 0, 0.8)", fontSize: 16 }}
                />
              </Menu>
            </View>
          </View>
        </ScrollView>
        <Portal>
          <Dialog
            visible={viewDialog}
            onDismiss={() => setDialog(false)}
            theme={{ roundness: 2 }}
          >
            <Text style={styles.dialogText}>
              ¿Seguro que lo quieres eliminar?
            </Text>
            <View style={styles.dialogButtonContainer}>
              <Button
                buttonColor="rgba(245, 176, 66, 1)"
                onPress={() => setDialog(false)}
                textColor="#fff"
                style={[styles.dialogButton, styles.dialogFirstButton]}
              >
                Cancelar
              </Button>
              <Button
                buttonColor="rgba(245, 176, 66, 1)"
                onPress={() => console.log("acepto la borrada")}
                textColor="#fff"
                style={styles.dialogButton}
              >
                Aceptar
              </Button>
            </View>
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
  dialogText: {
    width: "100%",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
  },
  dialogButton: {
    maxWidth: 105,
    borderRadius: 8,
  },
  dialogButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  dialogFirstButton: {
    marginRight: 8,
  },
});

export default RowCard;
