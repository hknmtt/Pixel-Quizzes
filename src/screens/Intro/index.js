import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState } from 'react'

const currentIntroInfo = [{image: require("../../images/intro1.png"), introSelected:require("../../images/currentintro1.png"), title: "Aprenda a qualquer hora e em qualquer lugar", description: "Tenha em suas mãos perguntas sobre os mais variados assuntos e aprenda errando!"},
                          {image: require("../../images/intro2.png"), introSelected:require("../../images/currentintro2.png"), title: "Diversos assuntos para você", description: "São vários quizes diferentes para você. Escolha um e se aventure!"},
                          {image: require("../../images/intro3.png"), introSelected:require("../../images/currentintro3.png"), title: "Melhore suas habilidades", description: "Memorize os conteúdos do aplicativo e melhore suas habilidades!"}]


export default function Intro ( { navigation } ) {
    const [currentIntro, setCurrentIntro] = useState(0)
    
    function nextIntro() {
        if(currentIntro < currentIntroInfo.length - 1){
            setCurrentIntro(currentIntro + 1)
        } else {
            setCurrentIntro(0)
            navigation.navigate('HomeTabs')
        }
    }
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.skipContainer} onPress={() => navigation.navigate('HomeTabs')}>
            <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
        <Image source={currentIntroInfo[currentIntro].image} style={styles.image} />
        <View style={styles.main}>
            <Text style={styles.title}>{currentIntroInfo[currentIntro].title}</Text>
            <Text style={styles.description}>{currentIntroInfo[currentIntro].description}</Text>
        </View>
        <Image source={currentIntroInfo[currentIntro].introSelected} style={styles.introSelected} />
        <TouchableOpacity style={styles.advanceButton} onPress={() => nextIntro()}>
            <Text style={styles.advanceButtonText}>{currentIntro===2 ? "Vamos lá!" : "Avançar"}</Text>
        </TouchableOpacity>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 33,
    },
    skipContainer: {
        alignItems: 'flex-end',
        width: '100%',
    },
    skip: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3C3A36',
        marginTop: 60,
        marginBottom: 80,
    },
    image: {
        width: 293,
        height: 206,
        marginBottom: 20,
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#3C3A36',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#78746D',
    },
    introSelected: {
        width: 72,
        height: 27,
        marginBottom: 80,
    },
    advanceButton: {
        height: 56,
        backgroundColor: '#82327E',
        borderRadius: 12,
        width: 309,
        marginBottom: 40,
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    advanceButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    }

})
