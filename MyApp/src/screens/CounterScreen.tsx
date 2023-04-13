import React, { useState } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';

export const CounterScreen = () => {

    // Componentes de React Native: https://reactnative.dev/docs/components-and-apis
    // Los textos siempre tienen que estar contenidos en un Text component.
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
        <TouchableOpacity
            onPress={()=>setCounter(counter + 1 )}
            style={{
                backgroundColor: 'purple',
                height: 45,
                margin: 10,
            }}
        >
            <View>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 30,
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    Increment Counter
                </Text>
            </View>
        </TouchableOpacity>
        </View>
    )
}
