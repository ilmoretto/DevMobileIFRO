import react from "react";
import { SafeAreaView, Text } from "react-native";
import styles from "./styles";

export default function SafeAreaViewCom(){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.texto}>SafeAreaView ativo</Text>
        </SafeAreaView>
    );
};