import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Styles from "../view/Styles";

interface ConfigProps {
  onOrdenarPorChange: (value: string) => void;
}

export default function Config({ onOrdenarPorChange }: ConfigProps) {
  const [ordenarPor, setOrdenarPor] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const opcoesOrdenarPor: string[] = ['Mais Barato', 'Mais Caro', 'Z - A', 'A - Z'];

  const handleOrdenarPorChange = (value: string) => {
    setOrdenarPor(value);
    onOrdenarPorChange(value);
    setIsModalVisible(false); // Feche o modal após a seleção
  };

  return (
    <View style={{ margin: 5, flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={Styles.buttonConfig}
      >
        <Text style={Styles.config}>Ordenar Por</Text>
      </TouchableOpacity>

      <View style={Styles.ordenado}>
        <Text style={{ fontSize: 15, alignSelf: 'flex-end' }}>{ordenarPor}</Text>
      </View>

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {opcoesOrdenarPor.map((opcao, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => [handleOrdenarPorChange(opcao), setIsModalVisible(false)]}
                
              >
                <Text style={styles.modalOption}>{opcao}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
  modalOption: {
    fontSize: 18,
    padding: 10,
  },
  modalCloseButton: {
    marginTop: 10,
    padding: 10,
  },
  modalCloseButtonText: {
    fontSize: 18,
    color: 'blue', // Cor do botão "Fechar"
  },
});
