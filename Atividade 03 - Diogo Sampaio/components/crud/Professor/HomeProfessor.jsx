import { View,Text,Button } from "react-native";
import { styles } from "../css/styles";

const HomeProfessor = (props)=> {

    return (

        <View style={styles.container}>
            
            <Text style={styles.header}>Professor Home</Text>

            <View style={styles.button}>
                <Button 
                    title='Criar Professor'
                    onPress={()=>props.navigation.navigate('CriarProfessor')}/>
            </View>

            <View style={styles.button}>
                <Button 
                    title='Listar Professor'
                    onPress={()=>props.navigation.navigate('ListarProfessor')}/>
            </View>

        </View>

    )

}
export default HomeProfessor