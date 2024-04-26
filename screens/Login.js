import 'react-native-gesture-handler';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import styles from '../styles/styles';
import { TextInput } from 'react-native-gesture-handler';

export default function Login({ navigation }) {

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


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Caça trampo</Text>
            <Text>Login:</Text>
            <TextInput style={styles.inputTexto} placeholder=' Digite o login' keyboardType='email-address'></TextInput>
            <Text>Senha:</Text>
            <TextInput style={styles.inputTexto} placeholder=' Digite a senha' secureTextEntry={true}></TextInput>
            <TouchableOpacity onPress={() => recuperarSenha()}>
                <Text style={[styles.link, { color: 'red' }]}>Esqueceu a senha? Clique aqui !!!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, { marginTop: 15 }]} onPress={() => entrar()}>
                <Text style={[styles.texto, styles.textoBranco]}>Entrar como candidato</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: 15 }}>Não possui cadastro?</Text>
            <TouchableOpacity onPress={() => cadastrar()}>
                <Text style={styles.link}>Clique aqui para cadastrar!!!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao, { marginTop: 15 }]} onPress={() => entrarADM()}>
                <Text style={[styles.texto, styles.textoBranco]}>Entrar como adm</Text>
            </TouchableOpacity>
        </View >
    );
}