import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import styles from './styles/styles';
import Login from './screens/Login';
import Inicio from './screens/Inicio';
import Cadastro from './screens/Cadastro';
import RecuperarSenha from './screens/RecuperarSenha';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


