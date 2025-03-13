import { View, Text, StyleSheet, Image } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.newsCard}>
                <Image source={{ uri: 'https://tm.ibxk.com.br/2025/02/27/27140826312002.jpg' }} style={styles.image} />
                <Text style={styles.title}>Trailer de Shrek 5 é revelado e causa polêmica</Text>
            </View>
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
        width: 300,
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 40,
        borderRadius: 10,
    },
    newsCard: {
        width: 400,
        display: 'flex',
        height: 500,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderRadius: 20,
        backgroundColor: '#DDDDDD'
    },
});