import { View, Text, TextInput} from 'react-native'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'


import axios from 'axios'
import QuizList from '../../components/QuizList'

async function getQuizzesData(search_param) {
    try {
      const response = await axios.get(search_param == '' ? 
                                        'https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes' :
                                        'https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes?search=' + search_param.toLowerCase());
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
async function getUserData() {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/profile');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export default function HomeScreen( { navigation } ) {
    const [userData, setUserData] = useState(null)
    const [quizSearchText, setQuizSearchText] = useState('')
    const [quizzesList, setQuizzesList] = useState([])
    const [updateData, setUpdateData] = useState(true)
  
    useEffect(() => {
        getQuizzesData(quizSearchText).then((data) => {
        if (data) {
          setQuizzesList(data)
        }
  
      })
        getUserData().then((data) => {
        if (data) {
            setUserData(data)
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
        userData && quizzesList ? (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.nameText}>{userData.name}</Text>
                <TouchableOpacity 
                style={styles.searchBar}
                onPress={() => navigation.navigate('Search', {searchText: ''})}
                >
                    <Text style={styles.searchBarText}>Pesquisar quiz</Text>
                    
                </TouchableOpacity>
                <View style={styles.tags}>
                    <TouchableOpacity style={styles.tagButton}><Text style={styles.buttonText} onPress={() => navigation.navigate('Search', {searchText: 'html'})}>#HTML</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.tagButton}><Text style={styles.buttonText} onPress={() => navigation.navigate('Search', {searchText: 'ux'})}>#UX</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.tagButton}><Text style={styles.buttonText} onPress={() => navigation.navigate('Search', {searchText: 'swift'})}>#Swift</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.tagButton}><Text style={styles.buttonText} onPress={() => navigation.navigate('Search', {searchText: 'ui'})}>#UI</Text></TouchableOpacity>
                </View>
            </View>
            
            <QuizList quizzes={quizzesList} navigation={navigation} history={false}/>
            
        </View>
        ) : (
            <Text> Carregando </Text>
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
    },
    nameText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333333',
        // fontFamily: 'Rubik',
    },
    searchBar: {
        marginTop: 12,
        height: 56,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: 16,
        paddingTop: 15,
    },
    tags: {
        flexDirection: 'row',
        marginTop: 12,
    },
    tagButton: {
        marginRight: 8,
        backgroundColor: '#65AAEA',
        borderRadius: 12,
        paddingHorizontal: 11,
        paddingVertical: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    searchBarText: {
        fontSize: 16,
        color: 'gray',

    }

})
