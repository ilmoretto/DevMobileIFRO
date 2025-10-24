// LoginScreen.jsx

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { login } from "../services/api";

/**
 * Tela de Login do aplicativo.
 *
 * @param {object} props - Propriedades do componente.
 * @param {object} props.navigation - Navegação do React Navigation.
 * @returns {JSX.Element} Componente de tela de login.
 */
export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    /**
     * Manipula o processo de login do usuário.
     */
    const handleLogin = async () => {
        console.log("Iniciando o processo de login...");
        try {
            const data = await login(username, password);
            console.log("Login bem-sucedido:", data);
            Alert.alert("Login bem-sucedido!");
            navigation.navigate("Home", { token: data.token });
        } catch (error) {
            console.error("Erro ao fazer login:", error.response?.data?.error || "Erro desconhecido");
            Alert.alert("Erro ao fazer login", error.response?.data?.error || "Erro desconhecido");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome de usuário"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="username"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                textContentType="password"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#F5F5F5",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        marginBottom: 30,
    },
    input: {
        height: 50,
        borderColor: "#DDD",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#FFF",
    },
    button: {
        height: 50,
        backgroundColor: "#6200EE",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginBottom: 10,
    },
    registerButton: {
        backgroundColor: "#03DAC6",
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});
