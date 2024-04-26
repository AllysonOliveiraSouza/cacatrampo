import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import styles from './styles/styles';
import Login from './screens/Login';
import Inicio from './screens/Inicio';
//import Cadastro from './screens/Cadastro';
import RecuperarSenha from './screens/RecuperarSenha';
import Curriculo from './screens/curriculo';
import CadastroLP from './screens/CadastroLP';
import Mensagens from './screens/ChatJC';
import AlterarCadastro from './screens/AlterarCadastro';
import InicioADM from './screens/InicioADM';
import CadastroVagas from './screens/CadastroVagas';
import HistoricoVagas from './screens/HistoricoVagas';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Cadastro" component={CadastroLP} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
      <Stack.Screen name="Curriculo" component={Curriculo} />
      <Stack.Screen name="ChatJC" component={Mensagens} />
      <Stack.Screen name="AlterarCadastro" component={AlterarCadastro} />
      <Stack.Screen name="InicioADM" component={InicioADM} />
      <Stack.Screen name="CadastroVagas" component={CadastroVagas} />
      <Stack.Screen name="HistoricoVagas" component={HistoricoVagas} />
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


