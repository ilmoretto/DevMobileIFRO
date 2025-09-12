import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

export default function TextInputComponent({ value, onChangeText, placeholder, style }) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
}
