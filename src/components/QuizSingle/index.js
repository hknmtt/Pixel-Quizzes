import { View, Text, Image, TouchableOpacity} from 'react-native'
import { StyleSheet } from 'react-native'

export default function QuizSingle(props){
    function translateDifficulty(difficulty){
        switch(difficulty){
            case 'easy':
                return 'FÁCIL'
            case 'medium':
                return 'MÉDIO'
            case 'hard':
                return 'DIFÍCIL'
        }
    }

    return (
        <TouchableOpacity style={styles.container}
        onPress={() => props.navigation.navigate('Quiz', {id: props.data.id})}>
            <Image source={{uri: props.data.banner_image}}
                style={{width: '100%', height: 200}} />
            
            {props.history ? (
                <View style={styles.history}>
                    <Text style={props.data.correct_answers_count/props.data.questions_count >= 0.5 ? (styles.historyTextSuccess) : (styles.historyTextFail)}>Você acertou {props.data.correct_answers_count} de {props.data.questions_count}</Text>
                    <Text style={styles.historyDate}>Em {props.data.answered_date}</Text>
                </View>
            ) : (
            <View style={styles.difficultyButton}>
                <Text style={styles.difficultyButtonText}> 
                    {translateDifficulty(props.data.difficulty)}
                </Text>
            </View>
            )}
            <View style={styles.texts}>
                <Text style={styles.titleText}>{props.data.title}</Text>
                <Text style={styles.descriptionText}>{props.data.short_description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'gray',
    },
    texts: {
        width: '90%',
        marginTop: 8,
        marginBottom: 8,
    },
    difficultyButton: {
        backgroundColor: '#65AAEA',
        borderRadius: 12,
        paddingHorizontal: 11,
        paddingVertical: 5,
        marginRight: 8,
        position: 'absolute',
        top: 160,
        right: 8,
    },
    difficultyButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3c3a36',
    },
    descriptionText: {
        fontSize: 14,
        color: '#3c3a36',
    },
    history: {
        width: '100%',
        marginTop: 8,
        marginBottom: 12,
    },
    historyTextSuccess: {
        position: 'absolute',
        left: 16,
        color: '#3c3a36',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'green',
    },
    historyTextFail: {
        position: 'absolute',
        left: 16,
        color: '#3c3a36',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'red',
    },
    historyDate: {
        position: 'absolute',
        right: 16,
        color: '#3c3a36',
        fontSize: 12,
    }
})
