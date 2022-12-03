import { View, Text, SafeAreaView, FlatList, Button } from "react-native"
import { useEffect, useState } from "react"
import { styles } from "../css/styles"

import ProfessorService from "../Service/ProfessorService"
import { firestoreDb } from "../firebase/firebase_config"

const ListarProfessor = (props) => {

    const [professores,setProfessores] = useState([])

    useEffect(
        () => {
            ProfessorService.listar(
                firestoreDb,
                (professores) => {
                    setProfessores(professores)
                }
            )
        }
        ,
        []
    )

    const apagarProfessor = (id)=>{
        ProfessorService.apagar(
            firestoreDb,
            (resultado)=>{
                let professoresResultado = professores.filter(
                    (professor)=>professor.id !== id
                )
                setProfessores(professoresResultado)
            },
            id)
    }

    return (
        <View style={styles.container}>

            <Text style={styles.header}>Listar os Professores</Text>

            {console.log(professores)}

            <SafeAreaView>

                <FlatList 
                    data={professores}
                    renderItem={
                        ({item})=>{

                            return (

                                <View
                                    style={{
                        
                                        flexDirection:'row',
                                        justifyContent:'center'
                                    }}
                                >
                                    <Text style={{width:'25%',fontWeight:'bold'}}>{item.nome}</Text>

                                    <Text style={{width:'25%'}}>{item.curso}</Text>
                                    
                                    <Text style={{margin:7}}>{item.salario}</Text>

                                    <View style={{margin:10}}>
                                        <Button 
                                            title="Editar" 
                                            onPress={()=>props.navigation.navigate('EditarProfessor',{id:item.id})}
                                            />
                                    </View>

                                    <View style={{margin:5}}>
                                        <Button 
                                            title="Apagar"
                                            onPress={()=>apagarProfessor(item.id)} 
                                            />
                                    </View>
                                    
                                </View>
                            )

                        }

                    }

                    keyExtractor={item => item.id}

                />

            </SafeAreaView>

        </View>
    )
}

export default ListarProfessor