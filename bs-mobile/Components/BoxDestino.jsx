import { View, Text, StyleSheet} from "react-native";


export default function BoxDestino(props) {
    return (
        <View style={styles.box}>
            <Text style={styles.cidade}>{props.cidade}</Text>
            <Text style={styles.descricao}>{props.descricao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
   box: {
    backgroundColor: '#ffff',
    padding: 10,
    width: 366
   },
   cidade: {
    fontSize: 25,
    marginLeft: 20,
    marginBottom: 5
   },
   descricao: {
    marginLeft: 5,
    textAlign: 'justify'
   }
});