//import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import BoxDestino from "../Components/BoxDestino";
import Rodape from "../Components/Rodape";
import Subtitulo from "../Components/Subtitulo";
import Titulo from "../Components/Titulo";
import destinosJs from "../Destinos";
//import axios from "axios";


export default function Destinos() {

    // const [destinos, setDestino] = useState([]);

    // const mostrarDestinos = async () => {
    //     try {
    //         await axios
    //             .get("https://localhost:7027/bsapi/Destinos")
    //             .then((response) => {
    //                 setDestino(response.data);
    //             })
    //     } catch (erro) {
    //         console.log(erro)
    //     }
    // };

    // useEffect(() => {
    //     mostrarDestinos();
    // }, []);



    return (
        <ScrollView>
            <Titulo />
            <Subtitulo nome="Destinos" />
            <Text style={styles.categoria}>Nacionais</Text>

            <View style={styles.container}>
                <Image source={require('../Imagens/salvadorimg.jpg')}
                    style={{ width: 366, height: 150 }} />
                <BoxDestino cidade="Salvador"
                    descricao="Emoldurada pela baía de Todos os Santos e por praias de grande beleza natural, Salvador, patrimônio cultural da humanidade, preserva um conjunto arquitetônico que representa um pedaço vivo da história do Brasil, de que foi a primeira capital." />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/rioimg.jpg')}
                    style={{ width: 366, height: 150 }} />
                <BoxDestino cidade="Rio de Janeiro"
                    descricao="Acorde cedo para caminhar na Lagoa Rodrigo de Freitas ou no calçadão de Ipanema. Para driblar o calor, dê um mergulho no Leblon e tome um chope num boteco, como o Jobi. O tempo é curto, então escolha." />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/curitiba.jpg')}
                    style={{ width: 366, height: 150 }} />
                <BoxDestino cidade="Curitiba"
                    descricao="Curitiba é a cidade brasileira modelo em sustentabilidade. Eleita como “Cidade Verde”, a capital paranaense é a única do Brasil a dividir o título com outros destinos internacionais! As áreas verdes por lá fazem sucesso entre os moradores e visitantes com os parques e bosques." />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/saopauloimg.jpg')}
                    style={{ width: 366, height: 150 }} />
                <BoxDestino cidade="São Paulo"
                    descricao="São Paulo é uma cidade muito procurada para o turismo de negócios, mas isso não quer dizer que os visitantes não possam passar algum tempo turistando de. A capital paulista oferece atrações extremamente diversificadas, muitas desconhecidas até pelos próprios moradores." />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/portoalegreimg.jpg')}
                    style={{ width: 366, height: 150 }} />
                <BoxDestino cidade="Porto Alegre"
                    descricao="A cidade de Porto Alegre tem muito a oferecer em turismo e lazer, além dos pontos turísticos de Porto Alegre, há também os passeios e tours. Você pode visitar as belas arenas da dupla Grenal, passear de barco pelo Guaíba." />
            </View>
            
            <Text style={styles.categoria}>Internacionais</Text>

            <View style={styles.container}>
                <Image source={require('../Imagens/dublinimg.jpg')}
                    style={{ width: 366, height: 150 }} />
                <BoxDestino cidade="Dublin"
                    descricao="Fundada pelos vikings no início do século IX, a capital irlandesa foi o cenário de guerras e conflitos até chegar a definir sua própria identidade no século XX. Dublin é hoje uma capital moderna e rica em história, capaz de cultivar os visitantes com a mistura das tradições gaélicas e uma constante adaptação ao mundo moderno." />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/ibizaimg.jpg')}
                    style={{ width: 366, height: 150 }} />
                <BoxDestino cidade="Ibiza"
                    descricao="Ibiza, Espanha, é um dos destinos mais badalados e animados de toda a Europa, principalmente, na alta temporada, quando a ilha fica ainda mais vibrante e cheia de gente bonita. Se está planejando uma viagem para esse arquipélago, que reúne paisagens naturais de tirar o fôlego, praias paradisíacas e muita festa, este artigo é o que procura." />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/lisboaimg.jpg')}
                    style={{ width: 366, height: 150 }} />
                <BoxDestino cidade="Lisboa"
                    descricao="Lisboa é uma cidade linda, cheia de pontos turísticos históricos repletos de tradições, além de locais fantásticos para apreciar a beleza arquitetônica da cidade, bem como as suas belezas naturais, como a presença do rio Tejo ao longo da cidade, que já é um deslumbre para quem visita à capital portuguesa." />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/novayorkimg.jpg')}
                    style={{ width: 366, height: 150 }} />
                <BoxDestino cidade="Nova York"
                    descricao="Há várias Nova York dentro da mesma cidade. Tem a Nova York do luxo em Uptown; a alternativa em East e West Village; a fashion em Chelsea e Meatpacking District; a que aparece nos filmes em Midtown; o centro econômico do mundo em Lower Manhattan; a gospel no Harlem; a descolada na Union Square, Flatiron District e Gramercy Park e a de ruas bucólicas no Brooklyn." />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/orlandoimg.png')}
                    style={{ width: 366, height: 150 }} />
                <BoxDestino cidade="Orlando"
                    descricao="Orlando é conhecida como a capital mundial da diversão e seus principais atrativos são os parques temáticos, é claro. São eles que dão vida ao lugar e fazem de Orlando esse sucesso todo. Há vários parques para conhecer e todos têm atrações variadas, que agradam aos públicos infantil, jovem e adulto." />
            </View>

            <View style={styles.container}>
                <Image source={require('../Imagens/roma-img.jpg')}
                    style={{ width: 366, height: 150 }} />
                <BoxDestino cidade="Roma"
                    descricao="Um parque de diversões para apreciadores da história e arquitetura. Um tesouro inesgotável para amantes da arte e cultura. Uma metrópole eletrizante de trânsito caótico. Um agitadíssimo centro com tudo do melhor para boêmios, modernos, glutões e fashionistas. Roma consegue ser tudo isso e muito mais." />
            </View>
            <Rodape />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    categoria: {
        color: '#5e6360',
        justifyContent: 'center',
        marginLeft: 20,
        marginVertical: 15,
        fontSize: 30
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    }
});