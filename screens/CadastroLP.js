// Tela de cadastro
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const CadastroScreen = () => {

    const navigation = useNavigation();

    function cadastroFeito(msg, Tela) {
        navigation.navigate("Mensagem", { mensagem: msg, tela: Tela });
    }

    function sairDoApp() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })

    }

    return (
        <View style={styles.container}>

            <ScrollView style={styles.rolagemVertical}>
                <Image style={{ width: 300, height: 150, marginLeft: 40 }} source={require('../assets/cacatrampo-logo.png')} />
                <Text style={styles.title}>Preencha os dados abaixo para realização do cadastro</Text>

                <Text style={styles.label}>Nome:</Text>
                <TextInput style={[styles.inputTexto, { width: '100%' }]} />
                <Text style={styles.label}>Matrícula Estácio (RA):</Text>
                <TextInput style={[styles.inputTexto, { width: '100%' }]} keyboardType="numeric" />

                <Text style={styles.label}>E-mail:</Text>
                <TextInput style={[styles.inputTexto, { width: '100%' }]} keyboardType="email-address" />
                <Text style={styles.label}>Cadastre uma Senha:</Text>
                <TextInput style={[styles.inputTexto, { width: '100%' }]} secureTextEntry={true} />
                <Text style={styles.label}>Confirme a Senha:</Text>
                <TextInput style={[styles.inputTexto, { width: '100%' }]} secureTextEntry={true} />

                <Text style={styles.label}>Celular</Text>
                <TextInput style={[styles.inputTexto, { width: '100%' }]} keyboardType="phone-pad" />

                <Text style={styles.label}>Data de nascimento:</Text>
                <TextInput style={[styles.inputTexto, { width: '100%' }]} keyboardType="numeric" />



                <Text style={styles.label}>Anexar currículo:</Text>
                <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Arquivo anexado com sucesso!')}>
                    <MaterialCommunityIcons
                        name="book-variant-multiple"
                        size={40}
                        color={'#fff'}
                    />

                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => cadastroFeito('Cadastro feito !', 'Login')}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button} onPress={() => sairDoApp()} >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>

            </ScrollView>







        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        marginTop: 10,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#090744'
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
        display: 'flex',
        backgroundColor: '#090744',
        padding: 15,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 15,
        marginLeft: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
    inputTexto: {
        textAlign: 'center',
        backgroundColor: '#C6C6D0',
        borderWidth: 3,
        borderColor: '#000',
        width: '70%',
        height: 73,
        borderRadius: 30,
        marginBottom: 15,
        fontSize: 32,
        fontWeight: 'bold'
    },
    rolagemVertical: {


    }

});

export default CadastroScreen;