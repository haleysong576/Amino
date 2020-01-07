import React, {Component} from "react";
import {View, Image, StyleSheet, Button, Text, ScrollView, Picker} from "react-native";

class DailyInputScreen extends Component{

    static navigationOptions = {
        title: 'Daily Tracker Input'
      }

      render() {
    return (
      //safeareaview????
      <ScrollView style = {styles.container}> 
        <Text style = {styles.bigTitle}>Daily Tracker</Text>
        <Text style = {styles.titleText}>Starchy Vegetables</Text>
        <View style = {styles.icons}>
          <Picker
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
            }>
            <Picker.Item label="None" value="none" />
            <Picker.Item label="White Potatoes" value="whitepotatoes" />
            <Picker.Item label="Corn" value="corn" />
            <Picker.Item label="Sweet Potatoes" value="sweetpotatoes" />
          </Picker>
          <Picker
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
            }>
            <Picker.Item label="0 lb" value="0 lb" />
            <Picker.Item label="1/2 lb" value="0.5 lb" />
            <Picker.Item label="1 lb" value="1 lb" />
            <Picker.Item label="2 lb" value="2 lb" />
          </Picker>
        </View>
        <Text style = {styles.titleText}>Beans and Legumes</Text>
        <View style = {styles.icons}>
          <Picker
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
            }>
            <Picker.Item label="None" value="none" />
            <Picker.Item label="Black Beans" value="blackbeans" />
            <Picker.Item label="Kidney Beans" value="kidneybeans" />
            <Picker.Item label="Peas" value="peas" />
            <Picker.Item label="lentils" value="lentils" />
            <Picker.Item label="garbanzo beans" value="garbanzo beans" />
            <Picker.Item label="peanuts" value="peanuts" />
          </Picker>
          <Picker
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
            }>
            <Picker.Item label="0 lb" value="0 lb" />
            <Picker.Item label="1/2 lb" value="0.5 lb" />
            <Picker.Item label="1 lb" value="1 lb" />
            <Picker.Item label="2 lb" value="2 lb" />
          </Picker>
        </View>
        <Text style = {styles.titleText}>Leafy Greens</Text>
        <View style = {styles.icons}>
          <Picker
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
            }>
            <Picker.Item label="None" value="none" />
            <Picker.Item label="Spinach" value="spinach" />
            <Picker.Item label="Kale" value="kale" />
            <Picker.Item label="Romain" value="romain" />
          </Picker>
          <Picker
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
            }>
            <Picker.Item label="0 lb" value="0 lb" />
            <Picker.Item label="1/2 lb" value="0.5 lb" />
            <Picker.Item label="1 lb" value="1 lb" />
            <Picker.Item label="2 lb" value="2 lb" />
          </Picker>
        </View>
        <Text style = {styles.titleText}>Complete Protein</Text>
        <View style = {styles.icons}>
          <Picker
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
            }>
            <Picker.Item label="None" value="none" />
            <Picker.Item label="Soy" value="soy" />
            <Picker.Item label="Soybeans" value="soybean" />
            <Picker.Item label="Tofu" value="tofu" />
            <Picker.Item label="Tempeh" value="tempeh" />
            <Picker.Item label="Miso" value="miso" />
            <Picker.Item label="Soymilk" value="soymilk" />
            <Picker.Item label="Quinoa" value="quinoa" />
          </Picker>
          <Picker
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
            }>
            <Picker.Item label="0 lb" value="0 lb" />
            <Picker.Item label="1/2 lb" value="0.5 lb" />
            <Picker.Item label="1 lb" value="1 lb" />
            <Picker.Item label="2 lb" value="2 lb" />
          </Picker>
        </View>
        <View style = {styles.icons}>
            <Button 
            onPress = {() => this.onPressChickenButton()}
            title = "Save"
            />
        </View>
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

