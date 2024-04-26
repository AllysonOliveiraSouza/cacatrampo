import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Curriculo from './curriculo';
import PerfilLP from './PerfilLP';
import PaginaInicialPHM from './PaginaInicialPHM';



function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Candidato, seja bem vindo ao Caça trampo !</Text>
        </View>
    );
}

function Vagas() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#99f0f7' }}>
            <Text>Vagas</Text>
        </View>
    );
}

function Sair({ navigation }) {

    function sairDoApp() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        })

    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#99f0f7' }}>
            <Text>Deseja Realmente Sair?</Text>
            <TouchableOpacity style={[styles.botao, { marginTop: 15 }]} onPress={() => sairDoApp()}>
                <Text style={styles.textoBranco}>Confirmar logout do sistema</Text>
            </TouchableOpacity>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="PaginaInicial"
            screenOptions={{
                tabBarActiveTintColor: '#3102a8',
            }}
        >
            <Tab.Screen
                name="PaginaInicial"
                component={PaginaInicialPHM}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Curriculo"
                component={Curriculo}
                options={{
                    tabBarLabel: 'Currículo',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="script-text-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={PerfilLP}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Vagas"
                component={Vagas}
                options={{
                    tabBarLabel: 'Vagas',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="shimmer" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Sair"
                component={Sair}
                options={{
                    tabBarLabel: 'Sair',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="run" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


