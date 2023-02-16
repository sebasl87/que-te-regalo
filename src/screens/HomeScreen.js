import React, { useContext, useState } from "react";
import { MenuTop, NoItems, RowCard, AddNewWish } from "../components";
import { WHISHES } from "../constants";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { AnimatedFAB, Portal, Dialog } from "react-native-paper";
import mainContext from "../context/mainContext";
import Hamburger from 'react-native-animated-hamburger';

function HomeScreen({ visible, animateFrom }) {
  const { signOutUser } = useContext(mainContext);

  const isEmpty = false;

  const [isExtended, setIsExtended] = useState(true);
  const [addWish, setAddWish] = useState(false);

  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const fabStyle = { [animateFrom]: 16 };

  return (
    <>
      <MenuTop handleClose={signOutUser} />
      <ScrollView onScroll={onScroll}>
        <View
          style={{
            backgroundColor: "rgba(66, 254, 22, 0.2)",
            height: "100%",
            paddingTop: 16,
            marginBottom: 86,
          }}
        >
          {isEmpty ? (
            <NoItems />
          ) : (
            <>
              {WHISHES.map((e) => {
                return (
                  <RowCard wishName={e.text} key={e.id} disabled={e.disabled} />
                );
              })}
<Hamburger
type="spinCross"
active={()=> setIsExtended(false)}
onPress={() => setIsExtended(true)}
underlayColor="transparent"
color="black">
 </Hamburger>
            </>
          )}
        </View>
      </ScrollView>
      <AnimatedFAB
        icon={"plus"}
        label={"Nuevo deseo "}
        extended={isExtended}
        onPress={() => setAddWish(true)}
        visible={visible}
        animateFrom={"right"}
        iconMode={"static"}
        style={[styles.fabStyle]}
        color="white"
        theme={{ backgroundColor: "red" }}
      />
      <Portal>
        <Dialog
          visible={addWish}
          onDismiss={() => setAddWish(false)}
          theme={{ roundness: 2 }}
          style={{backgroundColor: "#fff" }}
          dismissable={false}
        >
          <AddNewWish closeAddWishDialog={() => setAddWish(false)} />
        </Dialog>
      </Portal>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: "absolute",
    backgroundColor: "#F5B042",
  },
});
