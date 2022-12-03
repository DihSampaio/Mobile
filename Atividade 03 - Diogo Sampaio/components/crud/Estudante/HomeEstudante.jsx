import { View,Text,Button } from "react-native";
import { styles } from "../css/styles";

const HomeEstudante = (props)=> {

    return (

        <View style={styles.container}>

            <Text style={styles.header}>Home</Text>

            <View style={styles.button}>
                <Button 
                    title='Criar Estudante'
                    onPress={()=>props.navigation.navigate('CriarEstudante')}/>
            </View>

            <View style={styles.button}>
                <Button 
                    title='Listar Estudante'
                    onPress={()=>props.navigation.navigate('ListarEstudante')}/>
            </View>
            
        </View>

    )
}

export default HomeEstudante