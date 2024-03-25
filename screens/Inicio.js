import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Allyson, seja bem vindo ao Caça trampo !</Text>
        </View>
    );
}

function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Perfil</Text>
        </View>
    );
}

function Curriculo() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Currículo</Text>
        </View>
    );
}

function Vagas() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#3102a8',
            }}
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
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
                component={Profile}
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


