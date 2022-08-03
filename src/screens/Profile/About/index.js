import { View, Text, Image } from 'react-native'
import { StyleSheet } from 'react-native'


export default function About() {
    return (
        <View style={styles.container}>
            <Image source={{uri: "https://i.imgur.com/t2KiINo.png"}}
                style={{width: 200, height: 200}} />
            <Text style={styles.title}> PixelQuizzes </Text>
            <Text style={styles.text}> O PixelQuizzes é um aplicativo criado para facilitar o aprendizado de conteúdos que nem sempre são os melhores de se aprender. Através da nossa plataforma, prometemos facilitar a sua aprendizagem em conceitos dos mais variados tipos. Isso se dá pelo fato de usarmos uma metodologia inoadora para aprendizagem! </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#3C3A36',
        textAlign: 'center',
    },
    text: {
        fontSize: 14,
        marginBottom: 16,
        color: "#78746D",
        textAlign: 'center',
    },
})
