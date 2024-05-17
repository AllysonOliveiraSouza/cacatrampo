import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function CurriculosEnviados({ navigation }) {

    function voltarAoMenu() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Inicio" }]
        })

    }

    return (
        <ScrollView contentContainerStyle={[styles.container, { backgroundColor: '#fff' }]}>
            <Image style={{ width: 300, height: 150 }} source={require('../assets/cacatrampo-logo.png')} />
            <Text style={styles.title}>Currículos Enviados</Text>
            <TouchableOpacity onPress={() => console.log('Link 1 Pressed')}>
                <Text style={[styles.info, customStyles.info]}>
                    ■ Programador web Junior - Estácio (Enviado em 07/05/2024)
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Link 2 Pressed')}>
                <Text style={[styles.info, customStyles.info]}>
                    ■  Product Owner - Google (Enviado em 01/03/2024)
                </Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
            <TouchableOpacity style={styles.button} onPress={() => voltarAoMenu()}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const customStyles = StyleSheet.create({
    info: {
        fontSize: 36,
        fontWeight: 'bold',
        margin: 40,
        marginBottom: 5,
        color: '#090744',
        textDecorationLine: 'underline'
    },
});

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
        marginBottom: 6,
    },
    info: {
        fontSize: 40,
        margin: 40,
        marginBottom: 5,
        color: '#090744',
    },
    button: {
        width: 234,
        height: 102,
        backgroundColor: '#090744',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        margin: 25,
    },
    buttonText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    },
});