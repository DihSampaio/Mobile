import { NavigationContainer } from '@react-navigation/native';
import RoutesCrud from './components/crud_firebase/RoutesCrud';

export default function App() {

  return (

    <NavigationContainer>
      <RoutesCrud />
    </NavigationContainer>

  );
  
}
