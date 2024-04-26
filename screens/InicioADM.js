import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function InicioADM({ navigation }) {

    function cadastroVagas() {
        navigation.reset({
            index: 0,
            routes: [{ name: "CadastroVagas" }]
        })

    }

    function historicoVagas() {
        navigation.reset({
            index: 0,
            routes: [{ name: "HistoricoVagas" }]
        })

    }

    function Sair() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Inicial- ADM</Text>
            <Text style={styles.subtitle}>Olá Administrador, o que deseja fazer?</Text>
            <TouchableOpacity style={styles.link} onPress={() => cadastroVagas()}>
                <Text style={styles.linkText}>Clique aqui para gerenciar vagas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => historicoVagas()}>
                <Text style={styles.linkText}>Clique aqui para ver o historico de vagas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link}>
                <Text style={styles.linkText}>Clique aqui para ver o seu perfil de sua empresa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => Sair()}>
                <Text style={styles.linkText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#99f0f7',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        color: 'black',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        color: 'black',
        marginBottom: 20,
    },
    link: {
        backgroundColor: 'lightblue',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    linkText: {
        fontSize: 18,
        color: 'blue',
    },
});