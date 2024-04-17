import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import React, { useLayoutEffect, useState } from 'react'

const HomeScreen = ({ navigation }) => {

    /*
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button title="count" onPress={() => setCount(count+1)}>Update Count</Button>
        })
    }, [navigation, count])*/

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <Button mode='contained' onPress={() => navigation.navigate("detail")}>Go to details</Button>
        </View>
    )
}

export default HomeScreen