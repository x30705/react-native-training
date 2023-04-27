import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { FloatingActionButton } from '../components/FloatingActionButton';

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

            <FloatingActionButton
                caption='+'
                onPress={ () => setCounter( counter +1 )}
            />

            <FloatingActionButton
                caption='-'
                onPress={ () => setCounter( counter -1 )}
                position='left'
            />

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
    floatingActionButtonPositionBottomRight:{
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    floatingActionButtonPositionBottomLeft:{
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    floatingActionButton:{
        backgroundColor: 'purple',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    floatingActionButtonText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
});