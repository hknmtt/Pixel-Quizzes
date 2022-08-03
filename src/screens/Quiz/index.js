import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'

import axios from 'axios'

async function getQuizData(id) {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes/' + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export default function Quiz ( { navigation, route } ) {
  const [quizData, setQuizData] = useState(null)
  const [updateData, setUpdateData] = useState(true)

  function updateTitle(title) {
    navigation.setOptions({
      title: title
    })
  }
  
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

  useEffect(() => {
    getQuizData(route.params.id).then((data) => {
      if (data) {
        setQuizData(data)
        updateTitle(data.title)
      }
    })
    if(updateData && quizData!==undefined){
      setUpdateData(false)
    }
  }, [updateData])

  return (
      quizData ? ( 
      <View style={styles.container}>
        <View style={styles.incontainer}>
              <Image source={{uri: quizData.banner_image}}
                  style={{width: 350, height: 192}} />
              <View style={styles.difficultyButton}>
                  <Text style={styles.difficultyButtonText}> 
                      {translateDifficulty(quizData.difficulty)}
                  </Text>
              </View>
              <Text style={styles.aboutText}>Sobre o quiz</Text>
              <Text style={styles.description}>{quizData.description}</Text>
              <Text style={styles.quantityQuestionText}>Quantidade de perguntas</Text>
              <Text style={styles.questionsQuantity}>{quizData.questions_count}</Text>
              <TouchableOpacity 
              style={styles.startButton}
              onPress={() => { navigation.navigate('QuizQuestion', { id: quizData.id }) }}
              > 
                  <Text style={styles.startQuizText}>Fazer tentativa</Text>
              </TouchableOpacity>
        </View>
      </View>
        ) : (
        <Text> Carregando...</Text>
        )
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    incontainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
    },
    difficultyButton: {
        backgroundColor: '#65AAEA',
        borderRadius: 12,
        paddingHorizontal: 11,
        paddingVertical: 5,
        marginLeft: 290,
    },
    difficultyButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    aboutText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'left',
        color: '#3C3A36',
    },
    description: {
        fontSize: 16,
        textAlign: 'left',
        width: 300,
        marginBottom: 20,
    },
    quantityQuestionText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#3C3A36',
    },
    questionsQuantity: {
        fontSize: 16,
        marginBottom: 20,
    },
    startButton: {
        height: 56,
        backgroundColor: '#82327E',
        borderRadius: 12,
        width: 309,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,
    },
    startQuizText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },


})
