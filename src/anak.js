import React, { Component } from 'react'
import { Text, View,FlatList } from 'react-native'

export default class anak extends Component {
  constructor(props) {
    super(props)
  }

//   componentDidMount = () =>{
//     console.warn(this.props.peoples)
//   }

   render() {
    return (
      <FlatList
          data={this.props.peoples}
          keyExtractor={item => item.name}
          
          renderItem={
              ({item}) =>
              <View>
                  <Text>{item.name}</Text>
                  <Text>{item.status}</Text>
              </View>
          }
        />
    )
  }
}