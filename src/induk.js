import React, { Component } from "react";
import { Text, View } from "react-native";
import ComponentAnak from './anak'

export default class induk extends Component {
    constructor () {    
        super()    
        this.state = {      
            peoples: [{        
                name: 'Obi Wan',    
                status: 'Jedi'      
            },{        
                name: 'Luke Skywalker',            
                status: 'Padawan'      
            }]    
        }  
    }

  render() {
    return(
        <View>
            <ComponentAnak 
                peoples={this.state.peoples}
            />
        </View>
    )
  }
}
