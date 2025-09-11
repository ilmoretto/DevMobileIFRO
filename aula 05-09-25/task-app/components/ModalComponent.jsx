// ModalComponent.js
import React, { useState } from "react";
import { View, Text, Modal, Button, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function ModalComponent() {
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Abrir modal" onPress={() => setVisivel(true)} />

      <Modal visible={visivel} transparent animationType="slide">
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <Text style={styles.modalText}>Conteúdo do modal</Text>

            <TouchableOpacity
              style={styles.touchable}
              onPress={() => setVisivel(false)}
              activeOpacity={0.7}
            >
              <Text style={styles.touchableText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
