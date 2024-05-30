import { View, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BotaoCadastro from '../components/BotaoCadastro';

import TituloCT from '../components/TituloCT';
import { useState } from 'react';
import MarginBottom15 from '../components/MarginBottom15';

export default function CadastrarVaga() {

    const navigation = useNavigation();

    function irPraTela(tela) {
        navigation.navigate(tela);
    }

    function MsgSucesso(tela, mensagem) {
        navigation.navigate("Mensagem", { mensagem: mensagem, tela: tela });
    }

    return (
        <View style={styles.container}>
            <LogoCacaTrampo />
            <TituloCT titulo="Preencha os campos abaixo para cadastrar uma vaga:" />
            <ScrollView style={styles.containerScroll}>
                <LabelCT textoLabel="Título da vaga:" />
                <TextoInput />
                <LabelCT textoLabel="Salário:" />
                <TextoInput />
                <LabelCT textoLabel="Tipo de contratação:" />
                <TextoInput placeholder="Ex..CLT,PJ..etc.." />
                <LabelCT textoLabel="Modelo de trabalho:" />
                <TextoInput placeholder="Ex..Presencial,Híbrido...etc" />
                <LabelCT textoLabel="Local da empresa:" />
                <TextoInput />
                <LabelCT textoLabel="Nome da empresa:" />
                <TextoInput />
                <MarginBottom15 />
                <BotaoCadastro textoBotao="Cadastrar" click={() => MsgSucesso("InicioADM", "Vaga cadastrada!")} />
                <BotaoCadastro textoBotao="Voltar" click={() => irPraTela("InicioADM")} />

            </ScrollView>
        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15
    },
    containerScroll: {
        width: '100%',
        paddingRight: 15,
        paddingLeft: 15
    },
    botao: {
        display: 'flex',
        backgroundColor: '#090744',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 15
    }
});