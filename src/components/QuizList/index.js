import { FlatList } from 'react-native-gesture-handler'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import QuizSingle from '../QuizSingle'

export default function QuizList(props){

    return (
        <FlatList
            style={styles.quizList}
            data={props.quizzes}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => {
                return <QuizSingle data={item} navigation={props.navigation} history={props.history}/>
            }}
        />
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
    separator: {
        height: 16,
    },
})


