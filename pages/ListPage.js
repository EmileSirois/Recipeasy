import { Text, Button, View, FlatList, StyleSheet, Pressable } from "react-native";
import { styles, customTheme } from "../style/Styles.js";
import { useState, useEffect } from "react";
import Recipes from "../data/Recipes.json";

export default function ListPage({ navigation, route }) {
  const [recipes, setRecipes] = useState(Recipes); // initialise l'état des recettes avec les données importées

  useEffect(() => {
    if (route.params?.updatedRecipe) {
      setRecipes([...recipes, route.params.updatedRecipe]);
    }
  }, [route.params?.updatedRecipe]);

  const sortedRecipes = [...recipes].sort((a, b) =>
    a.name.localeCompare(b.name),
  ); // tri les recettes par ordre alphabétique

  const Item = ({id, category, name, durationHours, durationMinutes, description }) => (
    <Pressable style={({ pressed }) => [
        styles.item,
        pressed && ItemStyles.itemPressed,
      ]} 
      onPress = {() => handleListPress(id)}>

      <View style={{flex: 1, flexDirection: "row", gap: 10, alignItems: "center"}}>
        <Text style={ItemStyles.category}>{category}</Text>
        <Text style={ItemStyles.title}>{name}</Text>
      </View>

      <View style={{flex: 1, flexDirection: "row", gap: 10, alignItems: "center"}}>
        <Text style={ItemStyles.duration}>{durationHours}h {durationMinutes}min</Text>
        <Text style={ItemStyles.description}>{description}</Text>
      </View>
    </Pressable>
  );
  
  const Separator = () => <View style={ItemStyles.separator} />;

  const emptyListMessage = () => (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 18, color: "#888"}}>No recipes available.</Text>
    </View>
  );

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function handleAdd() {
    navigation.navigate("FormPage", {});
  }

  function handleListPress(id) {
    let recipe = sortedRecipes.find((recipe) => recipe.id === id);
    navigation.navigate("FormPage", { recipe });
  }

  return (
    <View name="LoginView" style={[styles.formContainer, styles.centerBox]}>
      {/* <Text>{JSON.stringify(sortedRecipes)}</Text> */}
      <FlatList
        data={sortedRecipes}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => String(item.id)}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={emptyListMessage}
      />
      
      <Button
        name="AddButton"
        color={customTheme.colors.card}
        title="Add"
        onPress={() => handleAdd()} // dirige l'utilisatuer vers le formulaire de recette en mode add
      />
    </View>
  );
}

const ItemStyles = StyleSheet.create({
  title: {
    fontSize:20,
  },
  category: {
    fontSize:16,
    fontWeight: "bold",
  },
  duration: {
    fontSize:14,
    color: "#666",
  },
  description: {
    fontSize:12,
    color: "#888",
  },
  item: { 
    padding: 16, 
    backgroundColor: "white" 
  },
  itemPressed: { 
    backgroundColor: "#eee" ,
    opacity: 0.5
  },
});