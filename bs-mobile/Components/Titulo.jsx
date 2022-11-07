import { StyleSheet, View, Text, Image } from "react-native";


export default function Titulo() {
    return (
        <View style={styles.banner}>
            <Image source={require('../Imagens/bussola_logo.png')}
               style={{width: 40, height: 50, marginTop: 20, marginRight: 6}} />
            <Text style={styles.titulo}>Bussola Tour</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        flexDirection: "row",
        width: 410,
        height: 100,
        backgroundColor: '#42b6f5',
        alignItems: 'center',
        justifyContent: 'center',

    },
    titulo: {
        marginTop: 20,
        color: "#ffff",
        fontSize: 25
    },
});