import { Text, Button, View } from "react-native";
import { styles } from "../style/Styles.js";
import Field from "../components/Field.js";

export default function LoginPage({ navigation }) {
  function handlePressed(props) {
    navigation.navigate(props);
  }

  return (
    <View name="LoginView" style={[styles.formContainer, styles.centerBox]}>
      <Field placeholder="Username" />
      <Field placeholder="Password" secureTextEntry={true} />
      <Button
        name="CreateAccountButton"
        color="#2C2C2C"
        title="Create Account"
        onPress={() => handlePressed("ListPage")}
      />

      <View
        name="SignUpLinkView"
        style={{ alignItems: "center", marginTop: 10 }}
      >
        <Text
          name="SignUpLink"
          style={{
            color: "#2C2C2C",
            textDecorationLine: "underline",
            fontSize: 15,
          }}
          onPress={() => handlePressed("SignUpPage")}
        >
          Sign up!
        </Text>
      </View>
    </View>
  );
}
