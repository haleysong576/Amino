import React, {Component} from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

class InfoMenuScreen extends Component{

    // getDataFromApi();
     
     static navigationOptions = {
       title: 'Amino Acid Information'
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
     render(){
         if(this.state.isLoading) {
           return (<View style = {styles.container}>
                 
           </View>
           )
         }
         return (
           <View style = {{flex:1, paddingTop: 20}}>
             <Text style = {styles.title}>Essential Amino Acids</Text>
             <FlatList
               data = {this.state.dataSource}
               renderItem = {({item}) => 
                 <Text style = {styles.item}>{item.name}</Text>
               }
               keyExtractor = {({_id}, index) => _id} 
             />
           </View>
         );
     }
   }

    export default InfoMenuScreen;

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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'black'
      },
    });
