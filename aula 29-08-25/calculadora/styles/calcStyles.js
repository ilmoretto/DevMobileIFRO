import { StyleSheet } from "react-native";

const calcStyles = StyleSheet.create({
  estrutura: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#e4e3e3ff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    width: "80%",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",

  },
  
  resultado: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default calcStyles;
