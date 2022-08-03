import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image} from 'react-native'
import { StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'; 

import axios from 'axios'
import QuizList from '../../components/QuizList'

async function getQuizzesData(search_param) {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes?search=' + search_param.toLowerCase());
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

function StartSearching() {
    return (
        <View style={styles.startSearchingContainer}>
            <Text style={styles.startSearchingTitle}>Comece a pesquisar...</Text>
            <Text style={styles.startSearchingSubtitle}>Digite um termo de busca para pesquisar todos os quizzes disponíveis no aplicativo!</Text>
        </View>
    )
}
function NotFound() {
    return (
        <View style={styles.notFoundContainer}>
            <Image source={{uri: "https://i.imgur.com/bsMYhZW.png"}} style={styles.notFoundImage} />
            <Text style={styles.notFoundTitle}>Quiz não encontrado</Text>
            <Text style={styles.notFoundSubtitle}>Não encontramos nenhum quiz. Tente procurar usando palavras chaves diferentes...</Text>
        </View>
    )
}

export default function Search( { navigation, route } ) {
    const [quizSearchText, setQuizSearchText] = useState(route.params.searchText)
    const [quizzesList, setQuizzesList] = useState([])
    const [updateData, setUpdateData] = useState(true)
  
    useEffect(() => {
        getQuizzesData(quizSearchText).then((data) => {
        if (data) {
          setQuizzesList(data)
        }
  
        })
        if(updateData){
            setUpdateData(false)
        }
    }, [updateData])

    function searchItems(text) {
        setUpdateData(true)
        setQuizSearchText(text)
    }

    return (
        quizzesList ? (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="leftcircleo" size={50} color="lightgray" style={{left: 7}}/>
                </TouchableOpacity>
                <TextInput  style={styles.searchBar}
                placeholder="Digite sua pesquisa aqui..."
                onChangeText={text => searchItems(text)}
                value={quizSearchText}
                />
            </View>
                {quizSearchText == '' ? (<StartSearching />) :
                quizzesList.length > 0 ? (<QuizList quizzes={quizzesList} navigation={navigation} history={false}/>) :
                (<NotFound />)
                }
            
        </SafeAreaView>
        ) : (
            <Text style={{justifyContent: 'center', alignItems: 'center'}}> Carregando </Text>
        )
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
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
    searchBar: {
        height: 56,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: 16,
        width: '82%'
    },
    startSearchingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    startSearchingTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#3C3A36',
        textAlign: 'center',
    },
    startSearchingSubtitle: {
        fontSize: 14,
        marginBottom: 16,
        color: "#78746D",
    },
    notFoundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    notFoundImage: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
    notFoundTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#3C3A36',
        textAlign: 'center',
    },
    notFoundSubtitle: {
        fontSize: 14,
        marginBottom: 16,
        color: "#78746D",
    },
})
