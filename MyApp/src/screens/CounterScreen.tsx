import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export const CounterScreen = () => {

    // Componentes de React Native: https://reactnative.dev/docs/components-and-apis
    // Los textos siempre tienen que estar contenidos en un Text component.
    
    const [counter, setCounter] = useState(10);

    return (
        <View
            style={styles.screen}>
            {/* style={[styles.screen, styles.otroEstilo]} */}
            <Text style={styles.display}>
                Contador: {counter}
            </Text>
            <TouchableOpacity
                onPress={()=>setCounter(counter + 1 )}
                style={styles.button}
            >
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
            </TouchableOpacity>
        </View>
    )
}

// StyleSheet
// https://reactnative.dev/docs/stylesheet

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: '#32de84',
        justifyContent: 'center',
    },
    display:{
        fontSize: 45,
        textAlign: 'center',
        fontWeight: 'bold',
        top: -200,
    },
    button:{
        backgroundColor: 'purple',
        height: 45,
        margin: 10,
    },
});