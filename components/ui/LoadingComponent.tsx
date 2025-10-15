import { ActivityIndicator, View } from "react-native";
import * as React from 'react';
import { globalStyle } from "../../utils/styles";


interface LoadingProps {
  size?: number
}
export default function LoadingComponent({ size = 45 }: LoadingProps) {
  return (
    <View style={[globalStyle.container, globalStyle.center]}>
      <ActivityIndicator size={size} />
    </View>
  )
}