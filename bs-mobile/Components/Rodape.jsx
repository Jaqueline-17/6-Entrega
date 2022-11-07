import { View, Image, StyleSheet, Text } from "react-native";

export default function Rodape() {
    return (
        <View>
            <View style={styles.rodape}>
                <Image source={require('../Imagens/facebook_icon.png')}
                    style={{ width: 40, height: 40 }} />
                <Image source={require('../Imagens/Instagram_icon.png')}
                    style={{ width: 40, height: 40 }} />
                <Image source={require('../Imagens/whatsapp_icon.png')}
                    style={{ width: 40, height: 40 }} />
                <Image source={require('../Imagens/email_icon.png')}
                    style={{ width: 40, height: 40 }} />
                <Image source={require('../Imagens/telegram_icon.png')}
                    style={{ width: 40, height: 40 }} />
                <Image source={require('../Imagens/linkedin_icon.png')}
                    style={{ width: 40, height: 40 }} />
            </View>
            <View style={styles.logo}>
                <Text>Proporcionado Viagens de Qualidade</Text>
                <Text>&#169; Bússola Tour</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rodape: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        backgroundColor: '#f2f6f7',
        padding: 20,

    },
    logo: {
        justifyContent: 'center',
       alignItems: 'center',
       padding: 3
    },
});