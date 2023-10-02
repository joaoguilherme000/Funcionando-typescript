import React, { useState } from 'react';
import { View, Text,} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Styles from '../view/Styles';

interface ConfigProps {
  onOrdenarPorChange: (value: string) => void;
}

export default function Config({ onOrdenarPorChange }: ConfigProps ) {
  const [ordenarPor, setOrdenarPor] = useState<string>('Mais Barato');
  const opcoesOrdenarPor: string[] = ['Mais Barato', 'Mais Caro', 'Z - A', 'A - Z'];

  const handleOrdenarPorChange = (index: number, value: string) => {
    setOrdenarPor(value);
    onOrdenarPorChange(value); // Chame a função fornecida com a opção selecionada
  };

  return (
    <View style={{ margin: 5, flexDirection: 'row' }}>
      <ModalDropdown
        options={opcoesOrdenarPor}
        defaultValue='Ordenar Por'
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
