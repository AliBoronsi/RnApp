import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
   goToAbout = () => {
      Actions.about()
   }
   render() {
      return (
         <TouchableOpacity style={{ margin: 128 }} onPress={this.goToAbout}>
            <Text>This is HOMEeeeeeeeee!</Text>
         </TouchableOpacity>
      )
   }
}
