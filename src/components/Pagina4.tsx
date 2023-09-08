import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Pagina4 = () => {
  const [texto, setTexto] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputChange = (text) => {
    setTexto(text);
  };

  const abrirModal = () => {
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };

  const Confirmar = () => {
    console.log("Usuário clicou em Sim");
    setModalVisible(false);
  };
  const Negar = () => {
    console.log("Usuário clicou em Nao");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite o nome do Produto:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={texto}
      />
      <Button title="Abrir Modal" onPress={abrirModal} />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Texto digitado:</Text>
            <Text style={styles.digitado}>{texto}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={Confirmar}
                style={[styles.modalButton, styles.confirmButton]}
              >
                <Text style={styles.buttonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={Negar}
                style={[styles.modalButton, styles.cancelButton]}
              >
                <Text style={styles.buttonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  digitado: {
    color: "#f44",
    fontSize: 15,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "45%",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  confirmButton: {
    backgroundColor: "green",
  },
  cancelButton: {
    backgroundColor: "red",
  },
});

export default Pagina4;
