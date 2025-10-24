// services/api.js

import axios from "axios";

const API_BASE_URL = "http://localhost:4000"; // Ajuste para o IP correto no dispositivo real

// Cria uma instância do Axios com a URL base configurada
const api = axios.create({
    baseURL: API_BASE_URL,
});

/**
 * Realiza o login do usuário.
 *
 * @param {string} username - Nome de usuário.
 * @param {string} password - Senha do usuário.
 * @returns {Promise<Object>} Dados de resposta contendo o token.
 */
export const login = async (username, password) => {
    console.log("Iniciando login para o usuário:", username);
    const response = await api.post("/users/login", { username, password });
    console.log("Resposta do login:", response.data);
    return response.data; // Retorna o token
};

/**
 * Registra um novo usuário.
 *
 * @param {string} username - Nome de usuário desejado.
 * @param {string} password - Senha desejada.
 * @returns {Promise<Object>} Dados de resposta contendo a mensagem de sucesso.
 */
export const register = async (username, password) => {
    console.log("Iniciando registro para o usuário:", username);
    const response = await api.post("/users/register", { username, password });
    console.log("Resposta do registro:", response.data);
    return response.data; // Retorna mensagem de sucesso
};

/**
 * Obtém a lista de itens do usuário autenticado.
 *
 * @param {string} token - Token de autenticação do usuário.
 * @returns {Promise<Array>} Lista de itens.
 */
export const getItems = async (token) => {
    console.log("Obtendo itens com o token:", token);
    const response = await api.get("/items", {
        headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Itens obtidos:", response.data);
    return response.data;
};

/**
 * Obtém um item específico pelo ID.
 *
 * @param {number} id - ID do item.
 * @param {string} token - Token de autenticação do usuário.
 * @returns {Promise<Object>} Dados do item.
 */
export const getItemById = async (id, token) => {
    console.log(`Obtendo item com ID: ${id} e token: ${token}`);
    const response = await api.get(`/items/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Item obtido:", response.data);
    return response.data;
};

/**
 * Cria um novo item.
 *
 * @param {string} name - Nome do novo item.
 * @param {string} token - Token de autenticação do usuário.
 * @returns {Promise<Object>} Dados do item criado.
 */
export const createItem = async (name, token) => {
    console.log("Criando item com nome:", name);
    const response = await api.post(
        "/items",
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log("Item criado:", response.data);
    return response.data;
};

/**
 * Atualiza um item existente.
 *
 * @param {number} id - ID do item a ser atualizado.
 * @param {string} name - Novo nome do item.
 * @param {string} token - Token de autenticação do usuário.
 * @returns {Promise<Object>} Dados do item atualizado.
 */
export const updateItem = async (id, name, token) => {
    console.log(`Atualizando item com ID: ${id} para o novo nome: ${name}`);
    const response = await api.put(
        `/items/${id}`,
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log("Item atualizado:", response.data);
    return response.data;
};

/**
 * Deleta um item.
 *
 * @param {number} id - ID do item a ser deletado.
 * @param {string} token - Token de autenticação do usuário.
 * @returns {Promise<Object>} Mensagem de sucesso.
 */
export const deleteItem = async (id, token) => {
    console.log(`Deletando item com ID: ${id}`);
    const response = await api.delete(`/items/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Item deletado:", response.data);
    return response.data;
};

export default api;
