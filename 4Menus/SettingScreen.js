import React, {Component} from "react";
import {View, Image, StyleSheet, Button} from "react-native";

class Settings extends Component{

    static navigationOptions = {
        title: 'Settings'
      }

    onPressNotificatonButton() {
      this.props.navigation.navigate('Notification');
    }
    onPressPasswordButton(){
        this.props.navigation.navigate('Password');
    }
    onPressLogOutButton(){
        this.props.navigation.navigate('Home');
    }
    render(){

      return(
        <View style = {styles.container}>
          <View style= {styles.item}>
            <Button 
            onPress = {() => this.onPressNotificatonButton()}
            title = "Notification"
            />          
          </View>
          <View style= {styles.item}>
            <Button 
            onPress = {() => this.onPressPasswordButton()}
            title = "Change Password"
            />
          </View>
          <View style= {styles.item}>
            <Button 
            onPress = {() => this.onPressLogOutButton()}
            title = "Log out"
            />
          </View>
        </View>
      );

    }
}

export default Settings;

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
  bigTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
});
