import { Text, View } from "react-native";
import MenuTop from "../components/MenuTop.js";
import NoItems from "../components/NoItems.js";
import AddButton from "../components/AddButton.js";
import Table from "../components/Table.js";

function HomeScreen() {
    const isEmpty = false;

    const whishes = [
        { text: "Pelota de futbol mundial qatar", disabled: false, id: 0 },
        { text: "Playstation 5", disabled: false, id: 1 },
        { text: "Xbox series X", disabled: false, id: 2 },
        { text: "Remera oficial Argentina 3 estrellas", disabled: false, id: 3 },
        { text: "Remera Nike San Lorenzo Alternativa", disabled: false, id: 4 },
        { text: "God Of War Ragnarok", disabled: true, id: 5 },
        { text: "Abono GamePass", disabled: false, id: 6 },
        { text: "Zapatillas Running Nikle talle 45", disabled: false, id: 7 },
    ];

    return (
        <>
            <MenuTop />
            <AddButton />
            {isEmpty ?
                <NoItems />
                :
                
                <Table wishName="algo" />
                
            }

        </>

    );
}

export default HomeScreen;