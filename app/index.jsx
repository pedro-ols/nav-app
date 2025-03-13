import { View, Text, StyleSheet, Image } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
        <Image source={{ uri: 'https://i.pinimg.com/originals/83/92/dd/8392dd8ea691a94c6e8a3d66e33f9004.png' }} style={styles.image} />
      <Text style={styles.title}>Bem-vindo à Página Inicial!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 250,
    marginTop: 40,
    borderRadius: 10,
},
});