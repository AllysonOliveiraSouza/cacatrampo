import { View, StyleSheet } from 'react-native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import LabelCT from '../components/LabelCT';
import { useNavigation } from '@react-navigation/native';
import BotaoPrincipal from '../components/BotaoPrincipal';
import TituloCT from '../components/TituloCT';
import { useEffect, useState } from 'react';
import urlsAPI from '../api';
import Globais from '../Globais';

export default function Inicio({ route }) {
  const [candidatoLogado, setCandidatoLogado] = useState(route.params?.candidato);
  const nomeCandidato = candidatoLogado.nome;
  const IDCandidato = candidatoLogado.id;
  Globais.idCandidatoLogado = candidatoLogado.id;
  const navigation = useNavigation();
  console.log(Globais.logado)
  console.log(`id global : ${Globais.idCandidatoLogado}`)

  function irPraTela(tela) {
    navigation.navigate(tela);
  }

  function irParaVagas() {
    navigation.navigate("Vagas", { idCandidato: IDCandidato })
  }

  function irParaCvsEnviados() {
    navigation.navigate("CurriculosEnviados", { idCandidato: IDCandidato })
  }

  function irParaAlterarCadastro() {
    navigation.navigate("AlterarCadastro")
  }

  /*
  
    async function atualizarDadosCandidato() {
      const response = await fetch(urlsAPI.operacoesCandidatos + `/${candidatoLogado.id}`);
      const candidatoAtualizado = await response.json();
      console.log(candidatoAtualizado);
      return candidatoAtualizado;
    }
  
  */

  return (
    <View style={styles.container}>
      <LogoCacaTrampo />
      <TituloCT titulo={`Olá ${nomeCandidato}!`} />
      <LabelCT textoLabel="Selecione uma das opções abaixo :" />
      <BotaoPrincipal textoBotao="Ver vagas" click={() => irParaVagas()} />
      <BotaoPrincipal textoBotao="Currículos Enviados" click={() => {
        irParaCvsEnviados()
      }
      } />
      <BotaoPrincipal textoBotao="Alterar Cadastro" click={() => {
        irParaAlterarCadastro()
      }} />
      <BotaoPrincipal textoBotao="Sair" click={() => {
        irPraTela("Login");
        Globais.logado = false;
        Globais.idCandidatoLogado = null;
      }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});