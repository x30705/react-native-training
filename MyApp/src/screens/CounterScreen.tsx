import React from 'react'
import { Text, View } from 'react-native';

export const CounterScreen = () => {

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
        Contador: 0
      </Text>
    </View>
  )
}