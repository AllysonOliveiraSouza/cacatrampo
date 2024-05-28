import { Text, TouchableOpacity, View, Button, Image, Alert, StyleSheet } from 'react-native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import TituloCT from '../components/TituloCT';
import CaixaDescricao from '../components/CaixaDescricao';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import BotaoPrincipal from '../components/BotaoPrincipal';
import LinkVermelho from '../components/LinkVermelho';
import Link from '../components/Link';
import { useNavigation } from '@react-navigation/native';

export default function DetalheVaga(){

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
        <TituloCT titulo="Programador Web Júnior"/>
        <CaixaDescricao descricao="jsajdkjlkdsjadlkjdsalkjflkjsalkfjlkjfslkjdskajkjdljsalkjlkdjlkjsakldjlkjsajdlkjsadlkjjdlkajsdlkjdlkjalksjdlkjdlkjsalkjlkdjlksajjdsajdlkjdslkjdslkjdslkjdlkjdslkajdlkjlksajdlkjlksajdlkjlksajdlkdsdsajlkjdsalkjdlkjlksajdlkjksajlkdjlksajdlksajdljlksajlkdjlksajdlksajlkjsakjdjsajlkdjlksadlkjlksadlkjaslkjdlkjsalklkdjlkjsadlkdlkwjlkwajdlkjddlklwajdlkjwlkdjlkewjdlkjewdlkdjld"/>
        <BotaoPrincipal textoBotao="Enviar currículo" click={()=>MsgSucesso()}/>
        <BotaoPrincipal textoBotao="Voltar" click={()=>irPraTela("Vagas")} />

     
        
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
  }
});