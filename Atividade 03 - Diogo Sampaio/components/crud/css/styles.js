import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container: {

        flex: 1,
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start'

    },
    header: {

        margin: 18,
        fontSize: 27,
        fontWeight: 'bold'

    },
    label: {

        margin: 7,
        fontSize: 13,
        fontWeight: 'bold'

    },
    button: {

        margin: 10,
        width: '50%',
        backgroundColor: '#59c8ff'

    },
    input: {

        margin: 12,
        height: 55,
        width: '100%',
        paddingLeft: 20,
        borderWidth: 1.5,
        borderColor: '#1e1e1e'

    }
})

export { styles }