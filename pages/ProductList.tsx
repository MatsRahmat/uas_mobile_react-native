import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as React from 'react';
import { globalStyle } from "../utils/styles";
import { ProductType } from "../App";

const PRODUCTS: ProductType[] = [
  {
    id: 1,
    name: "Jagung",
    price: 15_000,
    desc: "ini jagung",
    // image: "https://example.com"
  },
  {
    id: 2,
    name: "Jagung bakar",
    price: 15_000,
    desc: "ini jagung",
    image: "https://example.com"
  },
]

export default function ProductListScreen() {
  return (
    <>
      <View style={[globalStyle.container]}>
        <Text>
          Product
        </Text>
        <ScrollView style={[{ backgroundColor: "orange" }]}>
          <FlatList numColumns={2} data={PRODUCTS} keyExtractor={(item) => String(item.id)} renderItem={({ item }) => {
            return (
              <TouchableOpacity style={[globalStyle.bgOrange, {
                width: "50%"
              }]}>
                <View style={{ backgroundColor: "blue" }}>
                  <Image src={item.image} />
                </View>
                <View>
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )
          }} />
        </ScrollView>
      </View>
    </>
  )
}