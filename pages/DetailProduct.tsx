import * as React from 'react';
import { Text } from 'react-native';

export default function DetailProduct({ route }) {

    const { itemId } = route.params;
    return (
        <>
            <Text>Ini halaman detail</Text>
        </>
    )
}