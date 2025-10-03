import React, { useState } from "react";
import { View, Text, FlatList, ActivityIndicator, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";
import styles from "../css/consultaEnderecoStyles";

export default function ConsultaEndereco() {
    const [endereco, setEndereco] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [enderecoError, setEnderecoError] = useState(null);

    const buscarCEP = async () => {
        try {
            if (query.length !== 8) {
                setEnderecoError("CEP deve conter 8 dígitos");
                setEndereco([]);
                return;
            }

            if (!/^\d{8}$/.test(query)) {
                setEnderecoError("CEP deve conter apenas números");
                setEndereco([]);
                return;
            }

            setLoading(true);
            setEnderecoError(null);

            const res = await axios.get(`https://viacep.com.br/ws/${query}/json/`);
            const data = res.data;

            if (data.erro) {
                setEnderecoError("CEP não encontrado");
                setEndereco([]);
            } else {
                setEndereco([{
                    cep: data.cep,
                    logradouro: data.logradouro,
                    bairro: data.bairro,
                    localidade: data.localidade,
                    uf: data.uf
                }]);
            }

        } catch (e) {
            console.error(e);
            setEnderecoError("Erro ao consultar CEP");
            setEndereco([]);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

    return (
        <View style={styles.container}>
        <Text style={styles.listHeader}>Buscar CEP</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Digite o CEP"
                    value={query}
                    onChangeText={setQuery}
                    style={styles.textInput}
                    keyboardType="numeric"
                    maxLength={8}
                />
                <TouchableOpacity
                    onPress={buscarCEP}
                    disabled={loading}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        {loading ? 'Buscando...' : 'Buscar'}
                    </Text>
                </TouchableOpacity>
            </View>
            {enderecoError && <Text style={styles.errorText}>{enderecoError}</Text>}
            <FlatList
                data={endereco}
                keyExtractor={(item) => item.cep}
                renderItem={({ item }) => (
                    <View style={styles.endercoItem}>
                        <Text>CEP: {item.cep}</Text>
                        <Text>Logradouro: {item.logradouro}</Text>
                        <Text>Bairro: {item.bairro}</Text>
                        <Text>Local: {item.localidade}</Text>
                        <Text>Estado: {item.uf}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text>Nenhum endereço encontrado.</Text>}
                ListFooterComponent={<Text>Total: {endereco.length}</Text>}
            />
        </View>
    );
}