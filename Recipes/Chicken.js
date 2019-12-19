import React, {Component} from "react";
import {View, Image, StyleSheet, Button, Text} from "react-native";

class Chicken extends Component{

    static navigationOptions = {
        title: 'Chicken'
      }
    
    render(){

        return(
            <View style = {styles.container}>
                <Text>HI</Text>

            </View>
        );
    }
}

export default Chicken;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      padding: 30,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'green',
      fontWeight: 'bold',
      fontSize: 30,
    },
    label: {
      alignSelf: 'stretch',
      fontSize: 20,
      padding: 20,
      color: 'black',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      color: 'black'
    },
  });
  
