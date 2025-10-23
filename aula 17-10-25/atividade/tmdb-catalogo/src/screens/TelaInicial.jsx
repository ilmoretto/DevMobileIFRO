import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity,
  ActivityIndicator, StyleSheet, ScrollView, Dimensions
} from 'react-native';
import { filmesPorCategoria, posterUrl } from '../services/api/tmdbApi';


// calcula dimensões relativas para os cards do carrossel
const { width: SCREEN_W } = Dimensions.get('window');
const CARD_W = Math.round(SCREEN_W * 0.34);
const CARD_H = Math.round(CARD_W * 1.5);

// lista de categorias que serão exibidas na Home (key = endpoint do TMDb)
const CATEGORIES = [
  { key: 'popular', label: 'Em Alta' },
  { key: 'now_playing', label: 'Em Cartaz' },
  { key: 'top_rated', label: 'Mais Bem Avaliados' },
  { key: 'upcoming', label: 'Próximos Lançamentos' },
];

export default function TelaInicial({ navigation }) {
  const [dataMap, setDataMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ao montar o componente, carrega todas as categorias (uma vez)
  useEffect(() => {
    carregarCategorias();
  }, []);

  const carregarCategorias = async () => {
    setLoading(true);
    try {
      const promises = CATEGORIES.map(cat => filmesPorCategoria(cat.key, 1)
        .then(res => ({ key: cat.key, results: res.results || [] }))
        .catch(err => {
          // trata o erro específico da categoria, retornando um array vazio
          console.error('erro categoria', cat.key, err);
          return { key: cat.key, results: [] };

        })

      );
      // aguarda todas as requests terminarem
      const results = await Promise.all(promises);
      // transforma o array [{key, results}, ...] em um objeto { key: results, ... }
      const map = {};
      results.forEach(r => (map[r.key] = r.results));
      console.log('Dados carregados:', map); // Debug: verificar dados
      setDataMap(map);
    } finally {
      setLoading(false);
    }
  };

  // visualização 

  const renderCard = (item) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        console.log('Item clicado:', item); // Debug: verificar item
        if (item?.id) {
          navigation.navigate('Detalhes', { idFilme: item.id });
        } else {
          console.warn('Item sem ID:', item);
        }
      }}
      accessibilityRole="button"
      accessibilityLabel={`Abrir detalhes de ${item.title}`}
    >
      {item.poster_path ? (
        <Image
          source={{ uri: posterUrl(item.poster_path, 'w342') }}
          style={styles.image}
        // importante ter um tamanho fixo para evitar reflow enquanto carrega
        />
      ) : (
        // fallback visual quando não há poster
        <View style={[styles.image, styles.noPoster]}>
          <Text>Sem poster</Text>
        </View>
      )}
      <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  // mostra indicador enquanto carrega as categorias
  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    // Scroll vertical que contém múltiplos carrosséis horizontais
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingVertical: 12 }}>
      {CATEGORIES.map(cat => {
        // pega os items carregados (ou array vazio como fallback)
        const items = dataMap[cat.key] || [];
        return (
          <View key={cat.key} style={{ marginBottom: 20 }}>
            {/* Cabeçalho da categoria */}
            <Text style={styles.header}>{cat.label}</Text>

            {/* FlatList horizontal para comportamento de carrossel leve */}
            <FlatList
              data={items}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(i) => String(i.id)} // chave única por item
              renderItem={({ item }) => renderCard(item)}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              contentContainerStyle={{ paddingHorizontal: 12 }}
            // Observação: se a lista estiver muito grande considere usar initialNumToRender e getItemLayout
            />
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  header: { fontSize: 18, fontWeight: '700', paddingHorizontal: 12, marginBottom: 8, color: "#fff" },
  card: { width: CARD_W, marginRight: 8 },
  image: { width: CARD_W, height: CARD_H, borderRadius: 8, marginBottom: 6 },
  noPoster: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#202020ff' },
  title: { fontWeight: '600', color: '#fff' }
});