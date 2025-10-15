import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as React from 'react';
import { globalStyle } from "../utils/styles";


const USERS = [
  {
    id: 1,
    username: "jajang",
    email: "jaja@mail.com",
    age: 12
  },
  {
    id: 2,
    username: "jajang",
    email: "jaja@mail.com",
    age: 24
  },
]

export default function UserListScreen() {
  return (
    <>
      <View style={[globalStyle.container,]}>
        <Text style={[globalStyle.textCenter, globalStyle.header]}>
          Users
        </Text>
        <ScrollView style={[{ padding: 12 }]}>
          <FlatList data={USERS} keyExtractor={(item) => String(item.id)} renderItem={({ item }) => {
            return (
              <TouchableOpacity style={[globalStyle.button, globalStyle.bgSky, { marginBlock: 4, borderRadius: 5 }]}>
                <Text style={[{ textAlign: "center", fontSize: 20, fontWeight: 600, color: "#fff", textTransform: "capitalize" }]}>{item.username}</Text>
              </TouchableOpacity>
            )
          }} />
        </ScrollView>
      </View>
    </>
  )
}