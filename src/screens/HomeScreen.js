import React from "react";
import { MenuTop, NoItems, RowCard } from "../components";
import { WHISHES } from "../constants";
import { View, ScrollView, StyleSheet } from "react-native";
import { AnimatedFAB } from "react-native-paper";

function HomeScreen({ visible, animateFrom }) {
    const isEmpty = false;

    const [isExtended, setIsExtended] = React.useState(true);

    const onScroll = ({ nativeEvent }) => {
        const currentScrollPosition =
            Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

        setIsExtended(currentScrollPosition <= 0);
    };

    const fabStyle = { [animateFrom]: 16 };

    return (
        <>
            <MenuTop />

            <ScrollView onScroll={onScroll}>

                <View style={{ backgroundColor: "rgba(66, 254, 22, 0.2)", height: "100%", paddingTop: 16, marginBottom: 86 }}>
                    {isEmpty ?
                        <NoItems />
                        :
                        <>
                            {WHISHES.map(e => {
                                return (
                                    <RowCard wishName={e.text} key={e.id} disabled={e.disabled} />
                                );
                            })}
                        </>
                    }
                </View>
            </ScrollView>
            <AnimatedFAB
                icon={'plus'}
                label={'Nuevo deseo '}
                extended={isExtended}
                onPress={() => console.log('Pressed')}
                visible={visible}
                animateFrom={'right'}
                iconMode={'static'}
                style={[styles.fabStyle]}
                color="white"
                theme={{ backgroundColor: 'red' }}
            />
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
        position: 'absolute',
        backgroundColor: "#F5B042",
    },
});