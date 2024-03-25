import 'react-native-gesture-handler';
import { Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import styles from '../styles/styles';
import { TextInput } from 'react-native-gesture-handler';

export default function RecuperarSenha({ navigation }) {

    function login() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })
    }

    function senhaRecuperada() {
        Alert.alert('Solicitada a recuperação', 'Um link foi enviado ao e-mail digitado, verificar e seguir as instruções no e-mail', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
        login();
    }


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Caça trampo - Tela de Recuperar senha</Text>
            <Text>Digite o e-mail cadastrado para recuperação da senha:</Text>
            <TextInput style={styles.inputTexto} placeholder=' Digite o seu e-mail' keyboardType='email-address'></TextInput>
            <TouchableOpacity style={styles.botao} onPress={() => senhaRecuperada()}>
                <Text style={styles.textoBranco}>Confirmar recuperação</Text>
            </TouchableOpacity>
        </View >
    );
}