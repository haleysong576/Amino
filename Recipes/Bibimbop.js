import React, {Component} from "react";
import {View, Image, StyleSheet, FlatList, Text} from "react-native";

class Bibimbop extends Component{

    static navigationOptions = {
        title: 'Bibimbop'
      }
    
    render(){

        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Ingredients</Text>
                <FlatList
                  data={[
                    {key: '0.38 cup short-grain brown or white rice, rinsed (soaking for 12-24 hours to speed cooking is optional*)'},
                    {key: '1.5 cups packed mixed vegetables (such as finely shredded carrot, thinly sliced zucchini, or spinach)'},
                    {key: '0.5 heaping cup bean sprouts (if you can’t find, sub more mixed vegetables)'},
                    {key: '1 stalks green onion, sliced on an angle'},
                    {key: '1 cloves garlic, minced'},
                    {key: '1-2 Tbsp Korean Gochujang Sauce (or sub store-bought — look for vegan or gluten-free as needed, such as Wholly Gochujang)'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
                <Text style = {styles.title}>Instructions</Text>
                <FlatList
                  data={[
                    {key: '1.To a medium saucepan, add cooking water (if you soaked your rice, start with 1 ¼ cups water as recipe is written), rinsed rice, and salt. Heat over high heat and bring to a boil, reduce heat to simmer, and cover. Cook for 15-20 minutes or until water is absorbed and rice is tender and fluffy. Soaked rice generally takes less time to cook. Unsoaked rice can take up to 30 minutes or more. Keep covered and set aside.'},
                    {key: '2. While the rice finishes cooking, heat a large skillet over medium heat (stainless steel or cast iron are best). Once hot, add 1 tsp of sesame oil or enough to just coat the pan.'},
                    {key: '3. Once the oil is hot, add vegetables one type at a time and cook in batches until lightly browned (1-2 minutes), seasoning each with a little minced garlic and a dash of coconut aminos, tamari, or sea salt. Cooking in batches allows you to arrange vegetables separately over the rice for visual effect. We cooked the zucchini first, then carrots, green onion, bean sprouts, and spinach. Add more oil to the pan as needed between vegetables.'},
                    {key: '4. Arrange cooked vegetables in individual piles on a serving plate and cover gently to keep warm until serving.'},
                    {key: '5. To serve, divide desired amount of rice between serving bowls (see notes for traditional dolsot recommendations and crispy rice hacks!) and top with portions of cooked veggies and egg.'},
                    {key: '6. Serve with 1-2 Tbsp Gochujang, kimchi (optional), and a dash of sesame seeds (optional). Bibimbap means “mixed rice,” so once your egg and Gochujang sauce are added, use a spoon or your chopsticks to stir everything together and mix the flavors. Then enjoy!'}
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
