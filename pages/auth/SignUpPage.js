import { Button, View } from "react-native";
import { styles, customTheme } from "../../style/Styles.js";
import Field from "../../components/Field.js";

export default function SignUpPage({ navigation }) {
  function handlePressed(props) {
    navigation.replace(props);
  }

  return (
    <View name="SignUpView" style={[styles.formContainer, styles.centerBox]}>
      <Field placeholder="Username" />
      <Field placeholder="Password" secureTextEntry={true} />
      <Field placeholder="Password Confirmation" secureTextEntry={true} />
      <Button
        name="CreateAccountButton"
        color={customTheme.colors.card}
        title="Create Account"
        onPress={() => handlePressed("ListPage")}
      />
    </View>
  );
}
