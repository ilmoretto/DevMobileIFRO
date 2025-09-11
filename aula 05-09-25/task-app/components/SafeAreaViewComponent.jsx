SafeAreaViewComponent// SafeAreaViewComponent.js
import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles.js";

export default function SafeAreaViewComponent() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>SafeAreaView ativo</Text>
    </SafeAreaView>
  );
}
