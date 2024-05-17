import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const JobCard = (props) => {

    const navigation = useNavigation();

    function vagaEnviada(msg, Tela) {
        navigation.navigate("Mensagem", { mensagem: msg, tela: Tela });
    }

    function detalheVaga() {
        navigation.navigate('DescricaoDetalhada');
    }


    return (
        <View style={styles.card}>
            <Text style={styles.jobTitle}>{props.tituloVaga}</Text>
            <View style={styles.jobInfo}>
                <Text style={[styles.infoText, { color: '#F8E118' }]}>Postagem:{props.dataPostagem}</Text>
                <Text style={styles.infoText}>Salário: {props.salario} </Text>
                <Text style={styles.infoText}>Contratação: {props.contratacao}</Text>
                <Text style={styles.infoText}>Modelo: {props.modelo}</Text>
                <Text style={styles.infoText}>Local: {props.local}</Text>
                <Text style={styles.infoText}>Empresa: {props.empresa}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.purpleButton]} onPress={detalheVaga}>
                    <Text style={[styles.buttonText, { color: 'black' }]}>Descrição Detalhada</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.greenButton]}
                    onPress={() => vagaEnviada('Currículo enviado com sucesso !', 'Vagas')}>
                    <Text style={[styles.buttonText, { color: 'black' }]}>Enviar Currículo</Text>
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
            <Text style={styles.vacancyText}>Vagas de Emprego</Text>
            <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent}>
                <JobCard tituloVaga='Programador Web Júnior' dataPostagem='16/05/2024' salario='À combinar' contratacao='PJ' modelo='Presencial' local='São Paulo-SP' empresa='Google' />

                <JobCard tituloVaga='Enfermeiro(a)' dataPostagem='16/05/2024' salario='4000 R$' contratacao='CLT' modelo='Presencial' local='São Paulo-SP' empresa='Hospital Israelita Albert Eiesten' />

                <JobCard tituloVaga='Mecânico de autos' dataPostagem='16/05/2024' salario='À combinar' contratacao='CLT' modelo='Presencial' local='São Paulo-SP' empresa='Google' />

                <JobCard tituloVaga='Java developer Sr' dataPostagem='10/05/2024' salario='20.000 R$' contratacao='PJ' modelo='Home office' local='São Paulo-SP' empresa='Oracle' />

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
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },
    scrollViewContent: {
        height: 600,
        position: 'relative'

    },
    card: {
        backgroundColor: '#090744',
        borderRadius: 30,
        padding: 30,
        marginBottom: 50,
        marginRight: 12,
        alignItems: 'center',
        width: 355,
        height: 475
    },
    jobTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
    },
    jobInfo: {
        marginBottom: 10,
    },
    infoText: {
        marginBottom: 5,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#13E969'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 8,
    },
    button: {
        borderRadius: 30,
        width: 135,
        height: 120,
        padding: 5,
        marginLeft: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    purpleButton: {
        backgroundColor: '#FF3FF7',
    },
    greenButton: {
        backgroundColor: '#13E969'
    },
    backButton: {
        backgroundColor: '#090744',
        borderRadius: 30,
        paddingVertical: 25,
        paddingHorizontal: 50,
        alignSelf: 'center',
        marginTop: 10
    },
    backButtonText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Vagas;





