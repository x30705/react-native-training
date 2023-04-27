import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

// Usar ? para marcar una propiedad como opcional.

interface Props {
    caption: string;
    position?: 'right' | 'left';
    onPress: () => void;
}

// BottomRight solo se toma si no se envió otro valor.  

export const FloatingActionButton = ({caption, onPress, position='right'}: Props) => {

    // (props: Props) Sin des-estructurar
    // Shadow Generator: https://ethercreative.github.io/react-native-shadow-generator/

  return (
        <TouchableOpacity
        onPress={onPress}
        
        // Opción 1 para asignar un estilo condicional: Un objeto de estilos para cada posición:
        // style={
        //     (position === 'BottomLeft')
        //     ? styles.floatingActionButtonPositionBottomLeft
        //     : styles.floatingActionButtonPositionBottomRight
        // }

        // Opción 2 para asignar un estilo condicional: Un array de estilos complementarios para cada posición.
        style={
            [styles.floatingActionButton,
            (position==='left')
            ? styles.positionLeft
            : styles.positionRight
            ]
        }
    >
        <View>
            <Text
                style={styles.floatingActionButtonText}
            >
                {caption}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    positionRight:{
        right: 25
    },
    positionLeft:{
        left: 25
    },
    floatingActionButton:{
        backgroundColor: 'purple',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    floatingActionButtonText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
});