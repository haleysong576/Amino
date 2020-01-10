import React, {Component} from "react";
import {View, Image, StyleSheet, FlatList, Text} from "react-native";

class VeganBurger extends Component{

    static navigationOptions = {
        title: 'Vegan Burgers'
      }
    
    render(){

        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>Ingredients</Text>
                <FlatList
                  data={[
                    {key: '1 cup cooked brown rice'},
                    {key: '1 cup raw walnuts (or sub bread crumbs)'},
                    {key: '1/2 Tbsp avocado oil (plus more for cooking)'},
                    {key: '1/2 medium white onion (finely diced // 1/2 onion yields ~3/4 cup)'},
                    {key: '1 Tbsp each chili powder, cumin powder, and smoked paprika'},
                    {key: '1/2 tsp each sea salt and black pepper (plus more for coating burgers)'},
                    {key: '1 Tbsp coconut sugar (or sub organic brown or muscovado sugar)'},
                    {key: '1 1/2 cups cooked black beans* (well rinsed, drained and patted dry)'},
                    {key: '1/3 cup panko bread crumbs (if gluten-free, use gluten-free bread crumbs)'},
                    {key: '3-4 Tbsp vegan BBQ sauce'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
                <Text style = {styles.title}>Instructions</Text>
                <FlatList
                  data={[
                    {key: '1. Heat skillet over medium heat. Once hot, add raw walnuts and toast for 5-7 minutes, stirring frequently, until fragrant and golden brown. Let cool and move onto the next step.'},
                    {key: '2. In the meantime, heat the same skillet over medium heat. Once hot, add oil and onion. Season with a bit of salt and pepper and sauté for 3-4 minutes, or until onion is fragrant, soft, and translucent. Remove from heat and set aside.'},
                    {key: '3. Once walnuts are cooled, add to blender or food processor with chili powder, cumin, smoked paprika, salt, pepper and coconut sugar and blend until a fine meal (see photo) is achieved. Set aside.'},
                    {key: '4. To a large mixing bowl, add drained, dried black beans and mash well with a fork, leaving only a few whole beans.'},
                    {key: '5. Next add cooked rice, spice-walnut mixture, sautéed onion, panko bread crumbs, BBQ sauce, and mix thoroughly with a wooden spoon for 1-2 minutes, or until a moldable dough forms. If dry, add extra 1-2 Tbsp (amount as original recipe is written // adjust if altering batch size) BBQ sauce. If too wet, add more panko bread crumbs. Taste and adjust seasonings as needed.'},
                    {key: '6. For larger burgers, divide into 5 patties (1/2 cup in size // amount as original recipe is written), or form 10 smaller burgers (1/4 cup in size // amount as original recipe is written). To help form the patties, line your 1/2 or 1/4 measuring cup with plastic wrap and pack with burger mixture. Press down to pack firmly, then lift out by the plastic wrap’s edge, and slightly flatten with hands to form a 3/4-inch thick patty. Set on a baking sheet or plate for grilling.'},
                    {key: '7. If grilling, heat the grill at this time and brush the grill surface with oil to ease cooking. Otherwise, heat the same skillet you used earlier to medium heat.'},
                    {key: '8. Once skillet is hot, add just enough oil to lightly coat the bottom of your skillet, then add your burgers – only as many as will comfortably fit in the pan. Otherwise, add burgers to the grill and close lid.'},
                    {key: '9. Cook for 3-4 minutes or until well browned on the underside, then flip gently. They aren’t as firm as meat burgers, but will definitely hold their shape. Reduce heat if cooking/browning too quickly. Cook for 3-4 minutes on other side.'},
                    {key: '10. Remove burgers from heat to let cool slightly, and prepare any other toppings/sides at this time (such as grilling/toasting your buns).'},
                    {key: '11. Serve burgers as is, or on toasted buns with desired toppings. Leftovers keep in the refrigerator for 2-3 days. See notes for freezing/reheating instructions.'}
                  ]}
                  renderItem={({item}) => <Text style = {styles.item}>{item.key}</Text>}
                  />

            </View>
        );
    }
}

export default VeganBurger;

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
