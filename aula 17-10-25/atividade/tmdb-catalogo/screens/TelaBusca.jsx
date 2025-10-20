import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { buscarFilmes, posterUrl } from '../api/tmdb';

export default function TelaBusca({ navigation }) {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [resultados, setResultados] = useState([]);
    const [error, setError] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    const handleBuscar = async () => {
        try {
            setLoading(true);
            setError(null);
            setHasSearched(true);
            const data = await buscarFilmes(query);
            setResultados(data.results || []);// atualiza os resultados com os filmes retornados pela API

        } catch (err) {
            setError('Erro ao buscar filmes. Verifique sua conexão/apikey.');
        } finally {
            setLoading(false);
        }
    }

    const renderItem = ({ item }) => (
        // Componente para exibir cada item da lista de resultados
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Detalhes', { idFilme: item.id })}>
            {item.poster_path ? (
                <Image source={{ uri: posterUrl(item.poster_path, 'w154') }} style={styles.poster} />
                // exibe o poster se disponível

            ) : (<View style={[styles.poster, styles.noPoster]}><Text>Sem poster</Text></View>
            )}
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{item.release_date}</Text>
                <Text numberOfLines={3} style={styles.overview}>{item.overview}</Text>
            </View>
        </TouchableOpacity>

    );

    return ( // Tela de busca de filmes
        <View style={{ flex: 1, padding: 12 }}>
            <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                <TextInput
                    placeholder="Digite o nome do filme..."
                    value={query}
                    onChangeText={setQuery}
                    style={styles.input}
                    onSubmitEditing={() => handleBuscar()}
                    returnKeyType="search"
                />
                <Button title="Buscar" onPress={handleBuscar} />
            </View>

            {loading && <ActivityIndicator size="large" />}

            {error && <Text style={{ color: 'red' }}>{error}</Text>}

            {!loading && hasSearched && resultados.length === 0 && <Text>Nenhum resultado — tente outra busca.</Text>}

            <FlatList
                data={resultados}
                keyExtractor={(i) => String(i.id)}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: { flex: 1, borderWidth: 1, borderRadius: 6, paddingHorizontal: 10, marginRight: 8, height: 42 },
    item: { flexDirection: 'row' },
    poster: { width: 100, height: 150, borderRadius: 6 },
    noPoster: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd' },
    info: { flex: 1, paddingLeft: 10 },
    title: { fontWeight: 'bold', fontSize: 16 },
    date: { color: '#666', marginBottom: 6 },
    overview: { color: '#333' }
});