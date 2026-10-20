import { Button, View } from "react-native";
import { styles, customTheme } from "../../style/Styles.js";
import { useState } from "react";
import ToastManager, { Toast } from "toastify-react-native";
import Field from "../../components/Field.js";
import UserCredentials from "../../models/user-credentials.js";
import auth from '../../services/auth.js';

export default function SignUpPage({ navigation }) {
  const [credentials, setCredentials] = useState(new UserCredentials({username: '', password: ''}))
  const [pwdVerif, setPwdVerif] = useState()

  async function handleSignUp() {
    let errorLog = [];

    if(!credentials.username)
    {
      errorLog.push("Nom d'utilisateur requis.");
    }
    if(!credentials.password)
    {
      errorLog.push("Mot de passe requis.");
    }
    if(credentials.password != pwdVerif)
    {
      errorLog.push("Le mot de passe et la validation doivent être identique")
    }

    if (errorLog.length > 0) 
    {
      Toast.error(errorLog.join("\n"));
    }
    else
    {
      const success = await auth.signUp(credentials)

      if (success) {
        navigation.replace("ListPage");
      } else {
        Toast.error("Invalid credentials");
      }
    }
  }

  return (
    <View name="SignUpView" style={[styles.formContainer, styles.centerBox]}>
      <Field placeholder="Username" onChangeText={ text => setCredentials(new UserCredentials({...credentials, username: text })) }/>
      <Field placeholder="Password" secureTextEntry={true} onChangeText={ text => setCredentials(new UserCredentials({...credentials, password: text })) }/>
      <Field placeholder="Password Confirmation" secureTextEntry={true} onChangeText={text => setPwdVerif(text)} />
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
