import { useState } from "react";
import { View,Text,Button,TextInput } from "react-native";
import { styles } from "../css/styles";

import EstudanteService from "../Service/EstudanteService";
import { firestoreDb } from "../firebase/firebase_config"


const CriarEstudante = (props)=> {

    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [ira, setIra] = useState('')

    const acaoBotaoSubmeter = ()=> {
        
        EstudanteService.criar(

            firestoreDb,
            (id)=>{
                alert(`Estudante ${id} inserido com sucesso!`)
                props.navigation.navigate('ListarEstudante')
            },
            {nome,curso,ira}

        )
    }

    return (

        <View style={styles.container}>

            <Text style={styles.header}>Criar um Estudante</Text>

            <TextInput style={styles.input} placeholder="Nome"  value={nome} onChangeText={(nome)=>setNome(nome)} />

            <TextInput style={styles.input} placeholder="Curso"  value={curso} onChangeText={(curso)=>setCurso(curso)} />

            <TextInput style={styles.input} placeholder="IRA" value={ira} keyboardType='numeric' onChangeText={(ira)=>setIra(ira)} />

            <View style={styles.button}>
                <Button
                    title="Enviar" 
                    onPress={acaoBotaoSubmeter}
                />
            </View>

        </View>
        
    )
}

export default CriarEstudante