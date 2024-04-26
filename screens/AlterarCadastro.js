import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text } from 'react-native';

const AlterarCadastro = ({ navigation }) => {

    function voltarAoMenu() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Inicio" }]
        })

    }

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');
    const [curriculo, setCurriculo] = useState('');
    const [matricula, setMatricula] = useState('');

    const handleSubmit = () => {
        // Lógica para enviar os dados alterados para o servidor
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Data de Nascimento:', dataNascimento);
        console.log('Celular:', celular);
        console.log('Senha:', senha);
        console.log('Curriculo:', curriculo);
        console.log('Matrícula:', matricula);
        // Você pode implementar aqui a lógica para enviar os dados para o servidor
    };

    const handleSelectCurriculo = () => {
        // Lógica para abrir o explorador de arquivos para selecionar o currículo em PDF
        // Esta função seria acionada quando o usuário clicar no campo para alterar o currículo
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../src/assets/cacatrampo-logo.png')} // Ajuste o caminho conforme necessário
                    style={styles.profileImage}
                />
                <Text style={styles.descriptionText}>Preencha corretamente os dados que deseja alterar</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Nome completo"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Data de nascimento (DD/MM/AAAA)"
                value={dataNascimento}
                onChangeText={setDataNascimento}
            />
            <TextInput
                style={styles.input}
                placeholder="Celular"
                value={celular}
                onChangeText={setCelular}
            />
            <TextInput
                style={styles.input}
                placeholder="Nova senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />
            <Button
                title="Alterar Senha"
                onPress={() => { }} // Adicione a lógica para alterar a senha
            />
            <Button
                title="Anexar Currículo (PDF)"
                onPress={handleSelectCurriculo}
            />
            <TextInput
                style={styles.input}
                placeholder="Matrícula (RA)"
                value={matricula}
                onChangeText={setMatricula}
            />
            <Button
                title="Salvar"
                onPress={handleSubmit}
            />

            <Button title="Voltar ao menu" onPress={() => voltarAoMenu()}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#99f0f7', // Cor de fundo adicionada
    },
    imageContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50, // Faz a imagem redonda
    },
    descriptionText: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    }
});

export default AlterarCadastro;