import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from 'react';
import { globalStyle } from "../utils/styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


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
  const navigation = useNavigation();


  const handleClick = (id: number) => {
    alert("Ini id nya :" + id)
    // console.log("Pressed")
    navigation.navigate('detail_user', { userId: id })
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={[globalStyle.container,]}>
            <Text style={[globalStyle.textCenter, globalStyle.header]}>
              Users
            </Text>
            <View style={{padding: 12, margin: 4}}>
              <FlatList data={USERS} keyExtractor={(item) => String(item.id)} renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={[globalStyle.button, globalStyle.bgSky, styles.button]}
                    onPress={() => handleClick(item.id)}
                  >
                    <Text style={styles.text}>{item.username}</Text>
                  </TouchableOpacity>
                )
              }} />
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}

const styles = StyleSheet.create({
  button: { marginBlock: 4, borderRadius: 5 },
  text: { textAlign: "center", fontSize: 20, fontWeight: 600, color: "#fff", textTransform: "capitalize" }
})