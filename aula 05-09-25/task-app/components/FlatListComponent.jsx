// FlatListComponent.js
import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";

const dados = Array.from({ length: 20 }, (_, i) => ({
  id: String(i + 1),
  titulo: `Item ${i + 1}`
}));

export default function FlatListComponent() {
  return (
    <FlatList
      data={dados}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.texto}>{item.titulo}</Text>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      contentContainerStyle={styles.scrollContent}
    />
  );
}
