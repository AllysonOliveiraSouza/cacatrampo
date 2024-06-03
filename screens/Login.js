import { Text, TouchableOpacity, View, Button, Image, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import BotaoPrincipal from '../components/BotaoPrincipal';
import LinkVermelho from '../components/LinkVermelho';
import Link from '../components/Link';
import { useEffect, useState } from 'react';
import urlsAPI from '../api';
import Globais from '../Globais';

export default function Login() {

  const navigation = useNavigation();



  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  let candidato = {};

  async function PromiseFetchLogin() {
    try {
      const promiseFetch = await fetch(urlsAPI.loginCandidatos, {
        method: 'POST',
        body: JSON.stringify(
          {
            email: login,
            senha: senha
          }
        ), headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })

      const jsonFetch = await promiseFetch.json();
      candidato = jsonFetch;
    } catch (e) {
      console.log(e);
    }
  }

  async function irPraTela(tela) {
    await PromiseFetchLogin();

    if (login === candidato.email && senha === candidato.senha) {
      console.log("login com sucesso!")
      Globais.logado = true;
      navigation.navigate(tela, { candidato: candidato });
    } else if (login === "adm" && senha === "adm") {
      navigation.navigate("InicioADM");
    }
    else {
      Alert.alert("Login e/ou senha incorreto(s)!");
    }
    setLogin("");
    setSenha("");
  }

  const CadastrarOuRecuperar = (nomeTela) => navigation.navigate(nomeTela);

  return (
    <View style={styles.container}>
      <LogoCacaTrampo />
      <LabelCT textoLabel="Login:" />
      <TextoInput value={login} onChangeText={newText => {
        setLogin(newText);
      }} />
      <LabelCT textoLabel="Senha:" />
      <TextoInput value={senha} onChangeText={newText => setSenha(newText)} secureTextEntry={true} />
      <BotaoPrincipal textoBotao="Entrar" click={() => {
        console.log(Globais.logado);
        console.log(`id global : ${Globais.idCandidatoLogado}`)
        irPraTela("Inicio");
      }} />
      <LinkVermelho textoLink="Esqueceu a senha? Clique aqui !" click={() => CadastrarOuRecuperar("RecuperarSenha")} />
      <Link textoLink="Não possui cadastro? Clique aqui !" click={() => CadastrarOuRecuperar("Cadastro")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
  }
});



