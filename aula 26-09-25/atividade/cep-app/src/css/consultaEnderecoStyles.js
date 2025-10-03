import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Container principal da tela
    container: {
    flex: 1,
    margin: 16,
    marginTop: 50, 
  },
  // Container do input e botão de busca
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  // Estilo do campo de texto
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 8,
    marginRight: 8,
  },
  // Estilo do botão
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  // Estilo do texto do botão
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // Estilo do texto de erro
  errorText: {
    color: 'red',
    marginBottom: 16,
  },
  // Estilo de cada item do endereço na lista
  endercoItem: {
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#0b19ddff',
    borderRadius: 4,
  },
  // Estilo do cabeçalho da lista
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default styles;