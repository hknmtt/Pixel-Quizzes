import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { Image, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'

import axios from 'axios'
import TransparentButton from '../../components/TransparentButton'

async function getUserData() {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/profile');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export default function Profile( { navigation } ) {
    const [userData, setUserData] = useState(null)
    const [updateData, setUpdateData] = useState(true)

    useEffect(() => {
        getUserData().then((data) => {
        if (data) {
            setUserData(data)
            console.log('user data perfil setado')
        }
        })
        if(updateData && userData!==null){
        setUpdateData(false)
        }
    }, [updateData])

    return (
        userData ? (
        <View style={styles.container}>

            <Image source={{uri: userData.profile_image}}
                style={styles.image} />
            <TouchableOpacity onPress={() => navigation.navigate('History') } style={styles.button}>
                <TransparentButton text={"Seu histórico"}/>
            </TouchableOpacity>
                
            <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.button}>
                <TransparentButton text={"Sobre o app"}/>
            </TouchableOpacity>
        </View>
        ) : (
            <Text> Carregando... </Text>
        )
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 16,
        width: "90%",
    },
    image: {
        width: 128,
        height: 128,
        borderRadius: 64,
        marginBottom: 16,
        borderWidth: 5,
        borderColor: 'lightblue',
    },
})
