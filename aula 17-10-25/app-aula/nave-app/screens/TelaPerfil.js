import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaPerfil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Perfil</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0d0d0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});