import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, TextInput, Image } from "react-native";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await res.json();
        setPokemons(
          data.results.map((p) => {
            const id = p.url.split("/").filter(Boolean).pop();
            return { id, name: p.name, image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` };
          })
        );
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const dataFiltered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Buscar Pokémon"
        value={query}
        onChangeText={setQuery}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
      />
      <FlatList
        data={dataFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50, marginRight: 8 }} />
            <Text>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhum Pokémon encontrado</Text>}
      />
    </View>
  );
}
