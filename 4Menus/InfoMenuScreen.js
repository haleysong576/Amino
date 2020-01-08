import React, {Component} from "react";
import {View, Text, StyleSheet, FlatList, Button} from "react-native";

class InfoMenuScreen extends Component{

    // getDataFromApi();
     
     static navigationOptions = {
       title: 'Amino Acid Information'
     }
     
     onPressButton() {
      this.props.navigation.navigate('DailyTracker');
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
             <Text style = {styles.title}>Essential Amino Acids That You Are Lacking Right Now</Text>
             <FlatList
               data = {this.state.dataSource}
               renderItem = {({item}) => 
                 <Text style = {styles.item}>{item.name}</Text>
               }
               keyExtractor = {({_id}, index) => _id} 
             />
             <Text>There are 22 amino acids in protein, where 9 of them are essential. 
               The essential amino acids cannot be synthesized by a human body, it must be consumed from food.
               Animal sources of protein are are complete; there are all the amino acids.
               However, in some plant sources of complete protein, one or more amino acids are non-existent.
               You must take a variety of plant based protein to get all the essential amino acids.
               This tracker app will help you to keep a record of the amino acids that you need to take. 
               Go to your personal tracker, and start adding in your aminos. Adios Amigos!
             </Text>
             <View style = {styles.button}>
              <Button
                  onPress = {() => this.onPressButton()}
                  title = "Go to my tracker"
              />
             </View>
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
      padding: 20,
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
      button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
    });

