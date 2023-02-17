import React, { useContext, useState } from "react";
import { MenuTop, NoItems, RowCard, AddNewWish } from "../components";
import { MORE_WISHES } from "../constants";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { AnimatedFAB, Portal, Dialog } from "react-native-paper";
import mainContext from "../context/mainContext";

function HomeScreen({ visible }) {
  const { signOutUser } = useContext(mainContext);
  const [isExtended, setIsExtended] = useState(true);
  const [addWish, setAddWish] = useState(false);

  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const WHISHES = MORE_WISHES.data.getWishlistUsers.wishlist;

  const isEmpty = WHISHES.length === 0;

  return (
    <>
      <MenuTop handleClose={signOutUser} />
      <ScrollView onScroll={onScroll} >
        <View
          style={{
            paddingTop: 16,
            paddingBottom: 84,
            flex: 1,
          }}
        >
          {isEmpty ? (
            <NoItems />

          ) : (
            <>
              {WHISHES.map((e) => {
                return (
                  <RowCard wishName={e.title} key={e.id} disabled={false} />
                );
              })}
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
          style={{ backgroundColor: "#fff" }}
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
