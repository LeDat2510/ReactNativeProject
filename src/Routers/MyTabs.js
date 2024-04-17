import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import HomeScreen from "../Screens/HomeScreen";
import DetailScreen from "../Screens/DetailScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = createMaterialBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tabs.Navigator
            initialRouteName="home"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'tomato' }}
        >
            <Tabs.Screen 
                name="home" 
                component={HomeScreen} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="home" color={color} size={26}/>
                    ),
                  }}
                />
            <Tabs.Screen 
                name="detail" 
                component={DetailScreen} 
                options={{
                    tabBarLabel: 'Detail',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="account" color={color} size={26}/>
                    ),
                  }}
                />
        </Tabs.Navigator>
    )
}

export default MyTabs