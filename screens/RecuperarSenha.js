import 'react-native-gesture-handler';
import { Text, TouchableOpacity, View, StyleSheet, Alert, Image } from 'react-native';
import styles from '../styles/styles';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function RecuperarSenha() {

    const navigation = useNavigation();

    function login() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })
    }

    function senhaRecuperada(msg, Tela) {
        navigation.navigate("Mensagem", { mensagem: msg, tela: Tela });
    }


    return (
        <View style={styles.container}>
            <Text>Caçatrampo Versão beta</Text>
            <Image style={{ width: 300, height: 150 }} source={require('../assets/cacatrampo-logo.png')} />
            <Text style={[styles.texto, { fontSize: 40, marginBottom: 15 }]}>Recuperar senha</Text>
            <Text style={[styles.texto32azulescuro, { marginBottom: 30, fontWeight: 'bold' }]} >Digite o e-mail cadastrado para recuperação da senha</Text>
            <TextInput style={styles.inputTexto} placeholder=' Digite o seu e-mail' keyboardType='email-address'></TextInput>
            <TouchableOpacity style={[styles.botao, { marginTop: 15 }]} onPress={() => senhaRecuperada('Verifique seu E-mail !', 'Login')}>
                <Text style={[styles.textoBranco, { fontSize: 40, fontWeight: 'bold' }]}>Recuperar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, { marginTop: 15 }]} onPress={login}>
                <Text style={[styles.textoBranco, { fontSize: 40, fontWeight: 'bold' }]}>Sair</Text>
            </TouchableOpacity>
        </View >
    );
}