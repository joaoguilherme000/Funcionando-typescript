import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Styles from '../view/Styles';

export default function Config({ onOrdenarPorChange }) {
  const [ordenarPor, setOrdenarPor] = useState('Mais Barato');
  const opcoesOrdenarPor = ['Mais Barato', 'Mais Caro', 'Nome'];

  const handleOrdenarPorChange = (index, value) => {
    setOrdenarPor(value);
    onOrdenarPorChange(value); // Chame a função fornecida com a opção selecionada
  };

  return (
    <View style={{ margin: 5, flexDirection: 'row' }}>
      <ModalDropdown
        options={opcoesOrdenarPor}
        defaultValue="Ordenar Por"
        onSelect={handleOrdenarPorChange}
        style={Styles.buttonConfig}
        textStyle={Styles.config}
      />
      <View style={Styles.ordenado}>
        <Text style={{ fontSize: 15, alignSelf: 'flex-end' }}>{ordenarPor}</Text>
      </View>
    </View>
  );
}
