import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'

export default function TransparentButton( props ) {

    return (
        <View style={styles.button}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderWidth: 1,
        padding: 24,
        height: 80,
        borderRadius: 16,
        borderColor: '#BEBAB3',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
    },
})
