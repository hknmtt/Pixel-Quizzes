import { View, Text, SafeAreaView} from 'react-native'
import { StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'

import axios from 'axios'
import QuizList from '../../../components/QuizList'

async function getQuizzesData() {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes?is_answered=true');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export default function History( { navigation }) {
    const [quizzesList, setQuizzesList] = useState([])
    const [updateData, setUpdateData] = useState(true)
  
    useEffect(() => {
        getQuizzesData().then((data) => {
        if (data) {
          setQuizzesList(data)
        }
  
        })
        if(updateData){
            setUpdateData(false)
        }
    }, [updateData])

    return (
        quizzesList ? (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>         
                <QuizList quizzes={quizzesList} navigation={navigation} history={true}/>
            </View>
            
        </SafeAreaView>
        ) : (
            <Text style={{justifyContent: 'center', alignItems: 'center'}}> Carregando </Text>
        )
    )
}


const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingRight: 16,
    },
    header: {
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20

    },
})
