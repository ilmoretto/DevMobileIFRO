import { StyleSheet } from 'react-native';

// Cores do IFRO
const COLORS = {
  // Verde IFRO (principal)
  primary: '#00A859',
  primaryDark: '#008A47', 
  primaryLight: '#33B972',
  
  // Laranja IFRO (secundário)
  secondary: '#FF6600',
  secondaryDark: '#E55A00',
  secondaryLight: '#FF8533',
  
  // Cores neutras
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  gray: '#DDDDDD',
  darkGray: '#666666',
  black: '#333333',
  
  // Cores de status
  error: '#E53E3E',
  success: '#38A169',
  warning: '#DD6B20',
};

export const globalStyles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  
  // Container com scroll
  scrollView: {
    flex: 1,
  },
  
  scrollContent: {
    padding: 20,
    paddingTop: 50,
  },
  
  // Títulos
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: COLORS.primary,
  },
  
  // Inputs
  inputContainer: {
    marginBottom: 15,
  },
  
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: COLORS.white,
  },
  
  inputError: {
    borderColor: COLORS.error,
  },
  
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  
  // Botões
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  
  buttonSecondary: {
    backgroundColor: COLORS.secondary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  // Texto de erro
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
});

export { COLORS };