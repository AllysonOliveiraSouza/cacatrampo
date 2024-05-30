import { Text, TouchableOpacity, View, Button, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import TituloCT from '../components/TituloCT';
import CardVaga from '../components/CardVaga';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import BotaoPrincipal from '../components/BotaoPrincipal';
import LinkVermelho from '../components/LinkVermelho';
import Link from '../components/Link';
import CardGerenciaVaga from '../components/CardGerenciaVaga';

export default function GerenciarVagas() {

    const navigation = useNavigation();

    function irPraTela(tela) {
        navigation.navigate(tela);
    }



    return (
        <View style={styles.container}>
            <LogoCacaTrampo />
            <TituloCT titulo="Gerencia de vagas" />
            <ScrollView style={styles.containerScroll}>
                <CardGerenciaVaga tituloVaga="Atacante" empresa="Clube de Regatas Flamengo" dataPostagem="27/05/2024" />
                <CardGerenciaVaga tituloVaga="Cuidador de animais" empresa="Confidencial" dataPostagem="27/05/2024" />
            </ScrollView>
            <BotaoPrincipal textoBotao="Voltar" click={() => irPraTela("InicioADM")} />
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
    },
    containerScroll: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        maxHeight: 450,

    }
});