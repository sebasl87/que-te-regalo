import { Text, View } from "react-native";
import MenuTop from "../components/MenuTop.js";
import NoItems from "../components/NoItems.js";
import AddButton from "../components/AddButton.js";

function HomeScreen() {
    const isEmpty = true;
    const Tabla = () => {
        return (
            <Text>Soy una Tabla</Text>
        );
    }

    return (
        <>
            <MenuTop />
            <AddButton />
            {isEmpty ?
                <NoItems />
                :
                <><Tabla /></>
            }

        </>

    );
}

export default HomeScreen;