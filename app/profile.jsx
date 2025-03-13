import { View, Text, StyleSheet, Image } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
    <Image source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_890101-MLU78313935489_082024-O.webp' }} style={styles.image} />
      <Text style={styles.title}>Seu Perfil</Text>
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
    height: 300,
    marginTop: 40,
    borderRadius: 500,
},
});