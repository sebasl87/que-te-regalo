import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,  
} from "react-native";
import { Menu, Divider } from "react-native-paper";
import UserImage from "./UserImage";
import Hamburger from 'react-native-animated-hamburger';

function MenuTop({ handleClose }) {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <>
      <View style={styles.divMaster}>
        <View style={styles.generalContainer}>
          <View style={styles.menuContainer}>
            <Menu
              visible={showMenu}
              onDismiss={() => setShowMenu(false)}
              anchor={
                <View style={{ marginTop: 10 }}>
                  <Hamburger
                    type="spinCross"
                    active={showMenu}
                    onPress={() => setShowMenu(true)}
                    underlayColor="transparent"
                    color="black">
                  </Hamburger>
                </View>
              }
              statusBarHeight={50}
              theme={{ roundness: 16 }}
            >
              <UserImage />
              <Menu.Item
                onPress={() => { }}
                title="exequielsosa@gmail.com"
                titleStyle={{ color: "rgba(0, 0, 0, 0.7)" }}
              ></Menu.Item>
              <Divider />
              <Menu.Item
                onPress={() => handleClose()}
                title="Cerrar sesión"
                titleStyle={{ fontWeight: "bold", color: "#F49037" }}
              />
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
