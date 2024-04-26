import React, { useState } from "react";
import { View, TextInput, Button, Text, ScrollView } from "react-native";

const CadastroVagas = ({ navigation }) => {

    function voltarAoMenu() {
        navigation.reset({
            index: 0,
            routes: [{ name: "InicioADM" }]
        })
    }




    const [titulo, setTitulo] = useState("");
    const [salario, setSalario] = useState("");
    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [modeloContratacao, setModeloContratacao] = useState("");
    const [modeloTrabalho, setModeloTrabalho] = useState("");
    const [localEmpresa, setLocalEmpresa] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleCadastro = () => {
        console.log("Título:", titulo);
        console.log("Salário:", salario);
        console.log("Nome da Empresa:", nomeEmpresa);
        console.log("Modelo de Contratação:", modeloContratacao);
        console.log("Modelo de Trabalho:", modeloTrabalho);
        console.log("Local da Empresa:", localEmpresa);
        console.log("Descrição:", descricao);


        setTitulo("");
        setSalario("");
        setNomeEmpresa("");
        setModeloContratacao("");
        setModeloTrabalho("");
        setLocalEmpresa("");
        setDescricao("");
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { marginTop: 60 }]}>
                Preencha os campos abaixo para cadastrar vaga
            </Text>

            <Text style={styles.inputTitle}>Título da vaga</Text>
            <TextInput
                placeholder=" título da vaga"
                value={titulo}
                onChangeText={(text) => setTitulo(text)}
                style={[styles.input, { backgroundColor: "white" }]}
            />
            <Text style={styles.inputTitle}>Salário</Text>
            <TextInput
                placeholder="Insira o salário"
                value={salario}
                onChangeText={(text) => setSalario(text)}
                style={[styles.input, { backgroundColor: "white" }]}
            />
            <Text style={styles.inputTitle}>Nome da empresa</Text>
            <TextInput
                placeholder="Insira o nome da empresa"
                value={nomeEmpresa}
                onChangeText={(text) => setNomeEmpresa(text)}
                style={[styles.input, { backgroundColor: "white" }]}
            />
            <Text style={styles.inputTitle}>Modelo de Contratação</Text>
            <TextInput
                placeholder="Insira o modelo de contratação"
                value={modeloContratacao}
                onChangeText={(text) => setModeloContratacao(text)}
                style={[styles.input, { backgroundColor: "white" }]}
            />
            <Text style={styles.inputTitle}>Modelo de Trabalho</Text>
            <TextInput
                placeholder="Insira o modelo de trabalho"
                value={modeloTrabalho}
                onChangeText={(text) => setModeloTrabalho(text)}
                style={[styles.input, { backgroundColor: "white" }]}
            />
            <Text style={styles.inputTitle}>Local da empresa</Text>
            <TextInput
                placeholder="Insira o local da empresa"
                value={localEmpresa}
                onChangeText={(text) => setLocalEmpresa(text)}
                style={[styles.input, { backgroundColor: "white" }]}
            />
            <Text style={styles.descriptionTitle}>
                Descrição e atividades da vaga
            </Text>
            <ScrollView
                style={[styles.input, styles.descriptionInput, { minHeight: 100 }]}
            >
                <TextInput
                    placeholder="Insira a descrição da vaga"
                    value={descricao}
                    onChangeText={(text) => setDescricao(text)}
                    multiline={true}
                    numberOfLines={4}
                    style={{ height: "100%" }}
                />
            </ScrollView>

            <View style={styles.button}>
                <Button title="Cadastrar Vaga" onPress={() => voltarAoMenu()} />
            </View>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#99f0f7',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    inputTitle: {
        fontSize: 16,
        color: 'black',
        marginBottom: 6,
        fontWeight: 'bold',
    },
    descriptionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    input: {
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        width: '100%',


    },
    button: {
        marginBottom: 20,
        borderRadius: 30,
    },

};


export default CadastroVagas;