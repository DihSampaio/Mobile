import { useEffect, useState } from "react";
import { View,Text,Button,TextInput } from "react-native";
import { styles } from "../css/styles";

import EstudanteService from "../Srvice/EstudanteService";
import { firestoreDb } from "../firebase/firebase_config"


const EditarEstudante = (props)=> {

    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [ira, setIra] = useState('')

    useEffect(
        ()=>{

            //console.log(props.route.params.id)
            EstudanteService.recuperar(
                firestoreDb,
                (estudante)=>{
                    //console.log(estudante)
                    setNome(estudante.nome)
                    setCurso(estudante.curso)
                    setIra(estudante.ira)
                },
                props.route.params.id
            )

        },
        []
    )

    const acaoBotaoSubmeter = ()=> {
    
        EstudanteService.atualizar(
            firestoreDb,
            ()=>{
                alert('O Estudante atualizado com sucesso!')
                props.navigation.navigate('ListarEstudante')
            },
            props.route.params.id,
            {nome,curso,ira}
        )
    }

    return (

        <View style={styles.container}>

            <Text style={styles.header}>Editar Estudante</Text>

            <TextInput style={styles.input} placeholder="Nome"  value={nome} onChangeText={(nome)=>setNome(nome)} />

            <TextInput style={styles.input} placeholder="Curso"  value={curso} onChangeText={(curso)=>setCurso(curso)} />

            <TextInput style={styles.input} placeholder="IRA" value={ira} keyboardType='numeric' onChangeText={(ira)=>setIra(ira)} />

            <View style={styles.button}>
                <Button
                    title="Atualizar" 
                    onPress={acaoBotaoSubmeter}
                />
            </View>

        </View>

    )
}

export default EditarEstudante