import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import { Image } from 'react-native';
import CustomNavigationBar from '../Component/CustomNavigationBar';

const Stack = createStackNavigator();

const NewTitle = () => {
    return (
        <Image style={{width: 50, height: 50}} source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}/>
    );
}

const MyStack = () => {
  return (
    <Stack.Navigator 
        initialRouteName='home'
        screenOptions={{
            header: (props) => <CustomNavigationBar {...props}/>,
        }}>
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='detail' component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default MyStack