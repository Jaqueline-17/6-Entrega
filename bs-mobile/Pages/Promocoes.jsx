import { View, StyleSheet, Text, Image, ScrollView  } from "react-native";
import Subtitulo from "../Components/Subtitulo";
import Titulo from "../Components/Titulo";
import Card from "../Components/Card";
import Rodape from "../Components/Rodape";


export default function Promocoes() {
    return (
        <ScrollView>
            <Titulo />
            <Subtitulo nome="Promoções" />
            <Text style={styles.categoria}>Pacotes Standart</Text>

            <View style={styles.container}>
                <Image source={require('../Imagens/saopauloimg.jpg')}
                    style={{ width: 250, height: 150 }} />
                <Card pacote="Standart Basic" preco="895,00" />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/aracajuimg.jpg')}
                    style={{ width: 250, height: 150 }} />
                <Card pacote="Standart Basic II " preco="910,00" />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/portoalegreimg.jpg')}
                    style={{ width: 250, height: 150 }} />
                <Card pacote="Standart Confort" preco="930,00" />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/curitiba.jpg')}
                    style={{ width: 250, height: 150 }} />
                <Card pacote="Standart Confort Max" preco="950,00" />
            </View>

            <Text style={styles.categoria}>Pacotes VIP</Text>

            <View style={styles.container}>
                <Image source={require('../Imagens/ibizaimg.jpg')}
                    style={{ width: 250, height: 150 }} />
                <Card pacote="VIP I" preco="1.200,00" />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/lisboaimg.jpg')}
                    style={{ width: 250, height: 150 }} />
                <Card pacote="VIP II" preco="1.400,00" />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/rioimg.jpg')}
                    style={{ width: 250, height: 150 }} />
                <Card pacote="VIP III" preco="1.450,00" />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/salvadorimg.jpg')}
                    style={{ width: 250, height: 150 }} />
                <Card pacote="VIP IV" preco="1.600,00" />
            </View>

            <Text style={styles.categoria}>Pacotes Lux</Text>

            <View style={styles.container}>
                <Image source={require('../Imagens/dublinimg.jpg')}
                    style={{ width: 250, height: 150 }} />
                <Card pacote="VIP I" preco="1.200,00" />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/el_salvadorimg.jpg')}
                    style={{ width: 250, height: 150 }} />
                <Card pacote="VIP II" preco="1.400,00" />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/orlandoimg.png')}
                    style={{ width: 250, height: 150 }} />
                <Card pacote="VIP III" preco="1.450,00" />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/roma-img.jpg')}
                    style={{ width: 250, height: 150 }} />
                <Card pacote="VIP IV" preco="1.600,00" />
            </View>
            <Rodape/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    categoria: {
        color: '#5e6360',
        justifyContent: 'center',
        marginLeft: 20,
        margin: 25,
        fontSize: 20
    },
    container: {
        alignSelf: 'center',
        marginVertical: 15,
    }
});