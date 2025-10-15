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
  {
    id: 3,
    name: "Jagung bakar",
    price: 15_000,
    desc: "ini jagung",
    image: "https://example.com"
  },
  {
    id: 4,
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
        <Text style={[globalStyle.header, globalStyle.textCenter]}>
          Product
        </Text>
        <ScrollView style={[{ backgroundColor: "orange" }]}>
          <FlatList numColumns={2} data={PRODUCTS} keyExtractor={(item) => String(item.id)} renderItem={({ item }) => {
            return (
              <View style={[globalStyle.container, {
                height: 100,
                margin: 5
              }]}>
                <TouchableOpacity style={[globalStyle.bgOrange, {
                  height: "100%"
                }]}>
                  <View style={{ flex: 1, flexDirection: "column", gap: 2 }}>
                    <View style={{ backgroundColor: "blue" }}>
                      <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeirOrdVOt6OI2Rkapn3k9DkDjiFt_MprojQ&s"} />
                    </View>
                    <View>
                      <Text>{item.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )
          }} />
        </ScrollView>
      </View>
    </>
  )
}