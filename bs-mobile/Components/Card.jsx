import { View, StyleSheet, Button, Text } from "react-native";

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.botao}>
                <Text style={styles.fonte}>{props.pacote}</Text>
                <Text style={styles.fonte}>R$ {props.preco}</Text>
            <Button title="Comprar"color='#2681c7'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#ffff',
        width: 250,
        height: 150
    },
    botao: {
       margin: 40
    },
    fonte: {
        fontSize: 20,
        marginBottom: 9
     },
});