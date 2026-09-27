import { Text, Button, View } from "react-native";
import { styles } from "../style/Styles.js";
import { useNavigation } from "@react-navigation/native";
import Field from "../components/Field.js";
import Recipes from "../data/Recipes.json";

export default function ListPage() {
  const navigation = useNavigation();

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
