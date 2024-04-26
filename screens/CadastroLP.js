// Tela de cadastro
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const CadastroScreen = ({ navigation }) => {

    function sairDoApp() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os dados abaixo para realização do cadastro</Text>

            <Text style={styles.label}>Nome completo</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome completo" />

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Digite seu email" keyboardType="email-address" />

            <Text style={styles.label}>Celular</Text>
            <TextInput style={styles.input} placeholder="Digite seu número de celular" keyboardType="phone-pad" />

            <Text style={styles.label}>Data de nascimento</Text>
            <TextInput style={styles.input} placeholder="Digite sua data de nascimento" keyboardType="numeric" />

            <Text style={styles.label}>Senha de cadastro</Text>
            <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />

            <Text style={styles.label}>Anexar currículo</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Selecione o arquivo</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Matrícula Estácio (RA)</Text>
            <TextInput style={styles.input} placeholder="Digite sua matrícula" keyboardType="numeric" />
            <TouchableOpacity style={styles.button} onPress={() => sairDoApp()} >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#99f0f7',
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        marginTop: 10,
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 15,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CadastroScreen;