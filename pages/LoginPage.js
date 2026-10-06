import { Text, Button, View } from "react-native";
import { styles, customTheme } from "../style/Styles.js";
import Field from "../components/Field.js";

export default function LoginPage({ navigation }) {
  function handleLogin() {
    navigation.replace("ListPage");
  }

  function handleSignUp() {
    navigation.navigate("SignUpPage"); 
  }

  return (
    <View name="LoginView" style={[styles.formContainer, styles.centerBox]}>
      <Field placeholder="Username" />
      <Field placeholder="Password" secureTextEntry={true} />
      <Button
        name="CreateAccountButton"
        color={customTheme.colors.card}
        title="Create Account"
        onPress={() => handleLogin()}
      />

      <View
        name="SignUpLinkView"
        style={{ alignItems: "center", marginTop: 10 }}
      >
        <Text
          name="SignUpLink"
          style={{
            color: customTheme.colors.card,
            textDecorationLine: "underline",
            fontSize: 15,
          }}
          onPress={() => handleSignUp()}
        >
          Sign up!
        </Text>
      </View>
    </View>
  );
}
