import React, { useContext } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import mainContext from "../context/mainContext";
import CustomDrawerHead from './CustomDrawerHead';

import {
    LoginScreen,
    HomeScreen,
} from "../screens";

function Root() {
    const Drawer = createDrawerNavigator();

    const Stack = createNativeStackNavigator();

    const { signOutUser } = useContext(mainContext);

    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerHead {...props} />}
            screenOptions={{ headerShown: false, drawerActiveBackgroundColor: "transparent", drawerActiveTintColor: "#F49037", drawerStyle: {
                backgroundColor: '#F0FFEB',
                marginTop: 0,
                paddingTop: 0,
                
              } }}>
            <Drawer.Screen name="Inicio" component={HomeScreen} options={{
                drawerIcon: (color, size, focused) => {
                    return <Ionicons name="home-outline" size={18} color="#F49037" />
                }
            }} />
            {/* <Drawer.Screen name="Profile" component={LoginScreen} /> */}
            <Stack.Screen name="Cerrar sesión" component={signOutUser} options={{
                drawerIcon: (color, size, focused) => {
                    return <Ionicons name="exit-outline" size={18} color="#000" />
                }
            }} />
        </Drawer.Navigator>
    );
}

export default Root;