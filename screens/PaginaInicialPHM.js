import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function PaginaInicialPHM({ navigation }) {

    function verMensagens() {
        navigation.reset({
            index: 0,
            routes: [{ name: "ChatJC" }]
        })

    }




    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Inicial</Text>
            <Text style={styles.subtitle}>Olá usuário, o que deseja fazer?</Text>
            <TouchableOpacity style={styles.link}>
                <Text style={styles.linkText}>Clique aqui para ver vagas de emprego</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => verMensagens()}>
                <Text style={styles.linkText}>Clique aqui para ver mensagens</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link}>
                <Text style={styles.linkText}>Clique aqui para ver o seu perfil</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#99f0f7',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        color: 'black',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        color: 'black',
        marginBottom: 20,
    },
    link: {
        backgroundColor: 'lightblue',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    linkText: {
        fontSize: 18,
        color: 'blue',
    },
});