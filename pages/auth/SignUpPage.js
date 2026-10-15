import { Button, View } from "react-native";
import { styles, customTheme } from "../../style/Styles.js";
import { useState } from "react";
import ToastManager, { Toast } from "toastify-react-native";
import Field from "../../components/Field.js";
import UserCredentials from "../../models/user-credentials.js";
import auth from '../../services/auth.js';

export default function SignUpPage({ navigation }) {
  const [credentials, setCredentials] = useState(new UserCredentials({username: '', password: ''}))

  async function handleSignUp() {
    const success = await auth.signUp(credentials)

    if (success) {
      navigation.replace("ListPage");
    } else {
      Toast.error("Invalid credentials");
    }
  }

  return (
    <View name="SignUpView" style={[styles.formContainer, styles.centerBox]}>
      <Field placeholder="Username" onChangeText={ text => setCredentials(new UserCredentials({...credentials, username: text })) }/>
      <Field placeholder="Password" secureTextEntry={true} onChangeText={ text => setCredentials(new UserCredentials({...credentials, password: text })) }/>
      <Field placeholder="Password Confirmation" secureTextEntry={true} />
      <Button
        name="CreateAccountButton"
        color={customTheme.colors.card}
        title="Create Account"
        onPress={() => handleSignUp()}
      />
      <ToastManager />
    </View>
    
  );
}
