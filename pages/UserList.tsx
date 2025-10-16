import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from 'react';
import { globalStyle } from "../utils/styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { sleep } from "../utils/function";


export default function UserListScreen() {
  const navigation = useNavigation();

  const { state } = React.useContext(AuthContext);

  const handleClick = (id: number) => {
    sleep(() => {
      navigation.navigate('detail_user', { userId: id })
    })
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={[globalStyle.container,]}>
            <Text style={[globalStyle.textCenter, globalStyle.header]}>
              Users
            </Text>
            <View style={{ padding: 12, margin: 4, }}>
              <ScrollView style={{ overflow: "scroll", flex: 1 }}>
                <FlatList data={state.users} keyExtractor={(item) => String(item.id)} renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      style={[globalStyle.button, globalStyle.bgSky, styles.button]}
                      onPress={() => handleClick(item.id)}
                    >
                      <Text style={styles.text}>{item.username}</Text>
                    </TouchableOpacity>
                  )
                }} />
              </ScrollView>
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