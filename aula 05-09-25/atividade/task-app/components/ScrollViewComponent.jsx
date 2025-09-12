// ScrollViewComponent.js
import React from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "./styles";

export default function ScrollViewComponent() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {Array.from({ length: 12 }, (_, i) => (
        <View key={i} style={styles.box}>
          <Text style={styles.texto}>Bloco {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
