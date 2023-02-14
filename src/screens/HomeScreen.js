import { MenuTop, NoItems, AddButton, RowCard } from "../components";
import { WHISHES } from "../constants";
import { View, ScrollView } from "react-native";

function HomeScreen() {
    const isEmpty = false;
    return (
        <>
            <MenuTop />
            <ScrollView>
                <AddButton />
                <View style={{ backgroundColor: "rgba(66, 254, 22, 0.2)", height: "100%", marginBottom: 64 }}>
                    {isEmpty ? <NoItems /> :
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
        </>
    );
}

export default HomeScreen;