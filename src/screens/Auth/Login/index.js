import { View, Text, TextInput, Touchable } from 'react-native'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function Login( { navigation } ) {
    return (
        <View style={styles.container}>
            <Text style={styles.entrar}> Entrar </Text>
            <TextInput style={styles.input} placeholder="E-mail" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>
            <TouchableOpacity title="Recuperar" onPress={() => navigation.navigate('Recovery')}>
                <Text style={styles.recuperar}> Esqueceu sua senha? </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginInput} title="Logar" onPress={() => navigation.navigate('HomeTabs')} >
                <Text style={styles.logar}> Entrar </Text>    
            </TouchableOpacity>
            <TouchableOpacity title="Cadastrar" onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.cadastrar}> Criar uma conta </Text>
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
    entrar: {
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
    recuperar: {
        fontSize: 14,
        color: '#3C3A36',
        textAlign: 'center',
        marginBottom: 20,
    },
    loginInput: {
        height: 56,
        backgroundColor: '#82327E',
        borderRadius: 12,
        width: '82%',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logar: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    cadastrar: {
        fontSize: 14,
        color: '#3C3A36',
        textAlign: 'center',
    },
})
