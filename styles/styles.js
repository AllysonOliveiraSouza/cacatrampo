import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#090744'
    },
    textoBotao: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    botao: {
        display: 'flex',
        backgroundColor: '#090744',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    textoBranco: {
        color: 'white'
    },
    inputTexto: {
        textAlign: 'center',
        backgroundColor: '#C6C6D0',
        borderWidth: 3,
        borderColor: '#090744',
        width: '70%',
        height: 73,
        borderRadius: 30,
        marginBottom: 15,
        fontSize: 32,
        fontWeight: 'bold'
    },
    link: {
        textDecorationLine: 'underline',
        color: 'blue',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    }
});

export default styles;