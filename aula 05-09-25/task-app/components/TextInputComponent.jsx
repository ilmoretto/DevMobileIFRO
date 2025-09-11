// TextInputComponent.js
import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./styles";

export default function TextInputComponent() {
  const [valor, setValor] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        value={valor}
        onChangeText={setValor}
      />
      <Text style={styles.texto}>Você digitou: {valor}</Text>
    </View>
  );
}
