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
                    {key: '1 tb Olive Oil'},
                    {key: '1 Yellow Onion'},
                    {key: '2 Cloves of Garlic'},
                    {key: '2 tb Flour'},
                    {key: '2 tb Chili Powder'},
                    {key: '15 oz can diced tomatoes'},
                    {key: '15 oz can kidney beans'},
                    {key: '15 oz can black beans'},
                    {key: '1 cup frozen corn kernels'},
                    {key: '2 cups vegetable broth'},
                    {key: '2 cups uncooked macaroni noodles'},
                    {key: '1 cup cheese flavoured shreds'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
                <Text style = {styles.title}>Instructions</Text>
                <FlatList
                  data={[
                    {key: '1.Dice the onion and mince the garlic. Sauté the onion and garlic with olive oil in the bottom of a large pot (5 qt) over medium heat for 2-3 minutes, or until the onions are soft and transparent.'},
                    {key: '2. Add the flour and chili powder to the sautéed onions and garlic. Continue to stir and sauté for about two minutes, or just until the flour and chili powder begin to coat the bottom of the pot.'},
                    {key: '3. Drain and rinse the kidney beans, black beans, and pinto beans. Add the diced tomatoes, tomato sauce, all three beans, corn, and vegetable broth to the pot. Stir to combine and to dissolve any flour and chili powder off the bottom of the pot.'},
                    {key: '4. Add the uncooked macaroni noodles and stir to combine. Place a lid on the pot, turn the heat up to medium high, and let the pot come up to a boil. Stir every other minute or so to loosen the noodles from the bottom of the pot as it heats up.'},
                    {key: '5. When the pot reaches a boil, turn the heat down to low, or just above low, so it continues to gently simmer. Let the pot gently simmer for 12-15 minutes, or until the pasta is tender and the liquid is thick and saucy. Stir frequently as it simmers to make sure the pasta does not stick to the bottom of the pot.'},
                    {key: '6. Once the pasta is tender, add the shredded cheddar and stir it in until melted. Serve hot.'}
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
  
