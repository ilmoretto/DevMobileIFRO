// ButtonComponent.js
import React from "react";
import { View, Button, Alert } from "react-native";
import styles from "./styles";

export default function ButtonComponent() {
  return (
    <View style={styles.container}>
      <Button
        title="Mostrar alerta"
        onPress={() => alert("Alerta", "Botão pressionado")}
      />
    </View>
  );
}
