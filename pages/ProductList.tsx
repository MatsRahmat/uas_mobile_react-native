import * as React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyle } from "../utils/styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ProductType } from '../types/GlobalTypes';
import { AuthContext } from '../context/AuthContext';
import { colors as elementColors } from 'react-native-elements';
import { COLORS } from '../constants/colors';
import { sleep } from '../utils/function';

type RootStackParamList = {
  home: undefined,
  detail_product: { itemId: number },
}

const PRODUCTS: ProductType[] = [
  {
    id: 1,
    name: "Jagung",
    price: 15_000,
    desc: "ini jagung",
    image: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"
  },
  {
    id: 2,
    name: "Jagung bakars dh va daoud ioasbdouadoasdoua",
    price: 15_000,
    desc: "ini jagung ahsdoa opda dadbashd basu dhbasuo hdbashdabshdasdhaoisn asosfoai mf oadm oasdo a doasdoajndajsndan",
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    id: 3,
    name: "Jagung bakar",
    price: 15_000,
    desc: "ini jagung",
    image: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"
  },
  {
    id: 4,
    name: "Jagung bakar",
    price: 15_000,
    desc: "ini jagung",
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    id: 5,
    name: "Jagung bakar",
    price: 15_000,
    desc: "ini jagung",
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    id: 6,
    name: "Jagung bakar",
    price: 15_000,
    desc: "ini jagung",
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    id: 7,
    name: "Jagung bakar",
    price: 15_000,
    desc: "ini jagung",
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    id: 8,
    name: "Jagung bakar",
    price: 15_000,
    desc: "ini jagung",
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    id: 9,
    name: "Jagung bakar",
    price: 15_000,
    desc: "ini jagung",
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    id: 10,
    name: "Jagung bakar",
    price: 15_000,
    desc: "ini jagung",
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    id: 11,
    name: "Jagung bakar",
    price: 15_000,
    desc: "ini jagung",
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
  {
    id: 12,
    name: "Jagung bakar",
    price: 15_000,
    desc: "ini jagung",
    image: "https://reactnative.dev/img/tiny_logo.png"
  },
]


export default function ProductListScreen() {

  const { state } = React.useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const parentNavigation = navigation.getParent();


  React.useEffect(() => {
    console.log(state.product)
  }, [state.product])
  const handleClick = (id: number) => {
    sleep(() => {
      parentNavigation?.navigate('detail_product' as never, { itemId: id });
    })
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={[globalStyle.container]}>
            <Text style={[globalStyle.header, globalStyle.textCenter]}>
              Product
            </Text>
            <ScrollView style={[{ padding: 8, overflow: "scroll", flex: 1 }]}>
              <FlatList numColumns={2} data={state.product} keyExtractor={(item) => String(item.id)} renderItem={({ item }) => {
                return (
                  <TouchableOpacity style={[globalStyle.bgSky, styles.button]} onPress={() => handleClick(item.id)}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                      <View style={styles.iconContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain' />
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.title, {
                        }]} numberOfLines={1} ellipsizeMode='middle' >{item.name}</Text>
                        <Text style={[{ color: COLORS.price, fontWeight: 600 }]}>Rp.{item.price}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              }} />
            </ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}


const styles = StyleSheet.create({
  image: { width: 40, height: 40 },
  card: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#bbabcfff',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: '#d1d5db', // Tailwind gray-300
    fontSize: 14,
    marginTop: 4,
  },
  button: { flex: 1, padding: 8, borderRadius: 6, margin: 3 }
})