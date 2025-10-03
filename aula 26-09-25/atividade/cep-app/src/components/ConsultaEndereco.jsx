import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, TextInput, Image } from "react-native";
import axios from "axios";

export default function ConsultaEndereco() {
    const [endereco, setEndereco] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [enderecoError, setEnderecoError] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                if (query.length !== 8) {
                    setEnderecoError("CEP deve conter 8 dígitos");
                    setEndereco([]);
                    setLoading(false);
                    return;
                }
                
                if (!/^\d{8}$/.test(query)) {
                    setEnderecoError("CEP deve conter apenas números");
                    setEndereco([]);
                    setLoading(false);
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
        }
        
        if (query.length === 8) {
            load();
        } else {
            setLoading(false);
        }
    }, [query]);

    if (loading) return <ActivityIndicator size="large" />;

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <TextInput
                placeholder="Digite o CEP"
                value={query}
                onChangeText={setQuery}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 }}
                keyboardType="numeric"
                maxLength={8}
            />
            {enderecoError && <Text style={{ color: 'red' }}>{enderecoError}</Text>}
            <FlatList
                data={endereco}
                keyExtractor={(item) => item.cep}
                renderItem={({ item }) => ( 
                    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                        <Text>CEP: {item.cep}</Text>
                        <Text>Logradouro: {item.logradouro}</Text>
                        <Text>Bairro: {item.bairro}</Text>
                        <Text>Local: {item.localidade}</Text>
                        <Text>Estado: {item.uf}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text>Nenhum endereço encontrado.</Text>}
                ListHeaderComponent={<Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Consulta de Endereço por CEP</Text>}
                ListFooterComponent={<Text style={{ marginTop: 16 }}>Total de endereços encontrados: {endereco.length}</Text>}

            />

        </View>

        
    );


}