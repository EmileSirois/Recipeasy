import { Text, Button, View } from "react-native";
import { styles } from "../style/Styles.js";
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

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function handleAdd() {
    navigation.navigate("FormPage");
  }

  function handleView() {
    let recipe = sortedRecipes.at(getRandomInt(sortedRecipes.length));
    navigation.navigate("FormPage", { recipe });
  }

  return (
    <View name="LoginView" style={[styles.formContainer, styles.centerBox]}>
      <Text>{JSON.stringify(sortedRecipes)}</Text>

      <Button
        name="ViewButton"
        color="#2C2C2C"
        title="View"
        onPress={() => handleView()} // dirige l'utilisatuer sur une recette random en mode edit
      />
      <Button
        name="AddButton"
        color="#2C2C2C"
        title="Add"
        onPress={() => handleAdd()} // dirige l'utilisatuer vers le formulaire de recette en mode add
      />
    </View>
  );
}
