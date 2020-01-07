import React, {Component} from "react";
import {View, Image, StyleSheet, Button, Text, FlatList} from "react-native";

class ViewAminoAcids extends Component{

    static navigationOptions = {
        title: 'Daily Amino Acids'
      }
      constructor (props){
        super(props);
        this.state = {isLoading: true,
                      dataSoruce: []}
      }
      componentDidMount(){
        return fetch('http://10.0.2.2:3000/consumed/',{
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
      return(
        <View style = {styles.container}>
            <View style = {{flex:1}}>
                <Text style = {styles.title}>Consumed Amino Acids</Text>
            </View>
            <View style = {{flex:4, paddingTop: 50}}>
                <FlatList
               data = {this.state.dataSource}
               renderItem = {({item}) => 
                 <Text style = {styles.item}>{item.food}       {item.Amount}</Text>
               }
               keyExtractor = {({_id}, index) => _id} 
             />
            </View>
        </View>
      );

    }
}

export default ViewAminoAcids;

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
    });
