import React, {Component} from "react";
import {View, Image, StyleSheet, Button, Text, Switch} from "react-native";

class Notification extends Component{

    static navigationOptions = {
        title: 'Notification'
      }

    state = {
      isFirstSwitchOn: true,
      isSecondSwitchOn: true,
      isThirdSwitchOn: true,
    }
    render(){
      const {isFirstSwitchOn} = this.state;
      const {isSecondSwitchOn} = this.state;
      const {isThirdSwitchOn} = this.state;
      return(
        <View style = {styles.container}>
          <View style = {styles.item}>
            <Text style = {styles.title}>Change Notification Settings</Text>
          </View>
          <View style = {styles.item}>
            <Text>Get notification when the phone is open</Text>
          </View>
          <Switch
            value={isFirstSwitchOn}
            onValueChange={() =>
              { this.setState({ isFirstSwitchOn: !isFirstSwitchOn }); }
            }
           />
           <View style = {styles.item}>
            <Text>Get notification when there is a new offer</Text>
          </View>
          <Switch
            value={isSecondSwitchOn}
            onValueChange={() =>
              { this.setState({ isSecondSwitchOn: !isSecondSwitchOn }); }
            }
           />
           <View style = {styles.item}>
            <Text>Get notification when you didn't consume the essential amino acids</Text>
          </View>
          <Switch
            value={isThirdSwitchOn}
            onValueChange={() =>
              { this.setState({ isThirdSwitchOn: !isThirdSwitchOn }); }
            }
           />
        </View>
      );

    }
}

export default Notification;

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
    fontSize: 30,
  },
});
