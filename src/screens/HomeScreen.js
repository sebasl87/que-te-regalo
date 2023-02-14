import MenuTop from "../components/MenuTop.js";
import NoItems from "../components/NoItems.js";
import AddButton from "../components/AddButton.js";
import RowCard from "../components/RowCard.js";
import { WHISHES } from "../constants";
import { View, Text } from "react-native";

function HomeScreen() {
    const isEmpty = false;
    return (
        <>
            <MenuTop />
            <AddButton />
            {isEmpty ? <NoItems /> :
                <>
                    {WHISHES.map(e => {
                        return (
                            <RowCard wishName={e.text} key={e.id} />
                        );
                    })}
                </>
            }
        </>
    );
}

export default HomeScreen;