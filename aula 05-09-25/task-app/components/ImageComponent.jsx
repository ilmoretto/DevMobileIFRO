// ImageComponent.js
import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

export default function ImageComponent() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={{ uri: "https://picsum.photos/300" }}
        accessible
        accessibilityLabel="Imagem de exemplo"
      />
      <Text style={styles.texto}>Imagem remota de exemplo</Text>
    </View>
  );
}
