import { Text, View } from "react-native";
import MenuTop from "../components/MenuTop.js";
import UserImage from "../components/UserImage.js";

function HomeScreen() {
    return (
        <>
            <MenuTop />
            <Text>Homescreen</Text>
            <UserImage /> 
        </>

    );
}

export default HomeScreen;