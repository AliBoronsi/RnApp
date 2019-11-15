import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
   state = {
      users: []
   };
   styles = StyleSheet.create({
      container: {
         padding: 10,
         marginTop: 3,
         backgroundColor: '#d9f9b1',
         alignItems: 'center',
      },
      text: {
         color: '#4f603c'
      },
      add_button: {
         width: 100,
         marginHorizontal: 'auto',
         alignItems: 'center'
      }
   });
   alertItemName = (item) => {
      alert(item.name)
   };
   addUser = () => {
      const newUser = {
         id: this.state.users.length,
         name: `User${this.state.users.length + 1}`
      };
      this.setState({ users: [...this.state.users, newUser] });
   };
   goToAbout = () => {
      Actions.about()
   };
   componentDidMount = () => {
      fetch('https://ab7091.herokuapp.com/rnApi/getUsers', {
         method: 'GET'
      })
         .then((response) => response.json())
         .then((responseJson) => {
            if (responseJson.success)
               this.setState({ users: responseJson.data });
            alert(responseJson.message);
         })
         .catch((error) => {
            console.error(error);
         });
   };
   render() {
      return (
         <View>
            <Button title='Add User' style={this.styles.add_button}
               onPress={this.addUser}>
            </Button>
            <ScrollView>
               {
                  this.state.users.map((item, index) => (
                     <TouchableOpacity
                        key={item.id}
                        style={this.styles.container}
                        onPress={() => this.alertItemName(item)}>
                        <Text style={this.styles.text}>
                           {index + 1 + '- '}{item.name}
                        </Text>
                     </TouchableOpacity>
                  ))
               }
            </ScrollView>
         </ View>
      );
   };
}