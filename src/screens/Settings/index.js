import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

import axios from 'axios'

async function getUserData() {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/profile');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default function Settings( { navigation } ) {
  const [userData, setUserData] = useState(null)
  const [updateData, setUpdateData] = useState(true)

  useEffect(() => {
    getUserData().then((data) => {
      if (data) {
        setUserData(data)
      }
    })
    if(updateData && userData!==undefined){
      setUpdateData(false)
    }
  }, [updateData])

  return (
    userData ? (
        <View style={styles.container}>
            <Text style={styles.initialtext}>Informações da conta</Text>
            <View style={styles.button}>
                <FontAwesome name="circle" size={48} color="lightblue" />
                <FontAwesome name="user" size={32} color="white" style={{position: 'absolute', left: 29}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Nome</Text>
                    <Text style={styles.text}>{userData.name}</Text>
                </View>
                <Text style={styles.arrow}>&gt;</Text>
            </View>
            <View style={styles.button}>
                <FontAwesome name="circle" size={48} color="lightblue" />
                <FontAwesome name="user" size={32} color="white" style={{position: 'absolute', left: 29}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Foto de perfil</Text>
    
                </View>
                <Text style={styles.arrow}>&gt;</Text>
            </View>
            <View style={styles.button}>
                <FontAwesome name="circle" size={48} color="lightblue" />
                <FontAwesome name="envelope" size={24} color="white" style={{position: 'absolute', left: 29}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Email</Text>
                    <Text style={styles.text}>{userData.email}</Text>
                </View>
                <Text style={styles.arrow}>&gt;</Text>
            </View>
            <View style={styles.button}>
                <FontAwesome name="circle" size={48} color="lightblue" />
                <FontAwesome name="lock" size={32} color="white" style={{position: 'absolute', left: 31}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Senha</Text>
                    <Text style={styles.text}>{userData.name}</Text>
                </View>
                <Text style={styles.arrow}>&gt;</Text>
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
    },
    initialtext: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        alignSelf: 'flex-start',
        marginLeft: 16,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        padding: 20,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: 'lightgray',
        marginBottom: 16,
    },
    textContainer: {
        width: '70%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
    },
    arrow: {
        fontSize: 32,
        color: 'lightgray',
    },
})
