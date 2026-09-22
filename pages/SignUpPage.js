import { Button, View } from "react-native";
import { styles } from "../style/Styles.js";
import Field from "../components/Field.js";

export default function SignUpPage() {
  return (
    <View name="SignUpView" style={[styles.formContainer, styles.centerBox]}>
      <Field placeholder="Username" />
      <Field placeholder="Password" secureTextEntry={true} />
      <Field placeholder="Password Confirmation" secureTextEntry={true} />
      <Button name="CreateAccountButton" color="black" title="Create Account" />
    </View>
  );
}
