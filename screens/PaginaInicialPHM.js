import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function PaginaInicialPHM({ navigation }) {

    function verMensagens() {
        navigation.reset({
            index: 0,
            routes: [{ name: "ChatJC" }]
        });

    }

    function verVagas() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Vagas" }]
        });
    }

    function sair() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        });
    }

    function CurriculosEnviados() {
        navigation.reset({
            index: 0,
            routes: [{ name: "CurriculosEnviados" }]
        });
    }

    function alterarCadastro() {
        navigation.reset({
            index: 0,
            routes: [{ name: "AlterarCadastro" }]
        });
    }





    return (

        <View style={styles.container}>
            <Image style={{ width: 300, height: 150 }} source={require('../assets/cacatrampo-logo.png')} />
            <Text style={styles.title}>Olá Candidato(a),</Text>
            <Text style={styles.subtitle}>Selecione uma das opções abaixo</Text>
            <TouchableOpacity style={styles.dialogBox} onPress={verVagas}
            // Navegar para "Tela de Vagas"
            // Animar: Empurrar para a direita

            >
                <Text style={styles.dialogText}>Ver vagas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.dialogBox}
                onPress={alterarCadastro}
            >
                <Text style={styles.dialogText}>Alterar cadastro</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.dialogBox}
                onPress={() => CurriculosEnviados()
                    // Navegar para "Tela de Currículos Enviados"
                    // Animar: Empurrar para a direita
                }
            >
                <Text style={styles.dialogText}>Currículos Enviados</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.dialogBox}
                onPress={() => {
                    sair()
                }}
            >
                <Text style={styles.dialogText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 150,
        top: 81,
        left: 67,
        opacity: 1,
        marginBottom: 10,
    },
    title: {
        fontSize: 36,
        fontWeight: '700',
        lineHeight: 45,
        color: 'black',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 40,
        textAlign: 'left',
        backgroundColor: '#FFFFFF',
        width: 250,
        height: 150,
        paddingTop: 20,
        color: '#090744',
        marginBottom: 20,
    },
    dialogBox: {
        width: 234,
        height: 102,
        backgroundColor: '#090744',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10, // Espaçamento entre as caixas de mensagem
    },
    dialogText: {
        fontSize: 33,
        fontWeight: 'bold',
        color: 'white',
    },
});





