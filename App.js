import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import styles from './styles/styles';
import Login from './screens/Login';
// import Inicio from './screens/Inicio';
//import Cadastro from './screens/Cadastro';
import RecuperarSenha from './screens/RecuperarSenha';
import Curriculo from './screens/curriculo';
import CadastroLP from './screens/CadastroLP';
import Mensagens from './screens/ChatJC';
import AlterarCadastro from './screens/AlterarCadastro';
import InicioADM from './screens/InicioADM';
import CadastroVagas from './screens/CadastroVagas';
import HistoricoVagas from './screens/HistoricoVagas';
import Vagas from './screens/Vagas';
import PaginaInicialPHM from './screens/PaginaInicialPHM';
import CurriculosEnviados from './screens/CurriculosEnviados';
import Mensagem from './screens/Mensagem';
import DescricaoDetalhada from './screens/DescricaoDetalhada';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Inicio" component={PaginaInicialPHM} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={CadastroLP} options={{ headerShown: false }} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ headerShown: false }} />
      <Stack.Screen name="Curriculo" component={Curriculo} options={{ headerShown: false }} />
      <Stack.Screen name="AlterarCadastro" component={AlterarCadastro} options={{ headerShown: false }} />
      <Stack.Screen name="InicioADM" component={InicioADM} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroVagas" component={CadastroVagas} options={{ headerShown: false }} />
      <Stack.Screen name="HistoricoVagas" component={HistoricoVagas} options={{ headerShown: false }} />
      <Stack.Screen name="Vagas" component={Vagas} options={{ headerShown: false }} />
      <Stack.Screen name="CurriculosEnviados" component={CurriculosEnviados} options={{ headerShown: false }} />
      <Stack.Screen name="Mensagem" component={Mensagem} options={{ headerShown: false }} />
      <Stack.Screen name="DescricaoDetalhada" component={DescricaoDetalhada} options={{ headerShown: false }} />
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


