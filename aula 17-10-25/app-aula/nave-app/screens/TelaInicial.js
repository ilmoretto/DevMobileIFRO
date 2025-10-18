import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Detalhes')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});