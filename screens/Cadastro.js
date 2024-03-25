import 'react-native-gesture-handler';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import styles from '../styles/styles';
import { TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';

function SelecaoTipoUsuario() {
    return (
        <RNPickerSelect placeholder={{ label: 'Selecione um item' }}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Candidato', value: 'Candidato' },
                { label: 'Empresa', value: 'Empresa' },
            ]}
        />
    );
};

export default function Cadastro({ navigation }) {

    function entrar() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Inicio" }]
        })
    }


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Caça trampo - Tela de Cadastro</Text>
            <Text>Nome completo:</Text>
            <TextInput style={styles.inputTexto} placeholder=' Digite o seu nome' keyboardType='email-address'></TextInput>
            <Text>E-mail:</Text>
            <TextInput style={styles.inputTexto} placeholder=' Digite o seu e-mail' keyboardType='email-address'></TextInput>

            <Text>Data de nascimento:</Text>
            <TextInput style={styles.inputTexto} placeholder=' DD/MM/AAAA' keyboardType='email-address'></TextInput>
            <Text>Cadastre uma senha:</Text>
            <TextInput style={styles.inputTexto} placeholder=' Digite a senha' secureTextEntry={true}></TextInput>
            <Text>Você é?</Text>
            <SelecaoTipoUsuario style={styles.select}></SelecaoTipoUsuario>
            <TouchableOpacity style={styles.botao} onPress={() => entrar()}>
                <Text style={styles.textoBranco}>Clique aqui para finalizar o cadastro!</Text>
            </TouchableOpacity>

        </View >
    );
}