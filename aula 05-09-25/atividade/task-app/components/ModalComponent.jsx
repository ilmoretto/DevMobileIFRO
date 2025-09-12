import React from "react";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function ModalComponent({ visible, onClose, children }) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalBackdrop}>
        <View style={styles.modalCard}>
          {children}

          <TouchableOpacity
            style={styles.touchable}
            onPress={onClose}
            activeOpacity={0.7}
          >
            <Text style={styles.touchableText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
