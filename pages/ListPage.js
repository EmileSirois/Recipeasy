import { Text, Button, View } from "react-native";
import { styles } from "../style/Styles.js";
import Field from "../components/Field.js";

export default function ListPage() {
  function handlePressed() {
    navigation.navigate("LoginPage");
  }

  return (
    <View name="LoginView" style={[styles.formContainer, styles.centerBox]}>
      <Button
        name="CreateAccountButton"
        color="black"
        title="Create Account"
        onPress={() => handlePressed()}
      />
    </View>
  );
}
