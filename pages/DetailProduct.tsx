import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { globalStyle } from '../utils/styles';
import { useState } from 'react';
import type { ProductType } from "../types/GlobalTypes";
import { AuthContext } from '../context/AuthContext';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function DetailProduct({ route }) {
    // const []
    const [product, setProduc] = useState<ProductType | null>(null);
    const { itemId } = route?.params;

    const { state } = React.useContext(AuthContext);
    const navigation = useNavigation();

    React.useEffect(() => {
        if (!isNaN(itemId)) {
            const detailProduct = state.product.find((prd) => prd.id == itemId);
            if (detailProduct) setProduc(detailProduct);
            navigation.setOptions({title: detailProduct?.name})
        }
    }, [itemId])

    const handleBack = () => {
        navigation.goBack();
    }
    const handleBuy = () => {
        //TODO: Need future action
        alert("Belum dapat membeli item ini");
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView style={[globalStyle.full]}>
                <View style={[globalStyle.container]}>
                    <Text style={[globalStyle.textCenter, globalStyle.header]}>Detail Product</Text>
                </View>

                <View style={[globalStyle.container, globalStyle.center]}>
                    <View style={[{ backgroundColor: "rgba(231, 222, 231, 1)", padding: 18, borderRadius: 5 },]}>
                        <View style={[globalStyle.center]}>
                            <Image source={{
                                uri: product?.image
                            }} style={{ height: 200, width: 200 }} />
                        </View>
                        <Divider style={{ borderColor: "#000", marginBlock: 5 }} />
                        <Text style={[globalStyle.body, { fontSize: 21, marginBlock: 2 }]}>{product?.name}</Text>
                        <Text style={[globalStyle.body, { fontSize: 21, marginBlock: 2, color: "#788221ff" }]}>Rp.{product?.price}</Text>
                        <Text style={[globalStyle.body, { fontSize: 18, marginBlock: 2 }]}>{product?.desc}</Text>
                        <View style={{ marginBlock: 10, flex: 1, flexDirection: "row", gap: 10 }}>
                            <TouchableOpacity onPress={handleBack} style={[{ backgroundColor: "rgba(223, 38, 28, 1)", borderRadius: 7, width: "50%", padding: 12 }]}>
                                <Text style={[globalStyle.textCenter, { color: "#fff", fontSize: 18, fontWeight: 700 }]}>
                                    Kembali
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleBuy} style={[{ backgroundColor: "rgba(195, 189, 27, 1)", borderRadius: 7, width: "50%", padding: 12, }]}>
                                <Text style={[globalStyle.textCenter, { color: "#fff", fontSize: 18, fontWeight: 700 }]}>
                                    Beli
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}