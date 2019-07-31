import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button, Icon, Header,Card } from "react-native-elements";

export default class componentName extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: "Fahmi"
    }
  }
  
  AddName = () =>
  {
    this.setState({
      username : "fmpratomo"
    })
  }

  RemoveName = () => {
    this.setState({
      username : ""
    })
  } 

  render() {
    return (
      <View>
        <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
        <Text>
          Username : {this.state.username}
        </Text>
       <Button
        icon={<Icon name="home" size={15} color="white" />}
        title="Menambah nama"
        onPress={this.AddName}
      />
      <Button
        title="MenghapusNama nama"
        onPress={this.RemoveName}
      />
      </View>
    )
  }
}

