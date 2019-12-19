import React, {Component} from "react";
import {View, Image, StyleSheet, Button, Text} from "react-native";

class RecipeScreen extends Component{

    static navigationOptions = {
        title: 'Recipes'
      }

    onPressChickenButton(){
      this.props.navigation.navigate('Chicken');
    }
    render(){

      return(
        <View style = {styles.container}>
          <View style= {styles.button}>
            <Button 
            onPress = {() => this.onPressChickenButton()}
            title = "Korean Chicken"
            />
          </View>
        </View>
      );

    }
}

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  icons:{
      flex:1,
      padding: 50,
      marginTop: 50,
      alignContent: 'center'
  },
  button: {
      marginBottom: 30,
      marginTop: 30,
      width: 100,
      height: 50,
      alignItems: 'center',
      backgroundColor: '#2196F3'
  }
  });
