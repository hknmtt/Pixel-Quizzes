import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'


export default function QuizQuestion ( { navigation, route } ) {
    const all_correct = route.params.numberCorrectAnswers == route.params.totalQuestions
    return (
    <View style={styles.container}>

        <View style={styles.main}>
            <Text style={styles.correctAnswers}>{route.params.numberCorrectAnswers}/{route.params.totalQuestions}</Text>
            <Text style={styles.result}>
                {all_correct ? "Você é um mestre" : "Quase lá..."}
            </Text>
            <Text style={styles.resultDescription}>
                {all_correct ? "Você concluiu o quiz com sucesso e acertou todas as perguntas. Você é realmente muito bom!" : "Continue estudando e tentando, uma hora vocÊ vai gabaritar! Eu acredito em você!"}
            </Text>
        </View>
        <TouchableOpacity style={styles.finishButton} onPress={() => navigation.navigate('Quiz')}>
            <Text style={styles.finishButtonText}>Finalizar</Text>
        </TouchableOpacity>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 33,
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    correctAnswers: {
        fontSize: 56,
        fontWeight: 'bold',
        color: '#3C3A36',
    },
    result: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#3C3A36',
    },
    resultDescription: {
        fontSize: 16,
        textAlign: 'center',
        color: '#78746D',
        marginTop: 16,
    },
    finishButton: {
        height: 56,
        backgroundColor: '#82327E',
        borderRadius: 12,
        width: 309,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    finishButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})
