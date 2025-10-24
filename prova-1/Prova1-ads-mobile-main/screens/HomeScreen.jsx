// HomeScreen.jsx
import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import ItemList from "../components/ItemList";
import { getItems, createItem, updateItem, deleteItem } from "../services/api";

/**
 * Componente principal que exibe a lista de itens e permite operações de CRUD.
 *
 * @component
 * @param {Object} props - Propriedades do componente.
 * @param {Object} props.route - Objeto de rota contendo parâmetros.
 * @param {Object} props.navigation - Objeto de navegação para transição entre telas.
 * @returns {JSX.Element}
 */
export default function HomeScreen({ route, navigation }) {
    console.log("Renderizando HomeScreen");
    const { token } = route.params;
    const [items, setItems] = useState([]);
    const [newItemName, setNewItemName] = useState("");
    const [editingItem, setEditingItem] = useState(null);

    useEffect(() => {
        //return null;
        const fetchItems = async () => {
            try {
                const data = await getItems(token);
                setItems(data);
            } catch (error) {
                console.error("Erro ao carregar itens:", error);
                Alert.alert("Erro", "Não foi possível carregar os itens.");
            }
        };
        fetchItems().then(r => r);
    }, [token]);

    const handleCreateItem = useCallback(async () => {
        if (!newItemName.trim()) {
            Alert.alert("Atenção", "O nome do item não pode ser vazio.");
            return;
        }
        try {
            const newItem = await createItem(newItemName.trim(), token);
            setItems((prev) => [...prev, newItem]);
            setNewItemName("");
        } catch (error) {
            console.error("Erro ao criar item:", error);
            Alert.alert("Erro", "Não foi possível criar o item.");
        }
    }, [newItemName, token]);

    const handleUpdateItem = useCallback(async () => {
        if (!editingItem || !newItemName.trim()) {
            Alert.alert("Atenção", "O nome do item não pode ser vazio.");
            return;
        }
        try {
            const updatedItem = await updateItem(editingItem.id, newItemName.trim(), token);
            setItems((prev) =>
                prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
            );
            setEditingItem(null);
            setNewItemName("");
        } catch (error) {
            console.error("Erro ao atualizar item:", error);
            Alert.alert("Erro", "Não foi possível atualizar o item.");
        }
    }, [editingItem, newItemName, token]);

    const handleDeleteItem = useCallback(async (id) => {
        try {
            await deleteItem(id, token);
            setItems((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Erro ao excluir item:", error);
            Alert.alert("Erro", "Não foi possível excluir o item.");
        }
    }, [token]);

    const handleEditItem = (item) => {
        setEditingItem(item);
        setNewItemName(item.name);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Itens</Text>
            <ItemList items={items} onEdit={handleEditItem} onDelete={handleDeleteItem} />
            <TextInput
                style={styles.input}
                placeholder="Nome do item"
                value={newItemName}
                onChangeText={setNewItemName}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={editingItem ? handleUpdateItem : handleCreateItem}
            >
                <Text style={styles.buttonText}>
                    {editingItem ? "Atualizar Item" : "Criar Item"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.logoutButton]}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F5F5F5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    input: {
        height: 50,
        borderColor: "#DDD",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: "#FFF",
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#6200EE",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    logoutButton: {
        backgroundColor: "#B00020",
    },
});
