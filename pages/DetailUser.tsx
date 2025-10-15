import * as React from 'react';
import { Text } from 'react-native';

export default function DetailUser({ route }) {

    const { userId } = route.params;
    return (
        <>
            <Text>Ini halaman detail</Tex>
        </>
    )
}