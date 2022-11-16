import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    cabecalho: {
        margin: 15,
        fontSize: 25,
        fontWeight:'bold'
    },
    label: {
        margin:5,
        fontSize: 15,
        fontWeight:'bold'
    },
    botao: {
        margin:10,
        width:'60%',
        backgroundColor:'lightblue'
    },
    input: {
        margin:10,
        height:45,
        width:'90%',
        borderWidth: 2,
        paddingLeft: 20,
        borderColor:'gray'
    }
})

export { estilos }