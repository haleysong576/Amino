import React, {Component} from "react";
import {View, Image, StyleSheet, Button} from "react-native";

class Settings extends Component{

    static navigationOptions = {
        title: 'Settings'
      }

     onPressNotificatonButton(){
      this.props.navigation.navigate('Notification');
    }
    onPressPasswordButton(){
        this.prop.navigation.navigate('Password');
    }
    onPressLogOutButton(){
        this.prop.navigation.navigate('Log Out');
    }
    render(){

      return(
        <View style = {styles.container}>
          <View style= {styles.item}>
            <Button 
            onPress = {() => this.onPressNotificationButton()}
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
    marginTop: Constants.statusBarHeight,
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
