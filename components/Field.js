import { TextInput } from "react-native";
import { styles } from "../style/Styles.js";

export default function Field(props) {
  return (
    <TextInput
      style={[styles.textInput, props.style]}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
    />
  );
}
