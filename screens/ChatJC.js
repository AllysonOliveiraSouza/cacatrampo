import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Mensagens = ({ navigation }) => {

    function voltarAoMenu() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Inicio" }]
        })

    }

    const [mensagensPorEmpresa, setMensagensPorEmpresa] = useState([
        { empresa: 'Empresa A', mensagens: [{ id: '1', texto: 'Mensagem 1', lida: false }] },
        { empresa: 'Empresa B', mensagens: [{ id: '2', texto: 'Mensagem 2', lida: true }, { id: '3', texto: 'Mensagem 3', lida: false }] },
        // Adicione mais empresas e suas mensagens conforme necessário
    ]);

    const marcarComoLida = (empresa, id) => {
        const novasMensagensPorEmpresa = mensagensPorEmpresa.map(item => {
            if (item.empresa === empresa) {
                item.mensagens = item.mensagens.map(mensagem => {
                    if (mensagem.id === id) {
                        mensagem.lida = true;
                    }
                    return mensagem;
                });
            }
            return item;
        });
        setMensagensPorEmpresa(novasMensagensPorEmpresa);
    };

    const renderEmpresa = ({ item }) => (
        <View style={styles.empresaContainer}>
            <Text style={styles.nomeEmpresa}>{item.empresa}</Text>
            {item.mensagens.map(mensagem => (
                <TouchableOpacity
                    key={mensagem.id}
                    onPress={() => marcarComoLida(item.empresa, mensagem.id)}
                    style={styles.mensagemContainer}
                >
                    <Text style={[styles.mensagemText, { fontWeight: mensagem.lida ? 'normal' : 'bold' }]}>
                        {mensagem.texto}
                    </Text>
                    {mensagem.lida ? (
                        <Ionicons name="ios-checkmark-circle" size={24} color="green" />
                    ) : (
                        <Ionicons name="ios-checkmark-circle-outline" size={24} color="gray" />
                    )}
                </TouchableOpacity>
            ))}
            <Text style={styles.mensagensNaoLidas}>{item.mensagens.filter(mensagem => !mensagem.lida).length} mensagens não lidas</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Histórico de Mensagens</Text>
            <FlatList
                data={mensagensPorEmpresa}
                renderItem={renderEmpresa}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ flexGrow: 1 }}
            />

            <TouchableOpacity style={{
                display: 'flex',
                backgroundColor: '#3102a8',
                padding: 15,
                height: 65,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20
            }} onPress={() => voltarAoMenu()}>
                <Text style={{ color: 'white' }}>Voltar ao menu</Text>
            </TouchableOpacity>


            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => console.log("Ícone 1 clicado")}>
                    <Ionicons name="ios-add-circle-outline" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Ícone 2 clicado")}>
                    <Ionicons name="ios-heart-outline" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Ícone 3 clicado")}>
                    <Ionicons name="ios-chatbubbles-outline" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Ícone 4 clicado")}>
                    <Ionicons name="ios-share-outline" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Ícone 5 clicado")}>
                    <Ionicons name="ios-settings-outline" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#99f0f7',
        flex: 1,
        padding: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center', // Centraliza o texto
        marginTop: 40, // Adiciona margem superior para posicionar mais para baixo
    },
    empresaContainer: {
        marginBottom: 20,
    },
    nomeEmpresa: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    mensagemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    mensagemText: {
        fontSize: 16,
        flex: 1,
        marginRight: 10,
    },
    mensagensNaoLidas: {
        fontSize: 14,
        color: 'gray',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    icon: {
        marginRight: 20,
    },
});

export default Mensagens;