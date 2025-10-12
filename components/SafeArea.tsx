import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export type SafeAreaType = { children?: React.JSX.Element, style?: StyleProp<ViewStyle> }

export default function SafeArea({ children, style }: SafeAreaType) {
    return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={{flex: 1}}>
                    {children}
                </SafeAreaView>
            </SafeAreaProvider>
        </>
    )
}