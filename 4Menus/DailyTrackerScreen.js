import React, {Component} from "react";
import {View, Image, StyleSheet, Button, Text, ScrollView, Picker} from "react-native";

class DailyTrackerScreen extends Component{

    static navigationOptions = {
        title: 'Daily Tracker'
      }

      render() {
    return (
      //safeareaview????
      <ScrollView style = {styles.container}> 
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginEnd: 10,
    paddingLeft: 40,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  icons:{
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bigTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
  });
