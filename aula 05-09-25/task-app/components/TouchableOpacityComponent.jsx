// TouchableOpacityComponent.js
import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function TouchableOpacityComponent() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        activeOpacity={0.7}
        onPress={() => setContador((c) => c + 1)}
      >
        <Text style={styles.touchableText}>Toque aqui</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>Toques: {contador}</Text>
    </View>
  );
}
