import { View, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BotaoCadastro from '../components/BotaoCadastro';

import TituloCT from '../components/TituloCT';

export default function Cadastro() {

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
      <TituloCT titulo="Preencha os campos abaixo para cadastrar-se:" />
      <ScrollView style={styles.containerScroll}>
        <LabelCT textoLabel="Nome:" />
        <TextoInput />
        <LabelCT textoLabel="Matrícula Estácio (RA):" />
        <TextoInput />
        <LabelCT textoLabel="E-mail:" />
        <TextoInput />
        <LabelCT textoLabel="Cadastre uma senha:" />
        <TextoInput />
        <LabelCT textoLabel="Repita a senha:" />
        <TextoInput />
        <LabelCT textoLabel="Celular:" />
        <TextoInput />
        <LabelCT textoLabel="Data de nascimento:" />
        <TextoInput />
        <LabelCT textoLabel="Anexar um currículo:" />
        <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('Arquivo anexado com sucesso!')}>
          <MaterialCommunityIcons name="book-variant-multiple" size={40} color={'#fff'} />
        </TouchableOpacity>
        <BotaoCadastro textoBotao="Cadastrar" click={() => MsgSucesso("Login", "Cadastro feito!")} />
        <BotaoCadastro textoBotao="Sair" click={() => irPraTela("Login")} />

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