import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export default function HistoricoVagas({ navigation }) {

    function voltarAoMenu() {
        navigation.reset({
            index: 0,
            routes: [{ name: "InicioADM" }]
        })
    }

    const vagas = [
        { cargo: 'Pedreiro', empresa: 'Empresa A', dataPostagem: '20/03/2024' },
        { cargo: 'Psiquiatra', empresa: 'Empresa X', dataPostagem: '01/04/2024' },
        { cargo: 'QA Tester', empresa: 'Empresa F', dataPostagem: '08/04/2024' },
        { cargo: 'Cozinheiro', empresa: 'Empresa D', dataPostagem: '08/04/2024' },
        { cargo: 'UX', empresa: 'Empresa S', dataPostagem: '08/04/2024' },
        { cargo: 'Front-end', empresa: 'Empresa H', dataPostagem: '08/04/2024' },
    ];

    return (
        <ScrollView contentContainerStyle={[styles.container, { backgroundColor: '#99f0f7' }]}>
            <Text style={styles.title}>Histórico de Vagas</Text>
            <TouchableOpacity style={styles.botao} onPress={() => voltarAoMenu()}>
                <Text style={{ color: 'white' }}>Voltar ao menu</Text>
            </TouchableOpacity>


            {vagas.map((vaga, index) => (
                <View key={index} style={styles.vagaContainer}>
                    <Text style={styles.info}>Cargo: {vaga.cargo}</Text>
                    <Text style={styles.info}>Empresa: {vaga.empresa}</Text>
                    <Text style={styles.info}>Postagem: {vaga.dataPostagem}</Text>
                </View>
            ))}
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6f1fa',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    vagaContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#b1b1b1', // Cor de fundo cinza
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',

    },
    botao: {
        display: 'flex',
        backgroundColor: '#3102a8',
        padding: 15,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
});