import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const JobCard = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.jobTitle}>Programador Web Junior</Text>
            <View style={styles.jobInfo}>
                <Text style={[styles.infoText, { color: 'yellow' }]}>Postagem: 07/05/2024</Text>
                <Text style={[styles.infoText, { color: 'green' }]}>Salário: R$ 3.000,00</Text>
                <Text style={[styles.infoText, { color: 'green' }]}>Contratação: CLT</Text>
                <Text style={[styles.infoText, { color: 'green' }]}>Modelo: Híbrido</Text>
                <Text style={[styles.infoText, { color: 'green' }]}>Local: São Paulo - SP</Text>
                <Text style={[styles.infoText, { color: 'green' }]}>Empresa: Estácio</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.purpleButton]}>
                    <Text style={styles.buttonText}>Requisitos e Atividades</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.greenButton]}>
                    <Text style={styles.buttonText}>Enviar Currículo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const Vagas = ({ navigation }) => {

    function menu() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Inicio" }]
        })
    }


    return (
        <View style={styles.container}>
            <Image style={{ width: 300, height: 150 }} source={require('../assets/cacatrampo-logo.png')} />
            <Text style={styles.vacancyText}>Vaga de Emprego</Text>
            <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent}>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </ScrollView>
            <TouchableOpacity style={styles.backButton} onPress={menu}>
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    vacancyText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    scrollViewContent: {
        alignItems: 'center',
        height: 400

    },
    card: {
        backgroundColor: '#090744',
        borderRadius: 30,
        padding: 30,
        marginBottom: 22,
        marginRight: 12,
        alignItems: 'center',
        width: 350,
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
    },
    jobInfo: {
        marginBottom: 10,
    },
    infoText: {
        marginBottom: 5,
        fontSize: 14,
        color: '#13E969',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 8,
    },
    button: {
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        flex: 2,
    },
    buttonText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
    },
    purpleButton: {
        backgroundColor: 'purple',
        marginRight: 15,
    },
    greenButton: {
        backgroundColor: 'green',
        marginLeft: 7,
    },
    backButton: {
        backgroundColor: '#090744',
        borderRadius: 30,
        paddingVertical: 25,
        paddingHorizontal: 50,
        marginBottom: 20,
        alignSelf: 'center',
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Vagas;





