import { Text, TouchableOpacity, View, Button, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import { useNavigation } from '@react-navigation/native';
import TituloCT from '../components/TituloCT';
import CardVaga from '../components/CardVaga';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import BotaoPrincipal from '../components/BotaoPrincipal';
import LinkVermelho from '../components/LinkVermelho';
import Link from '../components/Link';

export default function Vagas(){

    const navigation = useNavigation();

    function irPraTela(tela) {
        navigation.navigate(tela);
    }

        function MsgSucesso(){
        navigation.navigate("Mensagem",{mensagem: "Currículo Enviado", tela: "Vagas" });
    }

  return(
        <View style={styles.container}>
        <LogoCacaTrampo/>
        <TituloCT titulo="Vagas de emprego"/>

        <ScrollView style={styles.containerScroll}>
        <CardVaga tituloVaga="Programador" postagem="Hoje" salario="3.500 R$" contratacao="PJ" modelo="Home-Office" local="Conceição, São Paulo-SP" empresa="Estácio"
        enviarCurriculo={()=>MsgSucesso()} detalhesVaga={()=>irPraTela("DetalheVaga")}/>
        
        <CardVaga tituloVaga="Técnico em enfermagem" postagem="Hoje" salario="3.200 R$" contratacao="CLT" modelo="Presencial" local="São Paulo - SP" empresa="Hospital São Paulo"
        enviarCurriculo={()=>MsgSucesso()} detalhesVaga={()=>irPraTela("DetalheVaga")}/>
        </ScrollView>
        <BotaoPrincipal textoBotao="Voltar" click={()=>irPraTela("Inicio")}/>
         
        
        </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
  },
  containerScroll:{
  width: '100%',
  paddingLeft: 10,
  paddingRight: 10,
  maxHeight: 450,
  
  }
});