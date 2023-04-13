import React, { useState } from 'react'
import { Text, View, Button } from 'react-native';

export const CounterScreen = () => {

    // Componentes de React Native: https://reactnative.dev/docs/components-and-apis

    const [counter, setCounter] = useState(5);

    return (
        <View style={{
        flex: 1,
        backgroundColor: '#32de84',
        justifyContent: 'center',
        }}>
        <Text style={{
            fontSize: 45,
            textAlign: 'center',
            fontWeight: 'bold',
            top: -200,
        }}>
            Contador: {counter}
        </Text>
        <Button
            onPress={() => setCounter(counter + 1)}
            title="Learn More"
            color="#841584"
        />
        </View>
    )
}
