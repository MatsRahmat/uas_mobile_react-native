import { StyleSheet, Text, TouchableOpacity, View, TextInput, GestureResponderEvent, ActivityIndicator } from "react-native";
import * as React from 'react';
import SafeArea from "../components/SafeArea";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import LoadingComponent from "../components/ui/LoadingComponent";
import { globalStyle } from "../utils/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "@react-navigation/elements";

const TIME_DELAY = 3000;

export default function LoginScreen() {

    const { setter, state } = useContext(AuthContext);
    const navigation = useNavigation();
    const inset = useSafeAreaInsets();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState(false);

    const validateInput = () => {
        let valid = true;
        if (!email || !pass) {
            valid = false;
        }
        return valid;
    }

    // Simulasi fetch data dari API
    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            if (validateInput()) {
                setter.login(email, pass);
                navigation.navigate('home' as never);
                setLoading(false);
            } else {
                setLoading(false);
            }
        }, TIME_DELAY)
    }

    if (loading) {
        return (
            <LoadingComponent />
        )
    }

    return (
        <SafeArea>
            <View style={[globalStyle.container, { paddingInline: "13%", justifyContent: "flex-start", paddingTop: 25 }]}>
                <View>
                    <Text style={[globalStyle.header, globalStyle.textCenter, {
                        fontSize: 34
                    }]}>Login</Text>
                </View>
                <View style={[globalStyle.border, { padding: 9, marginTop: 20 }]}>
                    <Text style={{ marginBlock: 4 }}>Email:</Text>
                    <TextInput value={email} placeholder="john@mail.com" onChangeText={setEmail} style={[globalStyle.input]} />
                    <Text style={{ marginBlock: 4 }}>Password:</Text>
                    <TextInput value={pass} placeholder="******" onChangeText={setPass} style={[globalStyle.input]} />
                    <TouchableOpacity onPress={handleSubmit} style={[globalStyle.button, globalStyle.bgSky, { marginBlock: 12, borderRadius: 5, }]}>
                        <Text style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>
                            Submit
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeArea>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#000",
        marginBlock: 4,
        borderRadius: 7,
    },
    containerInput: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 7,
        padding: 9,
        marginInline: "15%",
    },
    button: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 2,
        backgroundColor: "#03f",
        marginTop: 7
    },
    title: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: 700,
        marginBottom: 8
    }
});