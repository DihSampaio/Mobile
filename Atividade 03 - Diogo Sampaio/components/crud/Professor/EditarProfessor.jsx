import { useEffect, useState } from "react";
import { View,Text,Button,TextInput } from "react-native";
import { styles } from "../css/styles";

import ProfessorService from "../Service/ProfessorService";
import { firestoreDb } from "../firebase/firebase_config"


const EditarProfessor = (props)=> {
    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [salario, setSalario] = useState('')

    useEffect(

        ()=>{
            ProfessorService.recuperar(
                firestoreDb,
                (professor)=>{
                    setNome(professor.nome)
                    setCurso(professor.curso)
                    setSalario(professor.salario)
                },
                props.route.params.id
            )
        },
        []
    )

    const acaoBotaoSubmeter = ()=> {
        ProfessorService.atualizar(
            firestoreDb,
            ()=>{
                alert('Professor atualizado!')
                props.navigation.navigate('ListarProfessor')
            },
            props.route.params.id,
            {nome,curso,salario}
        )
    }

    return (

        <View style={styles.container}>

            <Text style={styles.header}>Editar Professor</Text>

            <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={(nome)=>setNome(nome)} />

            <TextInput style={styles.input} placeholder="Curso"  value={curso} onChangeText={(curso)=>setCurso(curso)} />

            <TextInput style={styles.input} placeholder="Salário" value={salario} keyboardType='numeric' onChangeText={(salario)=>setSalario(salario)} />

            <View style={styles.button}>
                <Button
                    title="Atualizar" 
                    onPress={acaoBotaoSubmeter}
                />
            </View>

        </View>

    )
}

export default EditarProfessor