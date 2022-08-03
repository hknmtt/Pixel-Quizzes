import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'


export default function Recovery( ) {
    return (
        <View style={styles.container}>
            <Text style={styles.recuperar}> Recuperar senha </Text>
            <TextInput style={styles.input} placeholder="Digite seu endereço de e-mail" />
            <TouchableOpacity style={styles.enviarEmail} title="Enviar e-mail">
                <Text style={styles.enviarEmailText}> Enviar e-mail </Text>    
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    recuperar: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 56,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: 16,
        width: '82%',
        marginBottom: 20,
    },
    enviarEmail: {
        height: 56,
        backgroundColor: '#82327E',
        borderRadius: 12,
        width: '82%',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    enviarEmailText: {
        color: '#fff',
        fontSize: 16,
    },
})
