import { Text, View, StyleSheet } from "react-native";

export default function Subtitulo(props) {
    return (
        <View>
            <Text style={styles.subtitulo}>{props.nome}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subtitulo: {
        color: '#42b6f5',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 35,
    },
});