import React, { useState } from "react";
import { View, Text, FlatList, ActivityIndicator, TextInput, TouchableOpacity } from "react-native";
import axios from "axios"; // Biblioteca para requisições HTTP
import styles from "../css/consultaEnderecoStyles"; 

export default function ConsultaEndereco() {
    // Estados do componente
    const [endereco, setEndereco] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const [query, setQuery] = useState(""); 
    const [enderecoError, setEnderecoError] = useState(null); 

    
    const buscarCEP = async () => {
        try {
            // Validação: verifica se o CEP tem exatamente 8 dígitos
            if (query.length !== 8) {
                setEnderecoError("CEP deve conter 8 dígitos");
                setEndereco([]);
                return;
            }

            // Validação: verifica se contém apenas números usando regex
            if (!/^\d{8}$/.test(query)) {
                setEnderecoError("CEP deve conter apenas números");
                setEndereco([]);
                return;
            }

            // Inicia o loading e limpa erros anteriores
            setLoading(true);
            setEnderecoError(null);

            // Faz a requisição para a API ViaCEP
            const res = await axios.get(`https://viacep.com.br/ws/${query}/json/`);
            const data = res.data;

            // Verifica se a API retornou erro (CEP não encontrado)
            if (data.erro) {
                setEnderecoError("CEP não encontrado");
                setEndereco([]);
            } else {
                // Armazena os dados do endereço em um array
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

    // Exibe loading enquanto a requisição está sendo processada
    if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

    return (
        <View style={styles.container}>
        <Text style={styles.listHeader}>Buscar CEP</Text>
            {/* Container com input e botão lado a lado */}
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Digite o CEP"
                    value={query}
                    onChangeText={setQuery}
                    style={styles.textInput}
                    keyboardType="numeric" // Teclado numérico no mobile
                    maxLength={8} // Limita a 8 caracteres
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
            
            {/* Exibe mensagem de erro se houver */}
            {enderecoError && <Text style={styles.errorText}>{enderecoError}</Text>}
            
            {/* Lista dos resultados do endereço */}
            <FlatList
                data={endereco} // Array com dados do endereço
                keyExtractor={(item) => item.cep} 
                renderItem={({ item }) => (
                    // Card com informações do endereço
                    <View style={styles.endercoItem}>
                        <Text>CEP: {item.cep}</Text>
                        <Text>Logradouro: {item.logradouro}</Text>
                        <Text>Bairro: {item.bairro}</Text>
                        <Text>Local: {item.localidade}</Text>
                        <Text>Estado: {item.uf}</Text>
                    </View>
                )}
                // Componentes especiais da FlatList
                ListEmptyComponent={<Text>Nenhum endereço encontrado.</Text>}
            />
        </View>
    );
}