import { Text, Button, View, Pressable } from "react-native";
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

  function handlePressed(mode) {
    if (mode === "add") {
      navigation.navigate("MainPage", { mode });
    } else {
      let recipe = sortedRecipes.at(getRandomInt(sortedRecipes.length));
      navigation.navigate("MainPage", { mode, recipe });
    }
  }

  return (
    <View name="LoginView" style={[styles.formContainer, styles.centerBox]}>
      <Text>{JSON.stringify(sortedRecipes)}</Text>

      <Button
        name="ViewButton"
        color="#2C2C2C"
        title="View"
        onPress={() => handlePressed("edit")} // dirige l'utilisatuer sur une recette random en mode edit
      />
      <Button
        name="AddButton"
        color="#2C2C2C"
        title="Add"
        onPress={() => handlePressed("add")} // dirige l'utilisatuer vers le formulaire de recette en mode add
      />
    </View>
  );
}
