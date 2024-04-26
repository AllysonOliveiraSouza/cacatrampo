import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PerfilScreen = ({ navigation }) => {

    function alterarCadastro() {
        navigation.reset({
            index: 0,
            routes: [{ name: "AlterarCadastro" }]
        })

    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Perfil</Text>
            <Text style={{ fontSize: 18 }}>Olá, o que deseja fazer?</Text>
            <TouchableOpacity onPress={() => alterarCadastro()}>
                <Text style={styles.link}>Clique aqui para alterar informações da conta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Alterar currículo")}>
                <Text style={styles.link}>Clique aqui para alterar currículo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#99f0f7',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        position: 'absolute',
        top: 10
    },
    link: {
        color: 'blue',
        fontSize: 18,
        textDecorationLine: 'underline',
        marginTop: 30,
    },
});

export default PerfilScreen;
