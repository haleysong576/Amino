import React, {Component} from "react";
import {View, Image, StyleSheet, FlatList, Text} from "react-native";

class Chili extends Component{

    static navigationOptions = {
        title: 'Chili'
      }
    
    render(){

        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Ingredients</Text>
                <FlatList
                  data={[
                    {key: '2 tablespoons olive oil'},
                    {key: '1 cup basmati rice'},
                    {key: 'Salt'},
                    {key: '2 cloves garlic, minced'},
                    {key: '2 15.5-oz. cans black beans, drained, rinsed '},
                    {key: '1 teaspoon chili powder'},
                    {key: '1 teaspoon cumin'},
                    {key: '1 avocado, pitted, peeled, diced'},
                    {key: '2 tablespoons lime juice'},
                    {key: '1 1/2 cups cherry tomatoes, quartered'},
                    {key: '1 1/2 cups corn kernels, fresh or frozen, thawed if frozen'},
                    {key: 'Sour cream, shredded Cheddar, cilantro leaves, sliced radishes, chopped pickled jalapeños, and tortilla chips, optional'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
                <Text style = {styles.title}>Instructions</Text>
                <FlatList
                  data={[
                    {key: '1. Warm 1 Tbsp. oil in a saucepan over medium-high heat. Add rice and cook, stirring, until fragrant, 1 to 2 minutes. Add 1 1/2 cups water and 1/2 tsp. salt. Bring to a boil, cover, reduce heat to low and simmer until water is absorbed, about 15 minutes.'},
                    {key: '2. Warm remaining 1 Tbsp. oil in a skillet over medium heat. Add garlic and sauté until fragrant, about 30 seconds. Stir in 1/2 cup water, beans, chili powder and cumin. Bring to a simmer and cook until most of liquid has evaporated, 5 to 7 minutes, stirring once or twice. Season lightly with salt.'},
                    {key: '3. Combine avocados and lime juice in a medium bowl. Divide rice among 4 bowls. Top with bean mixture, corn, tomatoes and avocados. Serve with garnishes and chips on the side, if desired.'},
                  ]}
                  renderItem={({item}) => <Text style = {styles.item}>{item.key}</Text>}
                  />

            </View>
        );
    }
}

export default Chili;

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
