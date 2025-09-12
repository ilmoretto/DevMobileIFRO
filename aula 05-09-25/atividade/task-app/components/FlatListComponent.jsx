import React from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";

export default function FlatListComponent({ data, renderItem, keyExtractor }) {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      contentContainerStyle={styles.scrollContent}
    />
  );
}
