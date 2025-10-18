import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaDetalhes({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Detalhes</Text>
      <View style={styles.button}>
        <Button
          title="Voltar para a Home"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Ir para o Perfil"
          onPress={() => navigation.navigate('Perfil')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  }
});