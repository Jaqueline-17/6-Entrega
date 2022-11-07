import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import Rodape from "../Components/Rodape";
import Section from "../Components/Section";
import Titulo from "../Components/Titulo";


export default function Home() {
    return (
        <ScrollView>
            <Titulo />
            <View style={styles.container}>
                <Image source={require('../Imagens/salvadorimg.jpg')}
                    style={{ width: 450, height: 290 }} />
                <Text style={styles.slogan}>Descubra sua Próxima Viagem</Text>
            </View>
            <Section texto="Temos uma variedade de destinos e condições impredíveis para que você possa viajar tranquilo." />
            <View style={styles.container}>
                <Image source={require('../Imagens/maldivas-img.jpg')}
                    style={{ width: 450, height: 290 }} />
                <Text style={styles.slogan}>Cuidamos de tudo pra Você!</Text>
            </View>
            <Section texto="Confira os nossos pacotes especiais que incluem hospedagem, passeios, guias e transporte."/>
            <View style={styles.container}>
                <Image source={require('../Imagens/curitiba.jpg')}
                    style={{ width: 450, height: 290}} />
                <Text style={styles.slogan}>Atendimento Personalizado!</Text>
            </View>
            <Section texto="Para um Atendimento Personalizado, visite uma de nossas filiais e converse com nossos corretores."/>
            <View style={styles.container}>
                <Image source={require('../Imagens/lisboaimg.jpg')}
                    style={{ width: 450, height: 290 }} />
                <Text style={styles.slogan}>Conheça o Mundo através da Bússola Tour!</Text>
            </View>
            <Rodape/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    slogan: {
        textAlign: 'center',
        position: 'absolute',
        color: '#f5f5f5',
        textShadowRadius: 30,
        textShadowColor: '#080707',
        fontSize: 40
    },
    container: {
        justifyContent: 'center',
       alignItems: 'center'
    },
});