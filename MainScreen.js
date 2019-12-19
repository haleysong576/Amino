import React, {Component} from "react";
import {View, Image, StyleSheet, Button} from "react-native";

class MainScreen extends Component{

    // getDataFromApi();
     
     static navigationOptions = {
       title: 'Main Menu'
     }
     
     onPressInfoButton() {
         this.props.navigation.navigate('InfoMenu');
     }
     onPressDailyButton(){
         this.props.navigation.navigate('DailyTracker');
     }
     onPressSettingButton(){
         this.props.navigation.navigate('Settings');
     }
     onPressRecipeButton(){
         this.props.navigation.navigate('Recipe');
     }
     
     render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
         return(
         <View style = {styles.icons}>
             <Image source = {pic} style = {{width: 100, height: 100, alignContent: 'center'}}/>
            <View style = {styles.container}>
               <View style = {styles.button}>
                <Button 
                onPress = {() => this.onPressDailyButton()}
                title = "Daily Tracker"
                />
                </View>
              <View style = {styles.button}>
                <Button 
                onPress = {() => this.onPressRecipeButton()}
                title = "Recipes"
                />
               </View>
            </View>
            <View style = {styles.container}>
               <View style = {styles.button}>
                <Button 
                onPress = {() => this.onPressInfoButton()}
                title = "Info"
                />
                </View>
              <View style = {styles.button}>
                <Button 
                onPress = {() => this.onPressSettingButton()}
                title = "Settings"
                />
               </View>
            </View>
         </View>
         );
     }
   }

    export default MainScreen;

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
        height: 100,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    }
    });
