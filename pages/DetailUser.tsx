import * as React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UserInterface } from '../App';
import { AuthContext } from '../context/AuthContext';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../utils/styles';
import { useNavigation } from '@react-navigation/native';

export default function DetailUser({ route }) {

    const [user, setUser] = React.useState<UserInterface | null>(null);

    const { state } = React.useContext(AuthContext);
    const { userId } = route.params;

    const navigation = useNavigation();

    React.useEffect(() => {
        if (!isNaN(+userId)) {
            const detailUser = state.users.find((usr) => usr.id == userId);
            if (detailUser) {
                setUser(detailUser);
                navigation.setOptions({ title: detailUser.username })
            }
        }
    }, [userId]);


    const handleBack = () => {
        navigation.setOptions({ title: "" });
        navigation.goBack();
    }
    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={[globalStyle.full]}>
                    <View style={[globalStyle.container]}>
                        <Text style={[globalStyle.textCenter, globalStyle.header]}>Detail User</Text>
                    </View>
                    <View style={[globalStyle.container, globalStyle.center]}>
                        <View style={[{ backgroundColor: "rgba(231, 222, 231, 1)", padding: 18, borderRadius: 5 },]}>
                            <Text style={[globalStyle.body, { fontSize: 21, marginBlock: 2 }]}>Name {"\t: " + user?.username}</Text>
                            <Text style={[globalStyle.body, { fontSize: 21, marginBlock: 2 }]}>Email: {"\t: " + user?.email}</Text>
                            <Text style={[globalStyle.body, { fontSize: 21, marginBlock: 2 }]}>Age: {"\t: " + user?.age}</Text>
                            <View style={{ marginBlock: 10 }}>
                                <TouchableOpacity onPress={handleBack} style={[globalStyle.button, { backgroundColor: "rgba(195, 189, 27, 1)", borderRadius: 7 }]}>
                                    <Text style={[globalStyle.textCenter, {fontSize: 21, fontWeight: 700, color: "#f4f6faff"}]}>
                                        Kembali
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    )
}


const styles = StyleSheet.create({});