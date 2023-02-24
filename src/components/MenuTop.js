import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
} from "react-native";
import Hamburger from 'react-native-animated-hamburger';
import { useNavigation } from "@react-navigation/native";
import { useDrawerStatus } from '@react-navigation/drawer';

function MenuTop() {

  const nav = useNavigation();
  const drawerStatus = useDrawerStatus();
  const open = drawerStatus === 'open';

  return (
    <>
      <View style={styles.divMaster}>
        <View style={styles.generalContainer}>
          <View style={styles.menuContainer}>
            <View style={{ marginTop: 10 }}>
              <Hamburger
                type="spinCross"
                active={open}
                onPress={() => nav.openDrawer()}
                underlayColor="transparent"
                color="black">
              </Hamburger>
            </View>
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
    zIndex: 1,
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
    width: Dimensions.get("window").width - 100,
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default MenuTop;
