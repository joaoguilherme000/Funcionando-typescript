import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Styles from "./Styles";

const handleInputChange = (text: string) => {
    setTexto(text);
  };

const [texto, setTexto] = useState<string>("");

export default function Preco () {

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Digite o Preço</Text>
            <TextInput
              style={Styles.texto}
              onChangeText={handleInputChange}
              value={texto}
            />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flex: 1,
    backgroundColor: '#ffffff',
    width: '100%',
  },

});
