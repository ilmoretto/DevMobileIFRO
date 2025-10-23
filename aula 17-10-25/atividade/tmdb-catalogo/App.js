

// npx expo install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import TelaInicial from './src/screens/TelaInicial';
import TelaDetalhes from './src/screens/TelaDetalhes';
import TelaBusca from './src/screens/TelaBusca';

// Cria a instância do Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#E50914', // Cor do header
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
          options={({navigation}) => ({
            title: 'MoreteFlix',
            headerRight: () => (
              <Ionicons 
                name="search" 
                size={24} 
                color="#fff" 
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate('Busca')}
              />
            )
          })}
        />
        <Stack.Screen
          name="Detalhes"
          component={TelaDetalhes}
        />
        <Stack.Screen
          name="Busca"
          component={TelaBusca}
          options={{ title: 'Buscar Filmes' }} // Título customizado
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