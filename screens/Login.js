import 'react-native-gesture-handler';
import { Text, TouchableOpacity, View, Button, Image } from 'react-native';
import styles from '../styles/styles';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { useState } from 'react';



export default function Login({ navigation }) {



    const API_URL = 'http://localhost:8080/candidatos';
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const handleChangeLogin = (text) => {
        setLogin(text);
        console.log('Login: ' + login);
    };

    const handleChangeSenha = (text) => {
        setSenha(text);
        console.log('Senha: ' + senha);
    };


    function entrar() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Inicio" }]
        })
    }

    function entrarADM() {
        navigation.reset({
            index: 0,
            routes: [{ name: "InicioADM" }]
        })
    }

    function cadastrar() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Cadastro" }]
        })
    }

    function recuperarSenha() {
        navigation.reset({
            index: 0,
            routes: [{ name: "RecuperarSenha" }]
        })
    }

    //            <Text onPress={entrarADM}>Entrar adm</Text>

    /*  DEPOIS VOLTAR ESSE BOTÃO
                <TouchableOpacity title='' style={{ backgroundColor: '#f2f3f5', width: '100%', height: 70 }} onPress={entrarADM}></TouchableOpacity>
    
    */




    return (
        <View style={styles.container}>
            <Text>Caçatrampo Versão beta</Text>
            <Image style={{ width: 300, height: 150 }} source={require('../assets/cacatrampo-logo.png')} />


            <Text style={[styles.texto, { fontSize: 32 }]}>Login:</Text>
            <TextInput style={styles.inputTexto} placeholder=' Digite o login' keyboardType='email-address' onChangeText={(newText) => handleChangeLogin(newText)}></TextInput>
            <Text style={[styles.texto, { fontSize: 32 }]}>Senha:</Text>
            <TextInput style={styles.inputTexto} placeholder=' Digite a senha' secureTextEntry={true} onChangeText={(newText) => handleChangeSenha(newText)}></TextInput>
            <TouchableOpacity style={[styles.botao, { marginTop: 15 }]} onPress={() => entrar()}>
                <Text style={[styles.textoBotao, styles.textoBranco]}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => recuperarSenha()}>
                <Text style={[styles.link, { color: 'red' }]}>Esqueceu a senha? Clique aqui !</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => cadastrar()}>
                <Text style={[styles.link, { color: '#099541' }]}>Não possui cadastro? Clique aqui !</Text>
            </TouchableOpacity>

        </View >
    );






}