import { Text, Button, View, Pressable } from "react-native";
import { styles } from "../style/Styles.js";
import Recipes from "../data/Recipes.json";

export default function ListPage({ navigation, route }) {
  const { updatedRecipe } = route?.params ?? {};

  console.log(updatedRecipe);

  if (updatedRecipe) {
    Recipes.push(updatedRecipe); // ajoute la recette mise à jour à la liste des recettes
  }

  Recipes.sort((a, b) => a.name.localeCompare(b.name)); // tri les recettes par ordre alphabétique

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function handlePressed(mode) {
    if (mode === "add") {
      navigation.navigate("MainPage", { mode });
    } else {
      let recipe = Recipes.at(getRandomInt(Recipes.length));
      navigation.navigate("MainPage", { mode, recipe });
    }
  }

  return (
    <View name="LoginView" style={[styles.formContainer, styles.centerBox]}>
      <Text>{JSON.stringify(Recipes)}</Text>

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
