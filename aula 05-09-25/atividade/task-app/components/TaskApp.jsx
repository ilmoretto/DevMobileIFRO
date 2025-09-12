import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import ButtonComponent from "./ButtonComponent";
import FlatListComponent from "./FlatListComponent";
import TextInputComponent from "./TextInputComponent";
import TouchableOpacityComponent from "./TouchableOpacityComponent";
import ModalComponent from "./ModalComponent";

function TaskApp() {
  // states
  const [tarefas, setTarefas] = useState([]);
  const [textoInput, setTextoInput] = useState("");
  const [filtro, setfiltro] = useState("todas");
  const [modalVisivel, setModalVisivel] = useState(false);
  const [editandoTarefa, setEditandoTarefa] = useState(null);
  const [novoTextoInput, setNovoTextoInput] = useState("");

  // actions - tarefas
  const adicionarTarefa = () => {
    if (textoInput.trim() === "") {
      return;
    }

    const novaTarefa = {
      id: Math.random().toString(),
      nome: textoInput,
      concluida: false
    };

    setTarefas([...tarefas, novaTarefa]);
    setTextoInput("");
  };

  const removerTarefa = (idRemover) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== idRemover));
  };

  const toggleTaskConcluida = (idConcluida) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === idConcluida
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };

  // actions - modal
  const abrirModalEdicao = (tarefaSelecionada) => {
    setEditandoTarefa(tarefaSelecionada);
    setNovoTextoInput(tarefaSelecionada.nome);
    setModalVisivel(true);
  };

  const salvarEdicao = () => {
    if (novoTextoInput.trim() === "") return;

    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === editandoTarefa.id
          ? { ...tarefa, nome: novoTextoInput }
          : tarefa
      )
    );
    setModalVisivel(false);
    setEditandoTarefa(null);
    setNovoTextoInput("");
  };

  // filtro
  let listaFiltrada;
  if (filtro === "concluidas") {
    listaFiltrada = tarefas.filter((tarefa) => tarefa.concluida);
  } else if (filtro === "pendentes") {
    listaFiltrada = tarefas.filter((tarefa) => !tarefa.concluida);
  } else {
    listaFiltrada = tarefas;
  }

  return (
    <View style={styles.container}>
      <TextInputComponent
        placeholder="Nova tarefa"
        value={textoInput}
        onChangeText={setTextoInput}
      />
      <ButtonComponent title="Adicionar Tarefa" onPress={adicionarTarefa} />

      {/* Filtros */}
      <View style={styles.filtro}>
        <TouchableOpacityComponent title="Todas" onPress={() => setFiltro("todas")} />
        <TouchableOpacityComponent title="Pendentes" onPress={() => setFiltro("pendentes")} />
        <TouchableOpacityComponent title="Concluídas" onPress={() => setFiltro("concluidas")} />
      </View>

      {/* Lista de tarefas */}
      <FlatListComponent
        data={listaFiltrada}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>

            <Text
              style={{
                textDecorationLine: item.concluida ? "line-through" : "none",
              }}
            >
              {item.nome}
            </Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacityComponent
                style={styles.editButton}
                title="Editar"
                onPress={() => abrirModalEdicao(item)}
              />
              <TouchableOpacityComponent
                style={styles.removeButton}
                title="Remover"
                onPress={() => removerTarefa(item.id)}
              />
            </View>
          </View>
        )}
      />

      {/* Modal de edição */}
      <ModalComponent
        visible={modalVisivel}
        onClose={() => setModalVisivel(false)}
      >
        <Text style={styles.modalText}>Editar tarefa</Text>
        <TextInput
          value={novoTextoInput}
          onChangeText={setNovoTextoInput}
          style={styles.input}
        />
        <ButtonComponent title="Salvar" onPress={salvarEdicao} />
      </ModalComponent>
    </View>
  );
}

export default TaskApp;
