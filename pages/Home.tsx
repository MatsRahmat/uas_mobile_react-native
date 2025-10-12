import { Text, View } from "react-native";
import SafeArea from "../components/SafeArea";

export default function HomeScreen() {
    return (
        <>
            <SafeArea>
                <View style={{ padding: 10 }}>
                    <Text>
                        Ini Home Page
                    </Text>
                </View>
            </SafeArea>
        </>
    )
}