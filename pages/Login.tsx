import { StyleSheet, Text, TouchableOpacity, View, TextInput, GestureResponderEvent, ActivityIndicator } from "react-native";
import SafeArea from "../components/SafeArea";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../App";

const TIME_DELAY = 3000;

export default function LoginScreen() {

    const { login, isLogin } = useContext(AuthContext);
    const navigation = useNavigation();

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
    const handleSubmit = (event: GestureResponderEvent) => {
        setLoading(true);
        if (validateInput()) {
            setTimeout(() => {
                login('tokenBase64', { email: "user@mail.com", username: "Jajang" });
                navigation.navigate('home', { token: "ini_token_user" });
                setLoading(false);
            }, TIME_DELAY)
        } else {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center" }}>
                <ActivityIndicator size={45} animating />
            </View>
        )
    }

    useEffect(() => {
        if (isLogin) {
            navigation.navigate('home');
        }
    }, [isLogin])

    return (
        <SafeArea>
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <Text style={styles.title}>
                        Login
                    </Text>
                    <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="john@mail.com" />
                    <TextInput style={styles.input} value={pass} onChangeText={setPass} placeholder="**********" />
                    <TouchableOpacity onPress={handleSubmit} style={styles.button} disabled={loading}>
                        <Text style={{ color: "#fff", fontWeight: 600, padding: 8, textAlign: "center" }}>
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