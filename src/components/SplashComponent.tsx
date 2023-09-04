import { Text, View, StyleSheet, Image } from "react-native";

export default function SplashComponent() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./splash.gif")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    height: "100%",
    width: "100%",
  },
});
