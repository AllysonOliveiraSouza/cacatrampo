import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DescricaoDetalhada() {

    const navigation = useNavigation();


    function vagaEnviada(msg, Tela) {
        navigation.navigate("Mensagem", { mensagem: msg, tela: Tela });
    }

    function voltarParaVagas() {
        navigation.navigate('Vagas');
    }


    return (
        <ScrollView contentContainerStyle={[styles.container, { backgroundColor: '#fff' }]}>
            <Image style={{ width: 300, height: 150 }} source={require('../assets/cacatrampo-logo.png')} />
            <Text style={styles.title}>Programador web Júnior</Text>
            <Text style={styles.description}>Requisitos e atividades</Text>
            <Text style={styles.sectionText}>Requisitos :
                HTML, CSS, JavaScript, Git, Scrum, Java, MySQL. Desejável experiência na área ou apresentação de projetos feitos.{"\n"}{"\n"}
                Atividades: Manutenção e criação de sistemas web.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => vagaEnviada('Currículo Enviado !', 'Inicio')}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={voltarParaVagas}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: '700',
        fontSize: 40,
        lineHeight: 50,
        marginBottom: 20,
        textAlign: 'left',
    },
    description: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 40,
        textAlign: 'left',
        color: '#090744',
        marginBottom: 20,
    },
    sectionText: {
        fontSize: 20,
        lineHeight: 30,
        color: '#000000',
        backgroundColor: '#C6C6D0',
        padding: 10,
        marginBottom: 20,
        borderWidth: 3,
        borderRadius: 30,
        fontWeight: 'bold',
        width: '90%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        backgroundColor: '#090744',
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginBottom: 15
    },
    buttonText: {
        color: 'white',
        fontSize: 40,
        fontWeight: '700',
    },
});