import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import Imagem from "./foto2.jpg";

interface Item {
  id: string;
  imageUrl: any;
}

const data: Item[] = [
  { id: "1", imageUrl: require("./foto2.jpg") },
  { id: "2", imageUrl: require("./foto2.jpg") },
  { id: "3", imageUrl: require("./foto2.jpg") },
  { id: "4", imageUrl: require("./foto2.jpg") },
  { id: "5", imageUrl: require("./foto2.jpg") },
  { id: "6", imageUrl: require("./foto2.jpg") },
  { id: "7", imageUrl: require("./foto2.jpg") },
  { id: "8", imageUrl: require("./foto2.jpg") },
  { id: "9", imageUrl: require("./foto2.jpg") },
  { id: "10", imageUrl: require("./foto2.jpg") },
  { id: "11", imageUrl: require("./foto2.jpg") },
  { id: "12", imageUrl: require("./foto2.jpg") },
  { id: "13", imageUrl: require("./foto2.jpg") },
  { id: "14", imageUrl: require("./foto2.jpg") },
  { id: "15", imageUrl: require("./foto2.jpg") },
  { id: "16", imageUrl: require("./foto2.jpg") },
  { id: "17", imageUrl: require("./foto2.jpg") },
  { id: "18", imageUrl: require("./foto2.jpg") },
];

const renderItem = ({ item }: { item: Item }) => (
  <View style={styles.itemContainer}>
    <Image source={item.imageUrl} style={styles.image} />
  </View>
);

const Pagina3 = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollIndicatorStyle="#f80404"
        scrollIndicatorInsets={{ right: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    backgroundColor: "#3a3a3a",
  },
  image: {
    width: "100%",
    height: 100,
  },
});

export default Pagina3;
