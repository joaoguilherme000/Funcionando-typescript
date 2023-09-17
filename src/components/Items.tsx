import React, { useState, useEffect } from "react";
import { Text, FlatList, Image, View } from "react-native";
import Styles from "./Styles";
import ImageProduto from "./ImageProduto";

export default function Items () {
    interface Produto {
        id: string;
        nome: string;
        preço: number;
        }

    const [data, setData] = useState<Produto[]>([
        { id: "1", nome: "Coca Cola", preço: 25 },
        { id: "2", nome: "Pepsi", preço: 20 },
        { id: "3", nome: "Guarana", preço: 15 },
        { id: "4", nome: "Cerveja", preço: 30 },
        { id: "5", nome: "Vodka", preço: 8 },
        // Adicione outros
    ]);

    const gerarNomeAleatorio = () => {
        const letras = "abcdefghijklmnopqrstuvwxyz";
        let nomeAleatorio = "";
        const comprimento = Math.floor(Math.random() * 7) + 5; // Entre 5 e 15 caracteres
        for (let i = 0; i < comprimento; i++) {
          nomeAleatorio += letras.charAt(Math.floor(Math.random() * letras.length));
        }
        return nomeAleatorio;
      };

    useEffect(() => {
        const interval = setInterval(() => {
            const newData = [...data]; // essa ...data cria uma copia do array
            newData.forEach((item) => {
                item.nome = gerarNomeAleatorio();
                item.preço = +(Math.random() * 100).toFixed(2);
              }); // coloquei para limitar a 2 caracters
            setData(newData);
        }, 1000);

        return () => clearInterval(interval);
    }, [data]);

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
                let itemStyle = [Styles.horizontal]; // Estilo padrão para todos os itens

                // estilo do primeiro item
                if (index === 0) {
                itemStyle.push(Styles.principal);
                }

                // estilo do último item
                if (index === data.length - 1) {
                itemStyle.push(Styles.vermelho);
                }

            return (
            <View style={itemStyle}>
                <ImageProduto />
                <View style={Styles.informacao}>
                    <Text style={Styles.text}>PRODUTO: {item.nome}</Text>
                    <Text style={Styles.text}>PREÇO: R$ {item.preço}</Text>
                </View>
            </View>
            );
        }}
        />

    );
}