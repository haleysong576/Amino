import React, {Component} from "react";
import {View, Image, StyleSheet, FlatList, Text} from "react-native";

class OatmealPancakes extends Component{

    static navigationOptions = {
        title: 'OatmealPancakes'
      }
    
    render(){

        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Ingredients</Text>
                <FlatList
                  data={[
                    {key: '1/2 cup all-purpose flour'},
                    {key: '1/2 cup quick cooking oats'},
                    {key: '1 tablespoon white sugar'},
                    {key: '1 teaspoon baking powder'},
                    {key: '1/2 teaspoon salt'},
                    {key: '3/4 cup buttermilk'},
                    {key: '1 teaspoon vanilla extract'},
                    {key: '2 tablespoons vegetable oil'},
                    {key: '1/2 teaspoon baking soda'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
                <Text style = {styles.title}>Instructions</Text>
                <FlatList
                  data={[
                    {key: '1. Place flour, oats, sugar, baking powder, baking soda, salt, buttermilk, vanilla and oil in a food processor and puree until smooth.'},
                    {key: '2. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'},
                  ]}
                  renderItem={({item}) => <Text style = {styles.item}>{item.key}</Text>}
                  />

            </View>
        );
    }
}

export default OatmealPancakes;

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
      fontSize: 15,
      color: 'black'
    },
  });
