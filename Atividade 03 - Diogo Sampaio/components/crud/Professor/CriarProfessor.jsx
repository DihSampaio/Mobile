import { useState } from "react";
import { View,Text,Button,TextInput } from "react-native";
import { styles } from "../css/styles";

import ProfessorService from "../Service/ProfessorService";
import { firestoreDb } from "../firebase/firebase_config"


const CriarProfessor = (props)=> {

    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [salario, setSalario] = useState('')

    const acaoBotaoSubmeter = ()=> {

        ProfessorService.criar(
            firestoreDb,
            (id)=>{
                alert(`Professor ${id} inserido com sucesso!`)
                props.navigation.navigate('ListarProfessor')
            },
            {nome,curso,salario}
        )

    }

    return (

        <View style={styles.container}>

            <Text style={styles.header}>Criar Professor</Text>

            <TextInput style={styles.input} placeholder="Nome"  value={nome} onChangeText={(nome)=>setNome(nome)} />

            <TextInput style={styles.input} placeholder="Curso" value={curso} onChangeText={(curso)=>setCurso(curso)} />

            <TextInput style={styles.input} placeholder="Salário" value={salario} keyboardType='numeric' onChangeText={(salario)=>setSalario(salario)} />

            <View style={styles.button}>
                <Button
                    title="Enviar" 
                    onPress={acaoBotaoSubmeter}
                />
            </View>

        </View>

    )
}

export default CriarProfessor