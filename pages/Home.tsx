import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from 'react';
import { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserList from "./UserList";
import ProductList from "./ProductList";
import MaterialIcons from "@react-native-vector-icons/material-icons";

export default function HomeScreen() {

    const navigation = useNavigation();
    const { state, setter } = useContext(AuthContext);


    const handleNavigate = (path: string) => {
        navigation.navigate(path as never);
    }


    useEffect(() => {
        console.log(state.isLogin)
        if (!state.isLogin) {
            handleNavigate('login');
        }
    }, [state.isLogin]);

    useEffect(() => {
        //TODO: On mounted set users and product
        // setter.setUser();
    }, [])

    const Tabs = createBottomTabNavigator();

    return (
        <>
            <Tabs.Navigator screenOptions={{ headerShown: false }}>
                <Tabs.Screen name="users" component={UserList} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return <MaterialIcons name="format-list-bulleted" color={color} size={size} />
                    }
                }} />
                <Tabs.Screen name="products" component={ProductList} options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <MaterialIcons name="propane-tank" color={color} size={size} />
                    }
                }} />
            </Tabs.Navigator>
        </>
    )
}


const styles = StyleSheet.create({
    textTitle: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 700,
    },
    button: {
        borderColor: "#000",
        borderRadius: 7,
        padding: 9,
        borderWidth: 1,
        marginVertical: 5
    },
    continer: {
        paddingHorizontal: 10,
    },
    textBtn: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 600
    },
    bgBlue: {
        backgroundColor: "#12f"
    },
    bgOrange: {
        backgroundColor: "#9B4133"
    }
});