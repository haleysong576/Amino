import React, {Component} from "react";
import {View, Text, StyleSheet, FlatList, Button} from "react-native";

class DailyTrackerScreen extends Component{

    // getDataFromApi();
     
     static navigationOptions = {
       title: 'Daily Tracker'
     }
   
     constructor (props){
       super(props);
       this.state = {isLoading: true,
                     dataSoruce: []}
     }
     componentDidMount(){
       return fetch('http://10.0.2.2:3000/posts/',{
         method: 'GET',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         }
       })
         .then((response) => response.json())
         .then((responseData) => {
           this.setState({
             isLoading: false,
             dataSource: responseData,
           });
         //  return responseData;
         })
         .catch((error) =>{
           console.error(error);
         });
     }
     onPressInputButton() {
       this.props.navigation.navigate('DailyInput');
     }
     onPressViewButton() {
       this.props.navigation.navigate('ViewAminoAcids');
     }
     render(){
         if(this.state.isLoading) {
           return (<View style = {styles.container}>
                 
           </View>
           )
         } 
         
         return (
           <View style = {styles.container}>
             <View style = {{flex:6, paddingTop: 10}}>
              <Text style = {styles.title}>Lacking Amino Acids</Text>
             <FlatList
               data = {this.state.dataSource}
               renderItem = {({item}) => 
                 <Text style = {styles.item}>{item.name}</Text>
               }
               keyExtractor = {({_id}, index) => _id} 
             />
            </View>
              <View style = {styles.button}>
                <Button
                  onPress = {() => this.onPressInputButton()}
                  title = "Add"
                  />
                <Button
                  onPress = {() => this.onPressViewButton()}
                  title = "View Consumed"
                  />
              </View>
              
           
           </View>
         );
     }
   }
   function Item({ id, title, selected, onSelect }) {
    return (
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
        ]}
      >
      <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
    export default DailyTrackerScreen;

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
      color: 'green',
      fontWeight: 'bold',
      fontSize: 30,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'black'
      },
      button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
    });
