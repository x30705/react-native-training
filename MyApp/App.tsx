import React from 'react'
import { Text, View } from 'react-native';

const App = () => {

  // En View:
  // Primer paréntesis para indicar expresión de JavaScript.
  // Segundo paréntesis para la definición del objeto.

  // En View > style:
  // flex para abarcar toda la pantalla.
  // backgroundColor en lowerCamelCase (no puedes usar guiones en los objetos de JavaScript).

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#7CB9E8',
      justifyContent: 'center',
    }}>
      <Text style={{
        fontSize: 45,
        textAlign: 'center',
        fontWeight: 'bold',
      }}>
        Hola Mundo !
      </Text>
    </View>
  )
}

export default App;