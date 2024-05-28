import { View, StyleSheet } from 'react-native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import LabelCT from '../components/LabelCT';
import { useNavigation } from '@react-navigation/native';

import BotaoPrincipal from '../components/BotaoPrincipal';

import TituloCT from '../components/TituloCT';

export default function Inicio(){

    const navigation = useNavigation();

    function irPraTela(tela) {
        navigation.navigate(tela);
    }


  return(
        <View style={styles.container}>
        <LogoCacaTrampo/>
        <TituloCT titulo="Olá candidato(a)!"/>
        <LabelCT textoLabel="Selecione uma das opções abaixo :"/>
        <BotaoPrincipal textoBotao="Ver vagas" click={()=>irPraTela("Vagas")}/>
        <BotaoPrincipal textoBotao="Currículos Enviados" click={()=>irPraTela("CurriculosEnviados")}/>
        <BotaoPrincipal textoBotao="Alterar Cadastro" click={()=>irPraTela("AlterarCadastro")}/>
        <BotaoPrincipal textoBotao="Sair" click={()=>irPraTela("Login")}/>
    
        
        </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
  }
});