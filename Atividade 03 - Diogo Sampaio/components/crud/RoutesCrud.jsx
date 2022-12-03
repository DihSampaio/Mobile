import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeEstudante from "./Estudante/HomeEstudante";
import CriarEstudante from "./Estudante/CriarEstudante";
import ListarEstudante from "./Estudante/ListarEstudante";
import EditarEstudante from "./Estudante/EditarEstudante";

import HomeProfessor from "./Professor/HomeProfessor";
import CriarProfessor from "./Professor/CriarProfessor";
import ListarProfessor from "./Professor/ListarProfessor";
import EditarProfessor from "./Professor/EditarProfessor";

const Drawer = createDrawerNavigator();

const RoutesCrud = ()=> {
    return (

        <Drawer.Navigator>

            {/* --- Estudante --- */}

            <Drawer.Screen 
                name='HomeEstudante' 
                component={HomeEstudante} 
                options={{title:'- Home -'}}/>

            <Drawer.Screen 
                name='CriarEstudante' 
                component={CriarEstudante} 
                options={{title:'- Criar -'}}/>

            <Drawer.Screen 
                name='ListarEstudante' 
                component={ListarEstudante} 
                options={{title:'- Listar -'}}/>

            <Drawer.Screen 
                name='EditarEstudante' 
                component={EditarEstudante} 
                options={{title:'- Editar -'}}/>

            {/* --- Professor --- */}
                
            <Drawer.Screen 
                name='HomeProfessor' 
                component={HomeProfessor} 
                options={{title:' - Home -'}}/>

            <Drawer.Screen 
                name='CriarProfessor' 
                component={CriarProfessor} 
                options={{title:'- Criar -'}}/>

            <Drawer.Screen 
                name='ListarProfessor' 
                component={ListarProfessor} 
                options={{title:'- Listar -'}}/>

            <Drawer.Screen 
                name='EditarProfessor' 
                component={EditarProfessor} 
                options={{title:'- Editar -'}}/>

        </Drawer.Navigator>
    )
}

export default RoutesCrud