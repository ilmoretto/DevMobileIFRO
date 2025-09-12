import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    padding: 16,
    backgroundColor: "#F2F2F7",
    margin: 12,
    borderRadius: 12
  },
  texto: {
    fontSize: 16,
    color: "#111111"
  },
  input: {
    borderWidth: 1,
    borderColor: "#C7C7CC",
    padding: 12,
    borderRadius: 10,
    width: "100%",
    marginBottom: 12
  },
  imagem: {
    width: 128,
    height: 128,
    borderRadius: 8,
    resizeMode: "cover",
    margin: 12
  },
  touchable: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8
  },
  touchableText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16
  },
  itemContainer: {
    flexDirection: "row",     // alinha texto e botões na mesma linha
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginVertical: 4,
    backgroundColor: "#F2F2F7",
    borderRadius: 10
  },
  removeButton: {
    backgroundColor: "#FF3B30", // vermelho para remover
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginLeft: 8
  },
  editButton: {
    backgroundColor: "#007AFF", // azul para editar
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginLeft: 8
  },
  item: {
    padding: 14
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E5EA",
    marginLeft: 14
  },
  loader: {
    marginTop: 20
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16
  },
  modalCard: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20
  },
  modalText: {
    fontSize: 16,
    color: "#111111",
    marginBottom: 12
  },
  scrollContent: {
    padding: 16
  },
  filtro: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,

  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center"
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16
  },
  emptyText: {
    textAlign: "center",
    color: "#8E8E93",
    fontSize: 16,
    marginTop: 20
  } 
});
