import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function TouchableOpacityComponent({ title, onPress, style }) {
  return (
    <TouchableOpacity
      style={[styles.touchable, style]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.touchableText}>{title}</Text>
    </TouchableOpacity>
  );
}
