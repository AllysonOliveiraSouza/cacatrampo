import { Text, TouchableOpacity, View, Button, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import TituloCT from '../components/TituloCT';
import CardVaga from '../components/CardVaga';
import VagaEnviada from '../components/VagaEnviada';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import BotaoPrincipal from '../components/BotaoPrincipal';
import LinkVermelho from '../components/LinkVermelho';
import Link from '../components/Link';

export default function CurriculosEnviados(){

    const navigation = useNavigation();

    function irPraTela(tela) {
        navigation.navigate(tela);
    }

  return(
        <View style={styles.container}>
        <LogoCacaTrampo/>
        <TituloCT titulo="Currículos enviados"/>
        <ScrollView style={styles.containerScroll}>
        <VagaEnviada tituloVaga="Programador" empresa="Estácio" dataCandidatura="21/05/2024"/>
        <VagaEnviada tituloVaga="Programador"/>
        <VagaEnviada tituloVaga="Programador"/>
        <VagaEnviada tituloVaga="Programador"/>

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