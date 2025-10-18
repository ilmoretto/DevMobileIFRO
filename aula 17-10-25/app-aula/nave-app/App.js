

// npx expo install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './screens/TelaInicial';
import TelaDetalhes from './screens/TelaDetalhes';
import TelaPerfil from './screens/TelaPerfil';

// Cria a instância do Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e', // Cor do header
          },
          headerTintColor: '#fff', // Cor do texto do header
          headerTitleStyle: {
            fontWeight: 'bold', // Estilo do título
          },
        }}
      >  
        <Stack.Screen
          name="Home"
          component={TelaInicial}
          options={{ title: 'Página Inicial' }} // Título customizado
        />
        <Stack.Screen
          name="Detalhes"
          component={TelaDetalhes}
        />
        <Stack.Screen
          name="Perfil"
          component={TelaPerfil}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
