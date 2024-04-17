import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/Routers/MyStack';
import { PaperProvider } from 'react-native-paper';
import MyDrawer from './src/Routers/MyDrawer';
import MyTabs from './src/Routers/MyTabs';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </PaperProvider>
  );
}
/*
<NavigationContainer>
        <MyStack />
      </NavigationContainer>

<NavigationContainer>
        <MyStack />
      </NavigationContainer>
*/
