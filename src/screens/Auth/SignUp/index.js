import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'


export default function SignUp( { navigation } ) {
    return (
        <View style={styles.container}>
            <Text style={styles.cadastrar}> Cadastre-se </Text>
            <Text style={styles.cadastrarDescription}>Crie uma conta gratuitamente</Text>
            <TextInput style={styles.input} placeholder="Nome" />
            <TextInput style={styles.input} placeholder="E-mail" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>
            <TouchableOpacity style={styles.cadastrarButton} title="cadastrar" onPress={() => navigation.navigate('HomeTabs')} >
                <Text style={styles.cadastrarButtonText}> Cadastrar-se </Text>    
            </TouchableOpacity>
            <TouchableOpacity title="entrar" onPress={() => navigation.navigate('Login')}>
                <Text style={styles.entrar}> Entrar</Text>
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
    cadastrar: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cadastrarDescription: {
        fontSize: 14,
        color: '#3C3A36',
        textAlign: 'center',
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
    cadastrarButton: {
        height: 56,
        backgroundColor: '#82327E',
        borderRadius: 12,
        width: '82%',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cadastrarButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    entrar: {
        fontSize: 14,
        color: '#3C3A36',
        textAlign: 'center',
        marginBottom: 20,
    },
})
