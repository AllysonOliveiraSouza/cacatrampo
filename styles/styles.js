import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6f1fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    botao: {
        display: 'flex',
        backgroundColor: '#3102a8',
        padding: 15,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    textoBranco: {
        color: 'white'
    },
    inputTexto: {
        textAlign: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        width: '55%',
        height: 40,
        borderRadius: 20,
        marginBottom: 15
    },
    link: {
        textDecorationLine: 'underline',
        color: 'blue'
    }
});

export default styles;