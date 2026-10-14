import { TextInput, StyleSheet } from "react-native";

export default function Field({ style, ...otherProps }) {
  return <TextInput style={[styles.textInput, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
