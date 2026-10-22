import { Text, Button, View } from "react-native";
import { styles, customTheme } from "../../style/Styles.js";
import { useState } from "react";
import ToastManager, { Toast } from "toastify-react-native";
import Field from "../../components/Field.js";
import UserCredentials from "../../models/user-credentials.js";
import auth from '../../services/auth.js';


export default function LoginPage({ navigation }) {
  const [credentials, setCredentials] = useState(new UserCredentials({username: '', password: ''}))

  async function handleLogin() {
    try {
      const ok = await auth.logIn(credentials);
      if (ok) {
        navigation.replace("ListPage");
      } else {
        Toast.error("Identifiants invalides");
      }
    } catch (e) {
      Toast.error(e.message);
    }
  }

  function handleSignUp() {
    navigation.navigate("SignUpPage"); 
  }

  return (
    <View name="LoginView" style={[styles.formContainer, styles.centerBox]}>
      <Field placeholder="Username"  onChangeText={ text => setCredentials(new UserCredentials({...credentials, username: text })) } />
      <Field placeholder="Password" secureTextEntry={true} onChangeText={ text => setCredentials(new UserCredentials({...credentials, password: text })) } />
      <Button
        name="CreateAccountButton"
        color={customTheme.colors.card}
        title="Login"
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

      <ToastManager />
    </View>
  );
}
