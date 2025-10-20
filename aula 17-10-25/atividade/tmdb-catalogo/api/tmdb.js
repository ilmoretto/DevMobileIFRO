import axios from "axios";
import Constants from 'expo-constants';

// pega a chave da API do TMDB a partir do app.json
const API_KEY = Constants.expoConfig.extra.tmdbApiKey;


if (!API_KEY) { // verifica se a chave da API está definida
    console.warn("A chave da API do TMDB não está definida. Verifique o app.json.");
}

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p"; // Base URL para imagens (prefixo sem size)

// cria uma instância do axios com a configuração base
const tmdbClient = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: "pt-BR"
    }
})

// funcao para buscar filmes
export const buscarFilmes = async (query, page = 1) => {
    try {
        if (!query) return { results: [], total_pages: 0 }; // retorna vazio se a query for vazia
        const res = await tmdbClient.get("/search/movie", {
            params: { query, page }
        }); // faz a requisição para buscar filmes
        return res.data;  // retorna os dados da resposta

    } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        return { results: [], total_pages: 0 }; // retorna vazio em caso de erro
    }
}

// funcao para buscar detalhes do filme
export const detalhesFilmes = async (idFilme) => {
    try {
        const res = await tmdbClient.get(`/movie/${idFilme}`, {
            params: { append_to_response: 'videos,credits' } // adiciona videos e elenco na resposta

        }); // faz a requisição para buscar detalhes do filme
        return res.data; // retorna os dados da resposta

    } catch (error) {
        console.error("Erro ao buscar detalhes do filme:", error);
        return null;
    }
}

// funcao para agrupar os filmes por categoria
export const filmesPorCategoria = async(categoria = 'popular', page = 1) =>{
    const res = await tmdbClient.get(`/movie/${categoria}`, {params: {page}});
    return res.data;
}

// funcao para construir a URL da imagem do poster
export const posterUrl = (path, size = "w500") => {
    if (!path) return null; // verifica se o path está definido
    // path normalmente já começa com '/', por isso concatenamos diretamente
    return `${IMAGE_BASE_URL}/${size}${path}`;
}
