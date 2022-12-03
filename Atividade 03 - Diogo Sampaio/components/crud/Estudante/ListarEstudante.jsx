import { View, Text, SafeAreaView, FlatList, Button } from "react-native"
import { useEffect, useState } from "react"
import { styles } from "../css/styles"

import EstudanteService from "../Service/EstudanteService"
import { firestoreDb } from "../firebase/firebase_config"

const ListarEstudante = (props) => {

    const [estudantes,setEstudantes] = useState([])
    const [flag,setFlag] = useState(false)

    useEffect(
        () => {
            
            EstudanteService.listar(
                firestoreDb,
                (estudantes) => {
                    //console.log(estudantes)
                    setEstudantes(estudantes)
                }
            )
        }
        ,
        []
    )

    const apagarEstudanteV2 = (id)=>{

        EstudanteService.apagar(
            firestoreDb,
            (resultado)=>{

               let estudantesT = estudantes

               for(let i=0;i<estudantesT.length;i++){

                if(estudantesT[i].id === id){
                    estudantesT.splice(i,1)
                    break;
                }

               }

               setEstudantes(estudantesT)
               setFlag(!flag)

            },
            id)
    }

    const apagarEstudante = (id)=>{

        EstudanteService.apagar(
            firestoreDb,
            (resultado)=>{
                let estudantesResultado = estudantes.filter(
                    (estudante)=>estudante.id !== id
                )
                setEstudantes(estudantesResultado)
            },
            id)
    }

    return (
        <View style={styles.container}>

            <Text style={styles.header}>Listar os Estudantes</Text>

            {console.log(estudantes)}

            <SafeAreaView>

                <FlatList 
                    data={estudantes}
                    renderItem={
                        ({item})=>{

                            return (

                                <View style={ { flexDirection:'row', justifyContent:'center' } } >

                                    <Text style={{width:'25%',fontWeight:'bold'}}>{item.nome}</Text>

                                    <Text style={{width:'25%'}}>{item.curso}</Text>

                                    <Text style={{margin:7}}>{item.ira}</Text>
                                    
                                    <View style={{margin:10}}>

                                        <Button 
                                            title="Editar" 
                                            onPress={()=>props.navigation.navigate('EditarEstudante',{id:item.id})}
                                        />

                                    </View>

                                    <View style={ { margin:5 } }>

                                        <Button 
                                            title="Apagar"
                                            onPress={()=>apagarEstudanteV2(item.id)} 
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

export default ListarEstudante