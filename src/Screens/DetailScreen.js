import { View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'

const DetailScreen = () => {

    /*     <Text>{route.params.name}</Text>
      <Button title='Go back' onPress={() => navigation.goBack()}></Button>*/
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Detail Screen</Text>
    </View>
  )
}

//<Button title='push' onPress={() => navigation.push('home', {name: route.params.name})}></Button>

export default DetailScreen