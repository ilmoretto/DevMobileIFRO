import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { detalhesFilmes, posterUrl } from '../api/tmdb';

export default function TelaDetalhes({ route, navigation }) {
  // route.params é a forma correta de acessar parâmetros passados na navegação
  const { idFilme } = route.params || {};
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // IIFE async para buscar detalhes
    (async () => {
      try {
        setLoading(true);
        const data = await detalhesFilmes(idFilme);
        setFilme(data);
      } catch (e) {
        console.error(e);
        setError('Erro ao carregar detalhes.');
      } finally {
        setLoading(false);
      }
    })();
  }, [idFilme]);

  // Renderização condicional com base no estado de carregamento e erro
  if (loading) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
  if (error) return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 12 }}>
      <Text style={{ color: 'red' }}>{error}</Text>
    </View>
  );
  if (!filme) return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 12 }}>
      <Text>Nenhum detalhe disponível.</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* ScrollView ocupa o espaço do SafeAreaView. Não usamos flexGrow no contentContainerStyle
          para deixar o ScrollView medir o conteúdo real e ativar a rolagem quando necessário. */}
      <ScrollView
        style={{ flex: 1 }}
        // paddingBottom evita que o último item fique cortado
        contentContainerStyle={{ padding: 12, paddingBottom: 24 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator
      >
        {/* Poster e cabeçalho */}
        <View>
          {filme.poster_path && (
            <Image source={{ uri: posterUrl(filme.poster_path, 'w780') }} style={styles.poster} />
          )}

          <Text style={styles.title}>{filme.title}</Text>
          <Text style={styles.sub}>{filme.release_date} • {filme.runtime} min</Text>
          <Text style={styles.sub}>⭐ {filme.vote_average} ({filme.vote_count} votos)</Text>
        </View>

        {/* Sinopse */}
        <View>
          <Text style={styles.overview}>{filme.overview}</Text>
        </View>

        {/* Elenco */}
        <View>
          <Text style={styles.sectionTitle}>Elenco</Text>
          {filme.credits && filme.credits.cast.slice(0, 10).map((actor) => (
            <Text key={actor.id} style={styles.actor}>{actor.name} como {actor.character}</Text>
          ))}
        </View>

        {/* Trailers */}
        <View>
          <Text style={styles.sectionTitle}>Trailers</Text>
          {filme.videos && filme.videos.results.length > 0 ? (
            filme.videos.results.slice(0, 3).map((video) => (
              <Text key={video.id} style={styles.trailer}>{video.name} - https://www.youtube.com/watch?v={video.key}</Text>
            ))
          ) : (
            <Text>Nenhum trailer disponível.</Text>
          )}
        </View>

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  poster: {
    width: '100%',
    height: 450,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sub: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  overview: {
    fontSize: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  actor: {
    fontSize: 16,
    marginBottom: 4,
  },
  trailer: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 4,
  },
});
