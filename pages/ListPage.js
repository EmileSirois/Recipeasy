import { Text, Button, View } from "react-native";
import { styles } from "../style/Styles.js";
import { useNavigation } from "@react-navigation/native";
import Field from "../components/Field.js";

export default function ListPage() {
  const navigation = useNavigation();

  let recipe = {
    category: 1,
    name: "RecetteTest",
    durationHours: 1,
    durationMinutes: 30,
    description:
      "Recette test pour la nivigation distincte entre les modes de l'application",
  };

  function handlePressed(mode) {
    if (mode === "add") {
      navigation.navigate("MainPage", { mode });
    } else {
      navigation.navigate("MainPage", { mode, recipe });
    }
  }

  return (
    <View name="LoginView" style={[styles.formContainer, styles.centerBox]}>
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
