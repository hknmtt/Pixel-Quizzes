import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'

import axios from 'axios'

async function getQuizData(id) {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/questions/' + id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default function QuizQuestion ( { navigation, route } ) {
  const [quizQuestionData, setQuizQuestionData] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentQuestionAnswered, setCurrentQuestionAnswered] = useState(null)
  const [numberCorrectAnswers, setNumberCorrectAnswers] = useState(0)
  const [updateData, setUpdateData] = useState(true)

  useEffect(() => {
    getQuizData(route.params.id).then((data) => {
      if (data) {
        setQuizQuestionData(data)
      }
    })
    if(updateData && quizQuestionData!==undefined){
      setUpdateData(false)
    }
  }, [updateData])

  function selectAnswer(answer, correct_answer_index){
    if(currentQuestionAnswered === null){
        setCurrentQuestionAnswered(answer+1)
        if(answer+1 === correct_answer_index){
            setNumberCorrectAnswers(numberCorrectAnswers+1)
            
        }
    }
  }

  function nextButtonPress(){
    if (currentQuestion < quizQuestionData.data.length-1){
        console.log(currentQuestion)
        console.log(quizQuestionData.data.length)
        setCurrentQuestion(currentQuestion+1)
        setCurrentQuestionAnswered(null)
    } else {
        navigation.navigate('QuizResult', {numberCorrectAnswers: numberCorrectAnswers, totalQuestions: quizQuestionData.data.length})
    }
  }

  return (
        quizQuestionData ? ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.currentQuestionNumber}>{currentQuestion+1}/{quizQuestionData.data.length}</Text>
                <Text style={styles.questionText}>{quizQuestionData.data[currentQuestion].question_text}</Text>
            </View>
            <Image source={{uri: quizQuestionData.data[currentQuestion].banner_image}} style={styles.image}/>
            <View style={styles.answers}>
                <TouchableOpacity 
                style={
                    currentQuestionAnswered === 1 ?
                        quizQuestionData.data[currentQuestion].correct_answer_index === 1 ?
                            styles.answeredButtonCorrect : styles.answeredButtonIncorrect
                            :
                            styles.answerButton
                        }
                onPress={() => { selectAnswer(0, quizQuestionData.data[currentQuestion].correct_answer_index) }}
                >
                    <Text style={styles.answerButtonText}>A.    {quizQuestionData.data[currentQuestion].answers[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={
                    currentQuestionAnswered === 2 ?
                        quizQuestionData.data[currentQuestion].correct_answer_index === 2 ?
                            styles.answeredButtonCorrect : styles.answeredButtonIncorrect
                            :
                            styles.answerButton 
                        }
                onPress={() => { selectAnswer(1, quizQuestionData.data[currentQuestion].correct_answer_index) }}
                >
                    <Text style={styles.answerButtonText}>B.    {quizQuestionData.data[currentQuestion].answers[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={
                    currentQuestionAnswered === 3 ?
                        quizQuestionData.data[currentQuestion].correct_answer_index === 3 ?
                            styles.answeredButtonCorrect : styles.answeredButtonIncorrect
                            :
                            styles.answerButton
                        }
                onPress={() => { selectAnswer(2, quizQuestionData.data[currentQuestion].correct_answer_index) }}
                >
                    <Text style={styles.answerButtonText}>C.    {quizQuestionData.data[currentQuestion].answers[2]}</Text>
                </TouchableOpacity>
            </View>

            { currentQuestionAnswered !== null ? (
            <TouchableOpacity style={styles.nextButton} onPress={() => { nextButtonPress() }}>
                <Text style={styles.nextButtonText}>Continuar</Text>
            </TouchableOpacity>
            ) : (
                <View style={{height: 76}}/>
            )
        }
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
        justifyContent: 'space-around',
        paddingHorizontal: 33,
    },
    image: {
        width: 343,
        height: 191,
        borderRadius: 8,
        borderColor: "#BEBAB3"
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    currentQuestionNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#78746D',
    },
    questionText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#3C3A36',
    },
    answers: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
    answerButton: {
        alignItems: 'flex-start',
        borderWidth: 1,
        paddingHorizontal: 24,
        paddingVertical: 16,
        height: 58,
        borderRadius: 16,
        width: '100%',
        borderColor: '#BEBAB3',
        marginBottom: 16,
    },
    answeredButtonCorrect: {
        alignItems: 'flex-start',
        borderWidth: 2,
        paddingHorizontal: 24,
        paddingVertical: 16,
        height: 58,
        borderRadius: 16,
        width: '100%',
        marginBottom: 16,
        backgroundColor: '#EDDFBC',
        borderColor: '#5BA092',
    },
    answeredButtonIncorrect: {
        alignItems: 'flex-start',
        borderWidth: 2,
        paddingHorizontal: 24,
        paddingVertical: 16,
        height: 58,
        borderRadius: 16,
        width: '100%',
        marginBottom: 16,
        backgroundColor: '#EDDFBC',
        borderColor: '#EF4949',
    },
    answerButtonText: {
        fontSize: 16,
        color: '#3C3A36',
    },
    nextButton: {
        height: 56,
        backgroundColor: '#82327E',
        borderRadius: 12,
        width: 309,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})
