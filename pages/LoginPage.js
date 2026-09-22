import { Text, Button, View } from "react-native";
import { styles } from "../style/Styles.js";
import Field from "../components/Field.js";

export default function LoginPage() {
  return (
    <View name="LoginView" style={[styles.formContainer, styles.centerBox]}>
      <Field placeholder="Username" />
      <Field placeholder="Password" secureTextEntry={true} />
      <Button name="CreateAccountButton" color="black" title="Create Account" />

      <View
        name="SignUpLinkView"
        style={{ alignItems: "center", marginTop: 10 }}
      >
        <Text
          name="SignUpLink"
          style={{
            color: "blue",
            textDecorationLine: "underline",
            fontSize: 12,
          }}
        >
          Sign up!
        </Text>
      </View>
    </View>
  );
}
