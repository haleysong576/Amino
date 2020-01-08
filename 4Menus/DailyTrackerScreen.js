import React, {Component} from "react";
import {View, Image, StyleSheet, Button, Text, ScrollView, Picker} from "react-native";
import ViewAminoAcids from "./ViewAminoAcids";

class DailyInputScreen extends Component{

    static navigationOptions = {
        title: 'Daily Tracker Input'
      }
    
      state = {

      }
    onPressSaveButton() {

      let count = 0;

        if (this.state.BeansAmount != null && this.state.BeansAmount != 'none'&& this.state.BeansInput != null && this.state.BeansInput != 'none') {
          
          fetch('http://10.0.2.2:3000/consumed/',{
            method: 'POST',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  food: this.state.BeansInput,
                  Amount: this.state.BeansAmount,
              }),
          })
          count +=  -10;
        }
        
        if (this.state.starchyAmount != null && this.state.starchyInput != null && this.state.starchyAmount != 'none' && this.state.starchyInput != 'none'){
          
          fetch('http://10.0.2.2:3000/consumed/',{
            method: 'POST',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  food: this.state.starchyInput,
                  Amount: this.state.starchyAmount,
              }),
          })

          count += 3;
          
      }

        if (this.state.LeafyAmount != null && this.state.LeafyAmount != 'none'&& this.state.LeafyInput != null && this.state.LeafyInput != 'none') {
          
          fetch('http://10.0.2.2:3000/consumed/',{
            method: 'POST',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  food: this.state.LeafyInput,
                  Amount: this.state.LeafyAmount,
              }),
          })
          count += 10;
        }

        if (this.state.completeAmount != null && this.state.completeAmount != 'none'&& this.state.completeInput != null && this.state.completeInput != 'none') {
          
          fetch('http://10.0.2.2:3000/consumed/',{
            method: 'POST',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  food: this.state.completeInput,
                  Amount: this.state.completeAmount,
              }),
          })
          
          count += 10;
        }

        if (count == 0){
          close.warn('No Food Added');
        }
        else{
          fetch('http://10.0.2.2:3000/posts/5df1638e4d650b453b66d9eb',{
            method: 'PATCH',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  required: false
              }),
          })

          fetch('http://10.0.2.2:3000/posts/5df1638e4d650b453b66d9ec',{
            method: 'PATCH',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  required: false
              }),
          })

          fetch('http://10.0.2.2:3000/posts/5df1638e4d650b453b66d9ed',{
            method: 'PATCH',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  required: false
              }),
          })

          fetch('http://10.0.2.2:3000/posts/5df164164d650b453b66d9ee',{
            method: 'PATCH',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  required: false
              }),
          })

          fetch('http://10.0.2.2:3000/posts/5df1644a4d650b453b66d9f3',{
            method: 'PATCH',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  required: false
              }),
          })

          fetch('http://10.0.2.2:3000/posts/5df164164d650b453b66d9f0',{
            method: 'PATCH',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  required: false
              }),
          })

          fetch('http://10.0.2.2:3000/posts/5df1644a4d650b453b66d9f1',{
            method: 'PATCH',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  required: false
              }),
          })
          
          console.warn(count);
          if(count == -10){
            fetch('http://10.0.2.2:3000/posts/5df1644a4d650b453b66d9f2',{
            method: 'PATCH',
              headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  required: false
              }),
          })
          }
          else if (count == 3){
            fetch('http://10.0.2.2:3000/posts/5df164164d650b453b66d9ef',{
              method: 'PATCH',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    required: false
                }),
            })  
          }
          else{
            fetch('http://10.0.2.2:3000/posts/5df1644a4d650b453b66d9f2',{
              method: 'PATCH',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    required: false
                }),
            })
  
            fetch('http://10.0.2.2:3000/posts/5df164164d650b453b66d9ef',{
                method: 'PATCH',
                  headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      required: false
                  }),
              })
          }
          this.props.navigation.navigate('ViewAminoAcids');
        }
        
        
       
        
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
            selectedValue = {this.state.starchyInput}
            onValueChange={itemValue =>
            this.setState({starchyInput: itemValue})}
          >
            <Picker.Item label="None" value="none" />
            <Picker.Item label="White Potatoes" value="whitepotatoes" />
            <Picker.Item label="Corn" value="corn" />
            <Picker.Item label="Sweet Potatoes" value="sweetpotatoes" />
          </Picker>
          <Picker
            style={{height: 50, width: 150}}
            selectedValue = {this.state.starchyAmount}
            onValueChange={itemValue =>
            this.setState({starchyAmount: itemValue})}
            ref={itemValue => { this.state.startchyAmount = itemValue }}
          >
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
            selectedValue = {this.state.BeansInput}
            onValueChange={(itemValue) =>
            this.setState({BeansInput: itemValue})}
          >
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
            selectedValue = {this.state.BeansAmount}
            onValueChange={(itemValue) =>
            this.setState({BeansAmount: itemValue})}
          >
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
            selectedValue = {this.state.LeafyInput}
            onValueChange={(itemValue) =>
            this.setState({LeafyInput: itemValue})}
          >
            <Picker.Item label="None" value="none" />
            <Picker.Item label="Spinach" value="spinach" />
            <Picker.Item label="Kale" value="kale" />
            <Picker.Item label="Romain" value="romain" />
          </Picker>
          <Picker
            style={{height: 50, width: 150}}
            selectedValue = {this.state.LeafyAmount}
            onValueChange={(itemValue) =>
            this.setState({LeafyAmount: itemValue})}
          >
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
            selectedValue = {this.state.completeInput}
            onValueChange={(itemValue) =>
            this.setState({completeInput: itemValue})}
          >
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
            selectedValue = {this.state.completeAmount}
            onValueChange={(itemValue) =>
            this.setState({completeAmount: itemValue})}
          >
            <Picker.Item label="0 lb" value="0 lb" />
            <Picker.Item label="1/2 lb" value="0.5 lb" />
            <Picker.Item label="1 lb" value="1 lb" />
            <Picker.Item label="2 lb" value="2 lb" />
          </Picker>
        </View>
        <View style = {styles.icons}>
            <Button 
            onPress = {() => this.onPressSaveButton()}
            title = "Save"
            />
        </View>
      </ScrollView>
    );
  }
  
}

export default DailyInputScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginEnd: 10,
    paddingLeft: 40,
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
