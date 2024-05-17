import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Mensagem({ route }) {

    const navigation = useNavigation();

    const telaParaCarregar = route.params?.tela;

    const timeoutId = () => setTimeout(() => {
        navigation.navigate(telaParaCarregar);
    }, 3000);

    timeoutId();

    return (
        <View style={[styles.container, { backgroundColor: '#13E969' }]}>
            <Image style={{ width: 450, height: 250 }} source={require('../assets/cacatrampo-logo.png')} />
            <Text style={styles.title}>{route.params?.mensagem}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 70,
        marginBottom: 16,
        width: '80%'
    },
});