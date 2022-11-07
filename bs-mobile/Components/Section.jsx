import { View, Text, StyleSheet, ProgressViewIOSComponent } from "react-native";

export default function Section(props){
    return(
        <View style={styles.section}>
            <Text style={styles.texto}>{props.texto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
       backgroundColor: '#f2f6f7',
       height: 90,
       justifyContent: 'center'
    },
    texto: {
        fontSize: 17,
        textAlign: 'center'
     
    }
});