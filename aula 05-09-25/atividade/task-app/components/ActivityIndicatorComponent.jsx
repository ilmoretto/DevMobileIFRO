// ActivityIndicatorComponent.js
import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import styles from "./styles";

export default function ActivityIndicatorComponent() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" style={styles.loader} />
      <Text style={styles.texto}>Carregando dados…</Text>
    </View>
  );
}
