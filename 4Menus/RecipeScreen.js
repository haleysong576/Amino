import React, {Component} from "react";
import {View, Image, StyleSheet, Button, Text} from "react-native";

class RecipeScreen extends Component{

    static navigationOptions = {
        title: 'Recipes'
      }

    onPressChiliButton(){
      this.props.navigation.navigate('Chili');
    }
    onPressBibimButton(){
      this.props.navigation.navigate('Bibimbop');
    }
    onPressBurritoButton(){
      this.props.navigation.navigate('VegeterianBurritoBowls');
    }
    onPressOatmealButton(){
      this.props.navigation.navigate('OatmealPancakes');
    }
    onPressBurgerButton(){
      this.props.navigation.navigate('VeganBurger')
    }
    render(){

      return(
        <View style = {styles.container}>
          <View style = {styles.icons}>
            <Image source = {require('./Images/oatmealpancakes.jpg')} style = {{width: 70, height: 70}}/>
            <View style= {styles.button}>
              <Button 
              onPress = {() => this.onPressOatmealButton()}
              title = "Oatmeal Pancakes"
              />
            </View>
          </View>
          <View style = {styles.icons}>
            <Image source = {require('./Images/VegetarianChili.jpg')} style = {{width: 70, height: 70}}/>
            <View style= {styles.button}>
              <Button 
              onPress = {() => this.onPressChiliButton()}
              title = "Vegeterian Chili with Pasta"
            />
            </View>
          </View>
          <View style = {styles.icons}>
            <Image source = {require('./Images/Burrito.jpg')} style = {{width: 70, height: 70}}/>
            <View style= {styles.button}>
              <Button 
              onPress = {() => this.onPressBurritoButton()}
              title = "Veggie Burrito Bowl"
              />
            </View>
          </View>
          <View style = {styles.icons}>
            <Image source = {require('./Images/VeganBurgers.jpg')} style = {{width: 70, height: 70}}/>
            <View style= {styles.button}>
              <Button 
              onPress = {() => this.onPressBurgerButton()}
              title = "Vegan burgers"
              />
            </View>
          </View>
          <View style = {styles.icons}>
            <Image source = {require('./Images/Bibimbap.jpg')} style = {{width: 70, height: 70}}/>
            <View style= {styles.button}>
              <Button 
              onPress = {() => this.onPressBibimButton()}
              title = "Bibimbop"
              />
            </View>
          </View>
        </View>
      );

    }
}

export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  icons:{
      padding: 50,
      flexDirection: 'row'
  },
  button: {
      marginBottom: 30,
      width: 100,
      height: 50,
      alignItems: 'center',
      backgroundColor: '#2196F3'
  }
  });
