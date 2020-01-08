import React, {Component} from "react";
import {View, Image, StyleSheet, Button, Text, Switch, TextInput} from "react-native";

class PasswordBack extends Component{

    static navigationOptions = {
        title: 'Password'
      }
    
      onPressButton() {
          console.warn("Password Changed!")
      }
    render(){
      return(
        <View style = {styles.container}>
          <View style = {styles.item}>
            <Text sytle = {styles.title}>Change Password</Text>
          </View>
          <View style = {styles.item}>
            <Text>Enter the new password</Text>
          </View>
          <TextInput style = {styles.label} placeholder="Password" underlineColorAndroid = {'gray'} secureTextEntry={true} onChangeText = {text => this.setState ({password: text })}/>
          <View style = {styles.button}>
            <Button 
            onPress = {() => this.onPressButton()}
            title = "Change"
            />
          </View>
        </View>
      );

    }
}

export default PasswordBack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  label: {
    alignSelf: 'center',
    fontSize: 20,
    padding: 20,
    color: 'black',
  },
  button: {
    marginBottom: 100,
    marginTop: 30,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#2196F3'
  }
});
