import 'react-native-gesture-handler';
import { Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import styles from '../styles/styles';
import { TextInput } from 'react-native-gesture-handler';


export default function Curriculo({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={estilosCurriculo.h1}>Cadastrar curriculo</Text>
            <TextInput placeholder="Digite um dado"> </TextInput>

        </View>

    );

}

const estilosCurriculo = StyleSheet.create({
    h1: {
        fontSize: 20
    }

});