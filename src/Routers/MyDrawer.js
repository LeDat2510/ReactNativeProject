import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DetailScreen from '../Screens/DetailScreen';
import HomeScreen from '../Screens/HomeScreen';
import { Icon } from 'react-native-paper';
import CustomDrawerNavigation from '../Component/CustomDrawerNavigation';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
            <Drawer.Navigator
                initialRouteName='home'
                drawerContent={props => <CustomDrawerNavigation {...props} />}>
                <Drawer.Screen name="home" component={HomeScreen} />
                <Drawer.Screen name="detail" component={DetailScreen} />
            </Drawer.Navigator>
    )
}

export default MyDrawer