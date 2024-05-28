import { Text, TouchableOpacity, View, Button, Image, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import BotaoPrincipal from '../components/BotaoPrincipal';
import LinkVermelho from '../components/LinkVermelho';
import Link from '../components/Link';

export default function Login(){

    const navigation = useNavigation();

    function irPraTela(tela) {
        navigation.navigate(tela);
    }


  return(
        <View style={styles.container}>
        <LogoCacaTrampo/>
        <LabelCT textoLabel="Login:"/>
        <TextoInput/>
        <LabelCT textoLabel="Senha:"/>
        <TextoInput/>
        <BotaoPrincipal textoBotao="Entrar" click={()=>irPraTela("Inicio")}/>
        <LinkVermelho textoLink="Esqueceu a senha? Clique aqui !" click={()=>irPraTela("RecuperarSenha")}/>
        <Link textoLink="Não possui cadastro? Clique aqui !" click={()=>irPraTela("Cadastro")}/>    
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



