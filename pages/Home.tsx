import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SafeArea from "../components/SafeArea";
import { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../App";

export default function HomeScreen() {

    const { isLogin, logout } = useContext(AuthContext);
    const navigation = useNavigation();


    const handleNavigate = (path: string) => {
        navigation.navigate(path);
    }


    useEffect(() => {
        if (!isLogin) {
            navigation.navigate('login');
        }
    }, [isLogin]);

    return (
        <>
            <SafeArea>
                <>
                    <View style={{ padding: 10 }}>
                        <Text style={styles.textTitle}>
                            Home Page
                        </Text>
                    </View>
                    <View style={styles.continer}>
                        <TouchableOpacity onPress={() => handleNavigate('product')} style={{ ...styles.button, ...styles.bgBlue }}>
                            <Text style={styles.textBtn}>
                                Product
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleNavigate('profile')} style={{ ...styles.button, ...styles.bgBlue }}>
                            <Text style={styles.textBtn}>
                                Profile
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={logout} style={{ ...styles.button, ...styles.bgOrange }}>
                            <Text style={styles.textBtn}>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            </SafeArea>
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